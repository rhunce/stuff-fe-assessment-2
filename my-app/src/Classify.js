import './styles/Classify.css';

function Classify() {
  return (
    <div className="div2">
      <h3>Classify</h3>
      <div>
        <p>What's the user asking for?</p>
        <select name="request" id="request">
          <option value="select">Select</option>
          <option value="request-1">Request 1</option>
          <option value="request-2">Request 2</option>
          <option value="request-3">Request 3</option>
          <option value="request-4">Request 4</option>
          <option value="request-5">Request 5</option>
        </select>
      </div>
      <p>Task name (as shown to the user)</p>
      <input type="text" placeholder="Buy what?" />
      <p>(Character Counter Here)</p>
    </div>
  );
}

export default Classify;