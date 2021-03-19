import './styles/App.css';
import LeftPanel from './LeftPanel.js';
import Classify from './Classify.js';
import NewTask from './NewTask.js';
import ConversationBox from './ConversationBox.js';

function App() {
  return (
    <div className="container">
      <LeftPanel />
      <Classify />
      <NewTask />
      <ConversationBox />
    </div>
  );
}

export default App;
