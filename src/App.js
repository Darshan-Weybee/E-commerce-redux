import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import { store } from './ReduxStore/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </Provider>  
  );
}

export default App;
