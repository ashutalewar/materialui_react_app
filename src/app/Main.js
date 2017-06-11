/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolbarExamplesSimple from 'components/toolbar'
import CardExampleExpandable from 'components/content'


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* both /roster and /roster/:number begin with /roster */}
        <Route path='/roster' component={Address}/>
        <Route path='/schedule' component={Address}/>
      </Switch>
      //   <Router history={hashHistory}>
      //   <Route path='/' component={Home} />
      //   <Route path='/address' component={Address} />
      // </Router>

    );
  }
}


const Home = () =>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <ToolbarExamplesSimple />
          <CardExampleExpandable />
        </div>
      </MuiThemeProvider>

const Address = () =>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <ToolbarExamplesSimple />
          <CardExampleExpandable />
        </div>
      </MuiThemeProvider>

export default Main;
