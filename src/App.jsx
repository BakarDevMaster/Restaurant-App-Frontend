import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import NotFound from './pages/NotFound';

function App() {


  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </Router>

        <ToastContainer position='top-center'/>

      </>
         
    
  )
}

export default App
