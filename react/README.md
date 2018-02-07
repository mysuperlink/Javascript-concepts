What is React ?

React is a UI library build by some really awesome people at FB. It works on the concept of virtual DOM.
It is based on component system. React is a declarative styled where we dont guide our programs what to do not like
imperative
	
	#Points to know
	Virtual DOM
	ReactELement vs ReactComponent
	Props vs state
	React LifeCycle
	Typechecking in react
	Synthetic Events
	FLux architecture
	Redux
	Concept of KEYS
	HOT MODULE REPLACEc  // live reloading
	Higher order components 


How does Virtual DOM works?

	DOM stands for Document Object model. Dom == HTML
	Html dom provides an interface API to traverse and modify the nodes with methods like
		
		var c = document.getElementById('x');
		c.remove()

	Vdom is the exact copy of html dom. It allows react to do its computations and checks the diff and update particular node of the dom.

How to Integrate React and Redux Without react-redux?

	import store from './store'
	import { Component } from 'react'
	class MyComponent extends Component {
	  	constructor() {
	    	super();
	    	this.state = { storeState: store.getState() };
	 	}
	 	componentDidMount() {
		    this.unsubscribe = store.subscribe(() => {
		      this.setState({ storeState: store.getState() });
		    });
  		}
	 	componentWillUnmount() {
    		this.unsubscribe();
  		}
	}

Write Your Own React-Redux Connect or Higher Order Components
	
	function myConnect (mapState, mapDispatch) {
		return function(WrappedComponent) {
			return class WrapperComponent extends Component {
				constructor(props){
					super(props)
					this.state = { storeState: store.getState() };
				}
				render(){
					const newProps = Object.assign(
			          {},
			          mapStateToProps(this.state.storeState, this.props),
			          // If you aren't intimately familiar with the this keyword,
			          // it's okay if you don't understand why we use bind here
			          mapDispatchToProps(store.dispatch.bind(this))
			        );
					return <WrappedComponent {...newProps}/>
				}
			}
		}
	}
	myConnect(mapStateToProps, mapDispatch)(Test);
	More details https://nickdrane.com/write-your-own-redux-connect/



	

ReactELement vs ReactComponent
	
	ReactElement are basic stateless, virtual representation of html. It can be simple div table anything which 
	doesnt have a state

	ReactComponent are the state components they have a initial state defined. they are used to create dynamic html. They dont have access to virtual dom but can be CONVERTED INTO REACT ELEMENTS.

	WHAT MAKES THE DIFFERENCE then?

	Whenever a react component is changing the state we want to make little changes to the real dom. ReactComp is 
	converted into react elements and then inserted into dom which makes it faster, thats the job of diff algo.

	When React knows the diff - it’s converted to the low-level (HTML DOM) code, which is executed in the DOM

Prop Vs State
	
	Props is a property to transfer data from a parent to child component.
	State is the state for the component

React LifeCycle

	getInitialState() : It sets an initial state for the react component
	getDefaultProps : can be used to define any default props which can be accessed via this.props.
	componentWillMount() : this method is called before render 
	render() : renders the dom
	componentDidMount() : this is called after render
	componentWillUnMount() // this is called when unmounting a component
	
	State or prop changes will trigger number of methods. [VERY IMP]

	shouldComponentUpdate():  is always called before the render method and enables to define if a re-rendering is needed or can be skipped. Obviously this method is never called on initial rendering. A boolean value must be returned.
	componentWillUpdate() :  gets called as soon as the the shouldComponentUpdate returned true. 
	render() 
	componentDidUpdate() : its called after render method 

NOTE : Props are immutable they cant be changed

Typecheck in React
	
	As your application grows bigger, you might need to check that props provided to your component are of
	some specific type like string, array

	ComponentName.propTypes = {
		name : React.propTypes.string
	}
	when an invalid value is passed it shows a warning in console

	You can also assign default values to the props 
	ComponentName.defaultProps = {
		name : "Aatif"
	}

Synthetic Events

	React has special events same as DOM events but in camelCase called synthetic event. Also when you apply events
	to the JSX you need to bind the events. You dont deal with normal events.

Why synthetic events ?

	Browser compatibility

	Event handling is one of those things that works consistently in modern browsers, but once you go back to older browser versions, things get really bad really quickly. By wrapping all of the native events as an object of type SyntheticEvent, React frees you from dealing with event handling quirks that you will end up having to deal with otherwise.

	Improved Performance

	Sometime you have alot of events on your dom which might require huge memory for your app React never attach its events to the dom directly it uses ONE ROOT EVENT HANDLER TO COMMUNICATE TO ITS EVENTS"

FLUX Architecture

 	View -> Action -> Dispatcher -> Store -> [back to view]
 	Unidirectional

 	FLux can have multiple stores
 	
 	Redux has one source of truth
 	Multiple reducers it can have

Concept of keys
	
	React asks you to add keys to your component this is how react understands that the component needs an update or 
	not. React maintains data-reactid which is equal to key
	It helps react with its diffing algorithm to determine which children to remove, add, keep, or simply update.

 
REDUX VS FLUX

 	The difference between them is Redux doesnt have discrete dispatcher. Your store directly listens the action with a function called reducer with returns a new state always
 	Whole app has one state
 	App state is immutable

 	What is reducer?
 	Reducers are pure functions they accept current state and returns a new state. They dont store the state of app

 
Why we need REDUX THUNK?

 	It used to perform async operations when you need to dispatch multiple actions together with the use of middle ware called "applymiddleware()"
 	mainly used to decouple ajax calls

 	eg : const store = createStore(
		  rootReducer,
		  applyMiddleware(
		    thunkMiddleware, // lets us dispatch() functions
		    loggerMiddleware // neat middleware that logs actions
		  )
		)
	When this middleware is enabled, if you dispatch a function, Redux Thunk middleware will give it  dispatch as an argument.

How to get all Props?

	<div {...this.props}>   // its called spread params you will get all props defined on component
	</div>

Higher Order Components:
	These are functions which accepts component as argument and return react component

	Eg : import React ,{Component} from 'react';

	const LoadHOC = (WrappedComponent)=>{
		return classs LoadHoc extends Component {
			render(){
				return this.props.abc.length === 0 ? <div>test</div> ? <WrappedComponent {...this.props} />
			}
		}
	}
	export default LoadHOC;


	HOw to use it ?
	import LoadHOC from './LoadHOC';

	class SomeComp extends React.Component{
		render(){
			return <div>A</div>
		}
	}

	export default LoadHoc(SomeComp);

Difference between bind in constructor vs render()
	
	bind in render has issue everytime render happens it created an instance of the function which can lead to many instances
	bind in constructor is better just it has one issue which might not update on hot reloading you bind a new method wont reflect in hot reload as hot reload doesnt call constructor function

What does mapStateToProps and mapDispacthToProps do ?
	mapStateToProps takes the redux store state 
	mapDispacthToProps dispatch action it returns props

Why is connect ?

	React Redux connect() generates an intermediate component: that's why you receive data as this.props, and not as this.state.
	connect is a curried function, which means it return a function. This returned function takes WrappedComponent as input.
	Connect is a higher order component.

Why do react shows a warning like "uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa)" when input type text value is set?

	if you initially pass undefined or null as the value prop, the component starts life as an "uncontrolled" component. Once you interact with the component, we set a value and react changes it to a "controlled" component, and issues the warning.

	Also if you put value to some text then it makes input as readonly which is called controlled component if you add onChange the it will change to uncontrolled

How to set defaultProps in ES5 and ES6?
	
	In ES5 
		getDefaultProps(){
			test : "some value"
		}
	In ES6
		ComponentName.defaultProps = {
			test : "some value"
		}

How to set multiple inline styles for an element?
	import {style1, style2} from './style.js';

	<div style={Object.assign({}, style1, style)} 

