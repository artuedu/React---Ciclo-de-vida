import React, {Component} from 'react';
import LifeCycle from './sections/life-cylce/lifeCycle';
import FetchExample from './sections/life-cylce/fetch-example';
import EjemploCicloDeActualizacion from './sections/life-cylce/ejemploCicloDeActualizacion';
import EjemploDeComponentWillUnmount from './sections/life-cylce/componentWillUnMount';
import EjemploDeComponentDidCatch from './sections/life-cylce/componentDidCatch';
import './App.css';

class App extends Component {
  // Constructor por defecto
  // constructor(props){
  //   super(props);
  // }

  render(){
    // console.log('Render');
    return (
      <div className="App">
        <LifeCycle />
        <FetchExample />
        <EjemploCicloDeActualizacion />
        <EjemploDeComponentWillUnmount />
        <EjemploDeComponentDidCatch />
      </div>
    );
  }
}

export default App;
