import './App.css';
// import NameProp from './components/NameProp';
import Contacts from './components/Contacts';
import State from './components/State';

function App() {
  return (
    <div className ="App">
      <Contacts name=" Will" age = "32" school = "Eleven Fifty Academy" graduationYear="2021"/>
      <p>---------------------</p>
      <State />
    </div>
  );
}

export default App;
