import logo from './logo.svg';
import './App.css';
import Dashboard from './StartHelping/Dashboard';
import Donate1 from './StartHelping/Donate1';
import Donatecart from './StartHelping/Donatecart';
import Payment from './StartHelping/Payment';
import Paymentsector from './StartHelping/Paymentsector';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SucessPage from './StartHelping/SucessPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Success' element={<SucessPage/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
