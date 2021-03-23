import React from 'react';
import { MainApp } from './components/useContext/MainApp';
// import CallBackHook from './components/Memos/CallBackHook';
// import TodoApp from './components/useReducer/TodoApp';
// import MemoHook from './components/Memos/MemoHook';
// import Memorize from './components/Memos/Memorize';
// import LayoutEffect from './components/useLayoutEffect/LayoutEffect';
// import ExampleRef from './components/useRef/ExampleRef';
// import FocusScreen from './components/useRef/FocusScreen';
// import MultipleCustomHooks from './components/examples/MultipleCustomHooks';
// import FormWithCustomHook from './components/useEffect/FormWithCustomHook';
// import Saludar from './components/Saludar';
// import Car from './components/Car';
// import Counter from './components/Counter/CounterApp'
// import CounterCustomHook from './components/CounterWithCustomHook';
// import SimpleForm from './components/useEffect/SimpleForm';


function App() {

  // const holaMundo = (nombre) => {
  //   console.log('Hola mundo', nombre);
  // }


  // const numero = () => {
  //   console.log(23);
  // }

  return (
    <React.Fragment>
      <div align="center" className="container">
        <MainApp />
      </div>
    </React.Fragment>
  );
}

export default App;
