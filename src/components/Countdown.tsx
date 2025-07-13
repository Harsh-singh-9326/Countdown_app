import "../App.css"
function Countdown() {
  return (
    <>
    <div className="container">
      <h1>Count down timer app</h1>
      <input type="datetime-local"  
      id="date_time" 
      />
      <button>start</button>

      <div id="display">
        <ul>
          <li><span id="days"></span>Days</li>
          <li><span id="hours"></span>Hours</li>
          <li><span id="minute"></span>Minutes</li>
          <li><span id="second"></span>Seconds</li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default Countdown;
