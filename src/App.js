import Tooltip from "./Tooltip";


function App() {
  return (
    <div className="App">
      <h1>Tooltip Demo</h1>
        <Tooltip content="Thanks for hovering! I am a tooltip" direction="right">
          <button className="button">Hover over me</button>
        </Tooltip>
    </div>
  );
}

export default App;
