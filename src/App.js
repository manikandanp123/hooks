import './App.css';
import UseState1 from './components/UseState1';
import UseEffect1 from './components/UseEffect1';
import UseRef1 from './components/UseRef1';
import Unmount from './components/Unmount';

function App() {
  return (
    <div className="App">
      <UseRef1 />
      <Unmount />
      <UseState1 />
      {/* <UseEffect1 /> */}
    </div>
  );
}

export default App;
