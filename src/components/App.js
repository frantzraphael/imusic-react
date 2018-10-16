import React from 'react';
import '../App.css';
import Header from './Header';
import Container from './Container';

const App = () => {
    return (
      <div className="App">
        <Header text="Oioioioi"/>
        <Container text="Celular Novo app React" />
        {/* <Footer/> */}
      </div>
    );
};

export default App;
