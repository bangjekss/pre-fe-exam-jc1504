import React from 'react';
import Navbar from './components/navbar';
// import Home from './components/home';
import { Route } from 'react-router-dom';
import { MainPage, CluePage, DatabasePage } from './pages';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="bgMain">
        <Navbar />
        <div className="container">
          <Route path="/" exact component={MainPage} />
          {/* <Route path="/latihan1" component={Soal1} /> */}
          <Route path="/clue" component={CluePage} />
          <Route path="/database" component={DatabasePage} />
        </div>
      </div>
    );
  }
}

export default App;
