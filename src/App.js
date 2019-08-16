import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//引入home组件
import Home from './components/Home'
import New from './components/New'
import Method from './components/Method'
import FormM from './components/FormMethod'
import BindToDoList from './components/BindToDoList'

function App() {
  return (
    <div className="App">
      我是app.js111
      <BindToDoList/>
      <FormM />
      <Method />
      <Home />
      <New></New>
    </div>
  );
}

export default App;
