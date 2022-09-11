import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState greeting="I'm a stateful class component!" name="John Wagon"/>
    </div>
  );
}

export default App;
