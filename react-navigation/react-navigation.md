<!-- page_number: true -->

[React Navigation](https://reactnavigation.org/en/)
===

> Routing and navigation for your React Native apps

---

[Installation](https://reactnavigation.org/docs/en/getting-started.html)
===

```bash
#install dependencies
yarn add react-navigation react-native-gesture-handler

#link dependenies
react-native link react-native-gesture-handler
```
*no additional setup required for ios*

*Additional step required for android*

---

[The basics](https://reactnavigation.org/docs/en/hello-react-navigation.html)
===

* Provides global history stack by mimiking the "browser history stack"
* One stack navigator === Navigator browser history
* `Push` new view to the stack
* `Pop` to previous view

---

What does "stack" in "Stack Navigator" mean ?
===

<img src="https://media.giphy.com/media/pu44TP3JoqdDa/giphy.gif" width="300"/>

---

createStackNavigator
===

* returns  a react component
* two parameters 
  1. an object with a list of routes
  2. an options object


```
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen //<- a component
  }
},{ 
  /** options here */ 
});
```

---

createStackNaviator Example
===

```javascript
//App.js
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
```

---

Multiple Routes
===

* initialRouteName to determine which screen to show first

```
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);
```

---

Moving between Screens
===

```javascript
//HomeScreen
<Button
  title="Go to Details"
  onPress={() => this.props.navigation.navigate('Details')}
/>
```

* `navigation` prop passed to every "screen" component
* Call `navigate` on the `Details` route name 
* Calling `navigate`on an non existing route name will do nothing

What happens if we decide to navigate to the same Details page ?

---

`navigate`
===

Nothing happens when navigating to the same current screen.

Navigate roughly means:
> Move to this screen !

What if we used `push` instead ?

---

`push`
===

> Push a view to the navigation stack

*add as many of the same screens on the stack as you wish*

![git not loaded](https://media.giphy.com/media/1lDDbtArVOHPrERDf2/giphy.gif)

---

`goBack`
===

*Sometimes important to trigger programmatically a "Go Back"*

```javascript
this.props.navigation.goBack();
```
* Cannot go back if only one screen or at the start
* Header provided by stack navigator will automatically include a back button

How to go back to the very first screen after navigating to many different ones ?

---

`popToTop`
===

*Allows to go back to the very first screen of the stack*

---

[Navigation LifeCycle](https://reactnavigation.org/docs/en/navigation-lifecycle.html#react-navigation-lifecycle-events)
===

> Consider a stack navigator with screens A and B. After navigating to A, its componentDidMount is called. When pushing B, its componentDidMount is also called, but A remains mounted on the stack and its componentWillUnmount is therefore not called.

> When going back from B to A, componentWillUnmount of B is called, but componentDidMount of A is not because A remained mounted the whole time.

---

Navigation LifeCycle Example
===

*consider the following*
```javascript
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Profile: ProfileScreen,
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  }
);
```
---

Navigation LifeCycle Questions
===

1. Navigate from HomeScreen to DetailsScreen
2. Use Tab Bar to Switch to SettingsScreen and navigate to ProfileScreen.

### What two things can we observe ?


![gif did not load](https://media.giphy.com/media/kPtv3UIPrv36cjxqLs/giphy.gif)

---

Navigation LifeCycle Answers
===

1. All four screens were mounted
2. If we go back to the HomeStack, we observe that we're still on DetailsScreen
i. HomeStack was preserved 

---

[Passing Parameters](https://reactnavigation.org/docs/en/params.html)
===

* Parameteres passed should be "JSON-serializable" 

```javascript
this
.props
.navigation
.navigate('RouteName', { /* params go here */ })
```

---

[Reading Parameters](https://reactnavigation.org/docs/en/params.html)
===

* requires the `paramName`
* optional `defaultValue` if the `paramName` is null

```javascript
const myParam = 
this.props.navigation.getParam(paramName, defaultValue)
```

---

[Header Bar](https://reactnavigation.org/docs/en/headers.html)
===

* screen component can have a static property called navigationOptions
* Will set the header of the screen

```javascript
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  /* render function, etc */
}
```
*on iOS the title will be centered and on Android it will be left-aligned.*

---

[Header Bar with Params](https://reactnavigation.org/docs/en/headers.html)
===

```javascript
class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.
             getParam(
                  'otherParam', 
                  'A Nested Details Screen'
             ),
    };
  };

  /* render function, etc */
}
```

---

[How to dynamically modify the current title ?](https://reactnavigation.org/docs/en/headers.html#updating-navigationoptions-with-setparams)
===

* Update the title param passed via the navigation prop.

```javascript
/* Inside of render() */
  <Button
    title="Update the title"
    onPress={() => this.
                     props.
                     navigation.
                     setParams(
                       {otherParam: 'Updated!'}
                     )
             }
  />
```

---

[Adjusting Header Styles](https://reactnavigation.org/docs/en/headers.html#adjusting-header-styles)
===

Key Properties:

* `headerStyle` : style object applied to `View` wrapper
* `headerTintColor` : back button and title color
* `headerTitleStyle` : Customize `Text`element for the title

---

Header Styles Example
===

```javascript
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  /* render function, etc */
}
```
