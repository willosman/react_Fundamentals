import './App.css';
import Header from './components/Header'
import Challenge from './components/challenges/dayOne/Challenge'
import Footer from './components/Footer'
import Home from './components/Header'

function App() { //this is a root component
                //parent function
const name = "Will" //JS above return statement can be injected into JSX using { }

  return (
    <div className ="App">
      <h1>Welcome to React, {name}</h1>
      <h2>We just modified our root App component</h2>
      <Header /> {/*This is how you mount a component */}
      <Challenge /> {/*child function*/}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
