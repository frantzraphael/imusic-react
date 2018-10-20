import React from 'react';
import '../App.css';
import Header from './Header';
import Container from './Container';

const App = () => {
    return (
      <div className="App">
        <Header/>
        <Container text="Suas músicas ao alcance dos seus dedos"/>
      </div>
    );
};

export default App;
