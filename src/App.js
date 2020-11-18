
import { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Board from './components/board';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


class App extends Component {
  render(){
    return (
    <div className="App">
      
      <h1>KhAliD'S MeMe SoUnDbOaRd</h1>
      <div className='board'>
        <Board/>
        <div className='tile'></div>
      </div>
     
    </div>
  );
}
  
}

export default App;
