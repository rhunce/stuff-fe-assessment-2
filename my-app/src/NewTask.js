import './styles/NewTask.css';

function NewTask() {
  return (
    <div className="div3">
      <div className="sub-container">
        <div className="sub-div-1">      New task</div>
        <div className="sub-div-2">00:00</div>
        <div className="sub-div-3">&#x1F552;</div>
        <div className="sub-div-4">&#128450;</div>
        <div className="sub-div-5"><input type="text" placeholder="I'd like to do something {first msg in a task}" /></div>
      </div>
    </div>
  );
}

export default NewTask;