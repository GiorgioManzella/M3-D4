
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/NavBar';
import Customfooter from './components/footer';
import CustomJumbo from './components/Welcome';
import Holder from './components/Holders';





function App() {
  return (
    
    <>
      <CustomNavbar/>
      <Customfooter/>
      <CustomJumbo/>
      <Holder/>
    </>
    
    );
}

export default App;
