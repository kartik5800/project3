import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Header from './componente/Header/Header';
import Footer from './componente/Footer/Footer';
import Home from './container/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route excet path = {"/"} component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
