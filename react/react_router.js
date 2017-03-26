const React = require('react');

const LandingPage = require('./LandingPage');
// why did we include react since it will be trans-piled into React.createElement()

const {Router, Route, hashHistory } = require('react-router');

// hashHistory is used to enable back and forward browser buttons
// it keeps track of anchor to url

const App = () => (
	<Router history={hashHistory} >
		<Route path='/' component={LandingPage} />
	</Router>
)

ReactDom.render(<App /> , document.getElemntById('app'))