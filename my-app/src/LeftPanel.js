import './styles/LeftPanel.css';
import Task from './Task.js';

function LeftPanel({ userData }) {
  return (
    <div className="div1">
      <img className="user-photo" src={userData.userPicUrl} alt="User" width="50" height="50"/>
      {userData.tasks !== undefined ? userData.tasks.map((task) => {
        return <Task key={task._id} task={task}/>;
      }) : ''}
    </div>
  );
}

export default LeftPanel;