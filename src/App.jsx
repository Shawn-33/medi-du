
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signup';
import DocSignup from './pages/doctorsignup';
import CliSignup from './pages/clisignup';
import LoginPage from './pages/login';
import DoctorLandingPage from './pages/doctor/doctorlanding';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="components">
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/docsignup" element={<DocSignup></DocSignup>}></Route>
          <Route path='/cli' element={<CliSignup></CliSignup>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/doctorlandingpage' element={<DoctorLandingPage></DoctorLandingPage>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
