import React from 'react';
import EventApi from '../apis/Event';

class Events extends React.Component {
  state = {
    events: [],
  };

  async componentDidMount() {
    const events = await EventApi.getEvents();
    console.log(events);
    if (events) {
      this.setState({
        events: events.data,
      });
      console.log(this.state.events);
    }
  }

  render() {
    return (
      <div>
        <h1>Events page</h1>
        {this.state.events.map((event) => (
          <>
            <h2>{event.type}</h2>
            <p>{event.description}</p>
          </>
        ))}
      </div>
    );
  }
}

export default Events;
