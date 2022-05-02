import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import DarkMode from './components/DarkMode';


function App() {

  return (
    <>
      <Navbar title="123" aboutText={true} />

      <div className="container my-3">

        {/* <TextForms  title="Enter the text to Analyze"/> */}
        <DarkMode />
      </div>

    </>

  )
}


export default App;
