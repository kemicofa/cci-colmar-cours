<!-- $theme: default -->

<!-- page_number: true -->


React Native
===

# ![](react-native-logo.png)

##### CCI Colmar

###### Created by Kevin Faulhaber ( [@kemicofa](https://github.com/kemicofa) )

---

Do you know [ECMAScript6](http://es6-features.org/#Constants) ?
===

Specifications regarding the Javascript programming language that is to be implemented across all browsers
* [ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

![gif failed to load](https://media.giphy.com/media/QNFhOolVeCzPQ2Mx85/giphy.gif)

What about [ECMAScript Next](https://developer.mozilla.org/fr/docs/Web/JavaScript/Nouveaut%C3%A9s_et_historique_de_JavaScript/Support_ECMAScript_Next_par_Mozilla) ?

---

React Native Some History
===

> React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.


React open sourced 2013 and React Native open sourced 2015

---

What is JSX ?
===

JSX (JavaScript XML) is an extension to the JavaScript language syntax. Produces "react" elements.

---

Why JSX ?
===

Transitioning from "artificially seperating technologies" to "seperating concerns".

* no more seperation between markup and logic

---


What are components ?
===

> Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

[@EdmondAtto](https://medium.com/@EdmondAtto)

---

Class Component Example
===

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ 
      		flex: 1, 
                justifyContent: "center", 
                alignItems: "center"
            }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
```

---

Function Component Example
===

```javascript
import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = props => {
    return (
      <View style={{ 
      		flex: 1, 
                justifyContent: "center", 
                alignItems: "center"
            }}>
        <Text>Hello, world!</Text>
      </View>
    );
}
export default HelloWorldApp;

```

---

Class or Function Component ?
===

![gif not loaded](https://media2.giphy.com/media/3o7btPCcdNniyf0ArS/200w.webp?cid=790b76115ca9eafd7775594a41c1b139)

It's sometimes not easy knowing when to use one or the other. 

### Any ideas ?

---

Dummy (Function) and Smart (Class) Components
===

How to differenciate them ?

---

Dummy (Function) Components
===

### Ignorance is bliss

![gif not loaded](https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif)

* Used only for "Presentational Purposes"
* Simply creates a view with input data (i.e: `props`)
* Does **NOT** have internal `state` management
* Only requires `render` method
---

Smart (Class) Components
===

Smart Components are components that have more responsibilities.

![gif not loaded](https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif)

* Internal `state` management
* Handle event callbacks
* Handling lifecycle
* Fetch requests
* Passes data to "dummy" components
* etc

---


Life Cycle (Mounting)
===

![image did not load](react-native-mounting.png)

---

componentWillMount()
===

### DEPRECATED

![gif not loaded](https://media.giphy.com/media/l0HlHAORavTWG7864/giphy.gif)

Generally used to prepare for the first render

---

render()
===

Builds the NativeUI View with all its child components

* Do **NOT** call `setState` (cannot re-render during rendering)
* Do **NOT** call external APIs

---

componentDidMount()
===

* called **once** after the first render
* all child components have been rendered
* NativeUI is fully created and available
* Can potentially make a new render call if state changed
* Recommended place to make external API calls

![gif not loaded](https://media.giphy.com/media/l2QDSfKZKsUO706vS/giphy.gif)

---

Life Cycle (Unmount)
===

![gif not loaded](https://media.giphy.com/media/VDeMMDsxmeWbu/giphy.gif)

Unmount your smart components *safely*.

```
componentWillUnmount(){
  //save anything that needs to be saved
  
  //stop anything that should be stopped
  //i.e.: remove setInterval ids
}
````

---

Props
===


`props` attribute is data passed to the component by its parent and exist throughout the lifetime of the component. They are **READ ONLY** !


```
//ShowMessage.js
const ShowMessage = props => {
    const {title, message} = props;
    return (
    	<View>
            <Text>{title}</Text>
            <Text>{message}</Text>
        </View>
    )
}
```

*if this was a class then use `this.props`*

---

Props Example:
===

```
//App.js
import React from "react";
import ShowMessage from "./ShowMessage";
export default props => {
    return (
    	<View>
          <ShowMessage 
            title="Info" 
            message="Some message" />
        </View>
    );
}

```

---

State
===

The state property exists for Class Components. It is an `object` containing data on values that may change during the components lifecycle.

* Initialize `state`  in constructor
* call `setState` to modify the `state`
* `setState` re-renders component

---

State Example:
===

```javascript
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    const {isShowingText} = this.state;

    return (
      <Text>{isShowingText ? this.props.text : ""}</Text>
    );
  }
}
```


---

Style
===

Styles in React Native are CSS elements written in camelCase

`background-color` -> `backgroundColor`

Can be defined in a seperate file, within the component file, or inline with XML.

* Do **NOT** use inline styling unless it's for dynamic elements
* `StyleSheet.create` is a cleaner way of defining styles when components become complex
* By default define your StyleSheet object above your component
* Create a seperate `style.js` file when the component file becomes too large

---

Style Example:
===
```javascript
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default props => {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
}
```
---

[Height and Width](https://facebook.github.io/react-native/docs/height-and-width)
===

![gif did not load](https://media.giphy.com/media/5fhpIjE4yxWJq/giphy.gif)

Not always easy to handle !

> 
---

# [Fixed Dimensions](https://facebook.github.io/react-native/docs/height-and-width#fixed-dimensions)

> All dimensions in React Native are unitless, and represent density-independent pixels.

```
import React, { Component } from 'react';
import { View } from 'react-native';

export default class DimensionExample extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50}} />
        <View style={{width: 100, height: 100}} />
        <View style={{width: 150, height: 150}} />
      </View>
    );
  }
}
```

---

[Flex Dimensions](https://facebook.github.io/react-native/docs/height-and-width#flex-dimensions)
===

Find out more from [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) !

![gif failed to load](https://media.giphy.com/media/l44Q95qoSzCe12IBq/giphy.gif)

---

[Handling Text Inputs](https://facebook.github.io/react-native/docs/handling-text-input)
===

Pass a [callback](https://developer.mozilla.org/fr/docs/Glossaire/Fonction_de_rappel) !

```javascript
import { TextInput } from 'react-native';

/** in some component's render method */
<TextInput
  onChangeText={(text) => this.setState({text})}
/>

```

---

[Handling Touches](https://facebook.github.io/react-native/docs/handling-touches)
===

![gif did not load](https://media.giphy.com/media/WgO4RyUXGkAobxWDSP/giphy.gif)

---

[Button](https://facebook.github.io/react-native/docs/handling-touches#displaying-a-basic-button)
===

Basic button that accepts a callback as argument for `onPress`

```javascript
<Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
```

---

[Touchables](https://facebook.github.io/react-native/docs/handling-touches#touchables)
===

* Useful if `Button` doesn't look right
* Captures tapping gestures
* No generic style provided

1. [TouchableHighlights](https://facebook.github.io/react-native/docs/touchablehighlight)
2. [TouchableNativeFeedback](https://facebook.github.io/react-native/docs/touchablenativefeedback)
3. [TouchableOpacity]( https://facebook.github.io/react-native/docs/touchableopacity)
4. [TouchableWithoutFeedback](https://facebook.github.io/react-native/docs/touchablewithoutfeedback)

---

[ScrollView](https://facebook.github.io/react-native/docs/using-a-scrollview)
===

* Scroll Horizontally and Vertically
* Easy to use
* Renders all items at once
* Not very performant for many items

---

[ListViews](https://facebook.github.io/react-native/docs/using-a-listview)
===

**FlatList** vs **SectionList**

![gif not loaded](https://media.giphy.com/media/TPl5N4Ci49ZQY/giphy.gif)

---

[FlatList](https://facebook.github.io/react-native/docs/flatlist)
===

* Lazy loads data (not all data loaded if not within screen)
* Performant for very long list of data
* Requires two props: `data` and `renderItem`
* Optional horizontal mode
* Configurable viewability callbacks.

* Header, Footer, Seperator support
* Pull to refresh
* Scroll loading
* ScrollToIndex support.


---

[SectionList](https://media.giphy.com/media/TPl5N4Ci49ZQY/giphy.gif)
===

Similar to FlatList but useful for breaking data into logical sections

* List Header and Footer support
* Section and Item seperator support
* Pull to refresh
* Scroll loading

---

[Networking](https://facebook.github.io/react-native/docs/network)
===

Use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), a promise based API that provides an interface for fetching resources

```javascript
fetch("some url", { /** options here */ })
.then(res=>{

   if(!res.ok) throw new Error("Failed!");
   //res is the response
   //get the data (json method returns a promise)
   return res.json();
})
.then(data=>console.log(data))
.catch(err=>console.log(err));

```

---

Networking: iOS blocks HTTP by default !
===

Add an [app transport security exception](https://facebook.github.io/react-native/docs/integration-with-existing-apps#test-your-integration) in your Info.plist

---

React Navigation
===

---

[Hooks](https://reactjs.org/docs/hooks-intro.html)
===