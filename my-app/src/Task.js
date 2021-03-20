import './styles/Task.css';

function Task({ task }) {
  return (
    <div className="dot">{task.ticketInitials}</div>
  );
}

export default Task;