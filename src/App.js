import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.scss';
import Header  from './Pages/Header/Header';
import Store from './Pages/Store/Store'
import Partners from './Pages/Partners/Partners';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Route path="/" component={Store} exact/>
        <Route path="/partners" component={Partners} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
    
  )
}

export default App;
