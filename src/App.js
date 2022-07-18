import './App.css';
import { Route, Routes } from 'react-router-dom';
import Covid from './components/Covid';
import CovidstateWise from './components/CovidstateWise';


function App() { 
  return (
    <>
  <Routes>
        <Route path="/" element={<Covid />} />
        <Route path="/statewise" element={<CovidstateWise />} />
      </Routes>
    </>
  );
}

export default App;
