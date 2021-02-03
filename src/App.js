import './App.css';
import Auth from "./components/challenges/dayThree/Auth/Auth";
// import Login from "./components/challenges/dayThree/Auth/Login/Login"
// import Header from './components/Header'
// import Challenge from './components/challenges/dayOne/Challenge'
// import Footer from './components/Footer'
// import Home from './components/Header'
// import TenMonkeys from './components/challenges/dayThree/TenLittleMonkeys/TenLittleMonkeys'

function App() { //this is a root component

  return (
    <div>
      <Auth />
    </div>
  );
}

export default App;

// 10 Little Monkey Challenge
// Are you ready?
// Create a button that when clicked you will subtract one monkey from the total. If it is zero you should display the following:
// There is no more monkeys jumping on the bed
// Otherwise you should display the following:
// 10 monkeys jumping on the bed one fell of and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed.
// Create a new component
// use useState
// Initialize your monkey count to 10