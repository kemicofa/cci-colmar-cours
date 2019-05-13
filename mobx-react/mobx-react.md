<!-- page_number: true -->

Mobx and Mobx-React
===
![](https://media.giphy.com/media/l41YuA8oAF1Hjp1tK/giphy.gif)
Simple, scalable state management

Kevin Faulhaber
CCI Colmar

---


What is Mobx ?
===

A library that
* does **not** require from react !
* easy to handle state management
* scalable via [**T**ransparently applying **F**unctional **R**eactive **P**rogramming (TFRP)](https://hackernoon.com/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.9aufnt6up)
	1. Programming paradigm for reactive programming
	2. Uses Functional Programming building blocks (map, reduce, filter, etc)

---


Philosophy
===

![](https://media.giphy.com/media/mPDLfPBVt3ZQy99ESd/giphy.gif)

> Anything that can be derived from the application state, should be derived. Automatically.


Includes
* UI
* data serialization
* server communication

---

How does it work ?
===

![](https://mobx.js.org/docs/flow.png)

![](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

---


React and Mobx Combination
===

React
* renders application state via renderable components
* optimally render UI by using virtual DOM
* reduces number of dom mutations

Mobx
* store/update application state that react uses
* optimally synchronize application state with react
* Uses reactive virtual dependency state graph (RVDSG)
* RVDSG only updated when strictly needed

---

Core Concepts
===

Lets see the core concepts available in Mobx/Mobx-react. There are only a few to remember; Observables, Computed, etc.

![](https://media.giphy.com/media/LyJ6KPlrFdKnK/giphy.gif)

---

[Observable state](https://mobx.js.org/refguide/observable-decorator.html)
===

* decorators are an ES.Next feature
* observables replace `state`

```javascript
import { observable } from "mobx";

class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;
}
```

---

[Observable Objects](https://mobx.js.org/refguide/object.html)
===

* properties copied into a clown and made observable
* applied recursively

```javascript
import { observable } from "mobx";

class Todo {
  id = Math.random();
  @observable data = {
  	title: "",
    finished: "",
    stuff: []
  };
}
```
---

[Observable Arrays](https://mobx.js.org/refguide/array.html)
===

Similar to Observable Objects; Values are copied into clones and made observable recursively

---

[Computed values](https://mobx.js.org/refguide/computed-decorator.html)
===

* computed values are called *automatically* the moment the data is modified
* used with getter/setters

```javascript
class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}
```

---

[Observable Maps](https://mobx.js.org/refguide/map.html)
===

Works in a similar way as Observable Array and Object

```javascript
@observable map = new Map()
```
See [MDN Map Documentaiton](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) for all methods and properties.

Mobx adds additional methods:

* `toJS()`
* `toJSON()`
* `intercept(interceptor)`
* `observe(listener, fireImmediately?)`
* `merge(values)`
* `replace(values)`

---

[Custom Reactions](https://egghead.io/lessons/react-write-custom-mobx-reactions-with-when-and-autorun)
===

observables and computed are `reactions` but one can make their own custom reaction with [`when`](https://mobx.js.org/refguide/when.html) , [`autorun`](https://mobx.js.org/refguide/autorun.html) and [`reaction`](https://mobx.js.org/refguide/reaction.html)

---

[when](https://mobx.js.org/refguide/when.html)
===

Runs when the given `predicate` returns true.

```javascript
when(
    predicate: () => boolean, 
    effect?: () => void, 
    options?
)
```

---

[autorun](https://mobx.js.org/refguide/autorun.html)
===

Reasons to use it
* want to create a reactive function
* does not have observers

Use it when
* a function should run automatically
* no new value created

![](https://media.giphy.com/media/2bUpP71bbVnZ3x7lgQ/giphy.gif)

---

autorun example
===

```javascript
var numbers = observable([1,2,3]);
var sum = computed(() => numbers.reduce((a, b) => a + b, 0));

var disposer = autorun(() => console.log(sum.get()));
// prints '6'
numbers.push(4);
// prints '10'

disposer();
numbers.push(5);
// won't print anything, nor is `sum` re-evaluated
```

---

[autorun options](https://mobx.js.org/refguide/autorun.html#options)
===

Second argument is an optional object with the following properties
* `delay`
* `name`
* `onError`
* `scheduler`

---

[reaction](https://mobx.js.org/refguide/reaction.html)
===

Variation of autorun with more control on which observables will be observed.

```javascript
reaction(
    () => data, 
    (data, reaction) => { 
    	sideEffect 
    }, 
    options?
)
```

Parameters
1. Tracked data that is used as input to the second parameter
2. Effect function

Returns a disposer function

Won't be run directly when created, only when a new value is returned.

---

reaction options
===

* `fireImmediately`
* `delay`
* `equals`
* `name`
* `onError`
* `scheduler`


---

[reaction vs autorun](https://mobx.js.org/refguide/reaction.html#example)
===

![](https://media.giphy.com/media/xUA7bdmmuDruZ7f86k/giphy.gif)

Control vs Automatic

---

Changing Observables
===

action, async actions & flows, Object api

---

[action](https://mobx.js.org/refguide/action.html)
===

An application has actions that change its state.

* structure code better
* wraps functions with 3 properties: transaction, untracked, allowStateChanges
* should be added on anything that modifies the state
* provides additional debugging information

```javascript
action(fn)
action(name, fn)
@action classMethod() {}
@action(name) classMethod () {}
@action boundClassMethod = (args) => { body }
@action(name) boundClassMethod = (args) => { body }
@action.bound classMethod() {}
```
---

when to use `actions`?
===

* functions that modify `state`


when **NOT** to use `actions`?
===

* perform look-ups
* filters

---

[Bound actions](https://mobx.js.org/refguide/action.html#bound-actions)
===

* Automatically binds actions to the targetted object
* Name property will always be the method name

```javascript
class Ticker {
    @observable tick = 0

    @action.bound
    increment() {
        this.tick++ // 'this' will always be correct
    }
}

const ticker = new Ticker()
setInterval(ticker.increment, 1000)
```

---

[Asynchronous Actions](https://mobx.js.org/best/actions.html)
===

> action wrapper / decorator only affects the currently running function, not functions that are scheduled (but not invoked) by the current function! 
## IMPORTANT !
>state modifying code should be wrapped as action

* Promises
* Async/Await
* Flow and function generators

No method is specifically better than the other

---

[Promises](https://mobx.js.org/best/actions.html#promises)
===

`Basic` vs `Inline Actions` vs `runInAction`

---
[Async/Await](https://mobx.js.org/best/actions.html#async--await)
===

Sugar syntax for Promises

---

[Flows](https://mobx.js.org/best/actions.html#flows)
===

* same approach as async/await but with flow/yield
* only used as function, not decorator !
* pass function generator as a parameter
* integrates well with mobx dev tools
* easier to trace the process of the async function
* Can be cancelled by calling `cancel()` on the returned promise

---

[Object Api](https://mobx.js.org/refguide/object-api.html)
===

Utility API that allows manipulation of
* observable maps
* observable objects
* observable arrays

Offers the following:

* `values(thing)`
* `keys(thing)`
* `entries(thing)`
* `set(thing, key, value)` / `set(thing, { key: value })`
* `remove(thing, key)`
* `has(thing, key)`Â 
* `get(thing, key)`

---

[Utility Functions](https://mobx.js.org/refguide/tojson.html)
===

Check the list of utility functions as they may come in handy


---

Do's and Don't's
===

1. Use many small components
2. Render lists in dedicated components
3. Don't use array as indexes
4. Dereference values late
5. Bind functions early

---

[Dev Tools](https://mobx.js.org/best/devtools.html)
===

Installation
```
npm install mobx-react-devtools
```
OR

```
yarn add mobx-react-devtools
```

---


Enabling Dev tools
===

```
import DevTools from 'mobx-react-devtools'

const App = () => (
  <div>
    ...
    <DevTools />
  </div>
)
```

---

Stores and what is it ?
===

The goal of a store is to move logic and state from your components to a testable and higher order unit.

Recommended to have at least 2 stores
1. [UI State Store](https://mobx.js.org/best/store.html#stores-for-the-user-interface-state)
2. [Domain Store](https://mobx.js.org/best/store.html#domain-stores)

---


[UI Store](https://mobx.js.org/best/store.html#stores-for-the-user-interface-state)
===


* Session information
* How far application has loaded
* Information not stored on backend
* Informationt that affects UI Globally
   a. Window dimensions
   b. Accesibility Information
   c. Current language
   d. Currently active theme
* User Interface State when it affects multiple unrelated components
   a. Current Selection
   b. Visibility toolbars, etc
   c. State of global overlay

---

[Domain Store](https://mobx.js.org/best/store.html#domain-stores)
===

* Instantiate Objects
* One instance of each of your domain objects
   a. same user should not be stored twice in DB
* Backend integration, store data when needed
* Update existing instances from backend updates
* Provide stand-alone, universal, testable component
* Store is testable and runnable on server side
* Only **ONE** instance of a store

---

[Mobx-react](https://github.com/mobxjs/mobx-react)
===

```
npm install mobx-react --save
```

OR

```
yarn add mobx-react --save
```

The Mobx components for React

* observer
* onError
* PropTypes
* Provider and inject


---

[Observer](https://github.com/mobxjs/mobx-react#observer)
===

> React component, which applies observer to an anonymous region in your component

[Which components should be marked as `observer`?](https://github.com/mobxjs/mobx-react#which-components-should-be-marked-with-observer)

* all components that render observable data
* components **WITHOUT** observer should only use plain data

Do not use `shouldComponentUpdate()` as it will override the default implementation of observer

`componentWillReact()` is a method called before every re-render
* easy to track what renders

---

[onError](https://github.com/mobxjs/mobx-react#global-error-handler-with-onerror)
===

Some components throw non-crashing errors that may go unnoticed. `onError` is a global error handler that catches possible unnoticed rendor errors.
```
import { onError } from "mobx-react"

onError(error => {
    console.log(error)
})
```

---

[PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
===

>  to document the intended types of properties passed to components. React will check props passed to your components against those definitions, and warn in development if they donâ€™t match.

[Mobx provides additional `PropTypes`](https://github.com/mobxjs/mobx-react#proptypes)

```javascript
import { PropTypes } from "mobx-react"
```

* `observableArray`
* `observableArrayOf(React.PropTypes.number)`
* `observableMap`
* `observableObject`
* `arrayOrObservableArray`
* `arrayOrObservableArrayOf(React.PropTypes.number)`
* `objectOrObservableObject`

---

[Provider and Inject](https://github.com/mobxjs/mobx-react#provider-and-inject)
===

Provider
* A component
* Passes stores and other information
* Uses React's context mechanism

inject
* Used on components
* Allows to get stores from the Provider

---

Provider example
===

```javascript
///App.js
import todoStore from "./stores/TodoStore";

const App = props => {
    return (
      <Provider stores={{todoStore}}>
    	  <SomeComponent/>
      </Provider>
    )
}

///SomeComponent.js
@inject('todoStore') @observer
export default SomeComponent extends Component {
    render(){
    	//returns some react component
    }
}
```

---

You're a Mobx/Mobx-React Professional !
===

![](https://media.giphy.com/media/SmILNTyFnhlEQ/giphy.gif)




