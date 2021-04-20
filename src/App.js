import './App.css';
import CounterClass from './components/CounterClass';
import CounterCustomHooks from './components/CounterCustomHooks';
import CounterHooks from './components/CounterHooks';
import CounterStatic from './components/CounterStatic';

function App() {
  return (
    <div className="App">
      <CounterStatic />
      <CounterClass />
      <CounterHooks />
      <CounterCustomHooks />
    </div>
  );
}

export default App;
