What is React ?

React is a UI library build by some really awesome people at FB. It works on the concept of virtual DOM.
#Points to know
	Virtual DOM
	ReactELement vs ReactComponent
	Props vs state
	React LifeCycle
	Typechecking in react
	Synthetic Events
	FLux architecture
	Redux


How does Virtual DOM works?

	DOM stands for Document Object model. Dom == HTML
	Html dom provides an interface API to traverse and modify the nodes with methods like
		
		var c = document.getElementById('x');
		c.remove()

	Vdom is the exact copy of html dom. It allows react to do its computations and checks the diff and update particular node of the dom.


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
	
	State or prop changes will trigger number of methods. [VERY IMP]

	shouldComponentUpdate():  is always called before the render method and enables to define if a re-rendering is needed or can be skipped. Obviously this method is never called on initial rendering. A boolean value must be returned.
	componentWillUpdate() :  gets called as soon as the the shouldComponentUpdate returned true. 
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

 
