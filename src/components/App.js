import React from 'react';
import EventApi from '../apis/Event';
import BlogpostApi from '../apis/Blogpost';

class App extends React.Component {
  state = {
    connected: false,
  };

  async componentDidMount() {
    // test connexion
    const events = await EventApi.getEvents();
    const blogposts = await BlogpostApi.getBlogposts();
    if (events && blogposts) {
      this.setState({
        connected: true,
      });
      console.log(events);
      console.log(blogposts);
    }
  }

  render() {
    // return <h1>CFSCC</h1>;
    return (
      <div>
        {this.state.connected ? (
          <h6>Connected !</h6>
        ) : (
          <h1>Not yet connected...</h1>
        )}
      </div>
    );
  }
}

export default App;
