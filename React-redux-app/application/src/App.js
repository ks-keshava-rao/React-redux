import logo from './logo.svg';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/Store';
import HooksCakeContainer from './components/HooksCakeContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer/>
      </div>
    </Provider>
  );
}
export default App;
