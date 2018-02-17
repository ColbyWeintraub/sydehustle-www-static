import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>SydeHustle</h1>
        <h2>Make your hustle happen</h2>
        <img id="logo" src="./res/logo.png" alt="SydeHustle" width="90.5" height="120" />

        <div className="footer">
          <p>Coming soon...<br></br>
            <strong><a href="mailto:colby@sydehustle.io">Contact our CEO.</a></strong>
          </p>

          <p id="copyright-notice">Copyright 2018 SydeHustle Inc.</p>
        </div>
      </div>

    );
  }
}

export default App;
