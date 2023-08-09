import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Project />
      <Footer />

      <Routes>
        <Route path='/' element='' />
        <Route path='/about' element='' />
        <Route path='/portfolio' element='' />
        <Route path='/resume' element='' />
        <Route path='/contact' element='' />
      </Routes>

    </div>
  );
}

export default App;