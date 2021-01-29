import React from 'react';
// import EventApi from '../apis/Event';
// import BlogpostApi from '../apis/Blogpost';
import Nav from './Nav';
import Blog from './Blog';
import Events from './Events';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  // state = {
  //   connected: false,
  // };

  // async componentDidMount() {
  //   const events = await EventApi.getEvents();
  //   const blogposts = await BlogpostApi.getBlogposts();
  //   if (events && blogposts) {
  //     this.setState({
  //       connected: true,
  //     });
  //     console.log(events);
  //     console.log(blogposts);
  //   }
  // }

  render() {
    // return <h1>CFSCC</h1>;
    return (
      <Router>
        <div>
          {/* {this.state.connected ? (
          <h1>Connected !</h1>
        ) : (
          <h1>Not yet connected...</h1>
        )} */}
          <Nav />
          <Switch>
            {/* <Route path="/" exact component={Home}/> */}
            <Route path="/blog" component={Blog} />
            <Route path="/events" component={Events} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
