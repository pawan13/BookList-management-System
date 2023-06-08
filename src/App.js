import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/signup-signin/Login';
import SignUp from './pages/signup-signin/SignUp';
import Home from './pages/signup-signin/Home';

function App() {
  return (
    <div className="App">
      <header className="">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
       
      </header>
    </div>
  );
}

export default App;
