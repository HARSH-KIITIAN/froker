import React, { Component } from 'react';
import classes from './App.module.css';
import TopBar from './TopBar/TopBar';

class App extends Component {

  render() {
    return (
      <div className={classes.Top}>
        <TopBar />
        <div >
          <h2><span>Froker</span>BLOG</h2>
          <h1>Articles covering the most recent
          updates and advancements</h1>
        </div>
      </div>
    );
  }
}

export default App;