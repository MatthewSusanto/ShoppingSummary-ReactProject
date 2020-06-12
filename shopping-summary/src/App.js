import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container" >
        <Container className="purchase-card">
          <h1>Hello World!</h1>
        </Container>
      </div>
    );
  }
}

export default App;
