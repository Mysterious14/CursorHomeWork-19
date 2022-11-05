import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import padlock from './assets/padlock.png';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <img className="logo" src={padlock} alt="logo" />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
