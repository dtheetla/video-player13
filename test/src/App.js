import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import VideoPlayer13 from 'video-player13'
// import VideoPlayer13 from '/home/revanth/projects/video_react_npm/testplayer/node_modules/VideoPlayer13'

class App extends Component {
  render() {
    let sources= [
      'http://techslides.com/demos/sample-videos/small.mp4',
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <VideoPlayer13 sources={sources} width='320' height='240' controls></VideoPlayer13>
      </div>
    );
  }
}

export default App;
