import React from 'react';
import './styles/App.css';
import LeftPanel from './LeftPanel.js';
import Classify from './Classify.js';
import NewTask from './NewTask.js';
import ConversationBox from './ConversationBox.js';
import sampleTicketData from './sampleTicketData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: 'Me',
      userData: {}
    };
  }

  componentDidMount() {
    const userData = sampleTicketData.filter((user) => {
      return user.user === this.state.user;
    });
    this.setState({
      userData: userData[0]
    });
  }

  render() {
    return (
      <div className="container">
        <LeftPanel userData={this.state.userData}/>
        <Classify />
        <NewTask />
        <ConversationBox />
      </div>
    );
  }

}

export default App;
