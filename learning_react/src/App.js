import logo from './logo.svg';
import './App.css';
import Testing from './Components/Testing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import ReactPost from './Components/ReactPost';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/postcreate' element={<ReactPost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
