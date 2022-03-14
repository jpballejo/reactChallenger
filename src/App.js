
import Todolist from "./components/Todolist";
import ListItems from './components/ListItems';
import Home from "./components/Home";
import Details from "./components/Details";
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
          <Switch>
             <Route path='/list'>
              <ListItems />
            </Route>
            <Route path='/todo'>
              <Todolist />
            </Route>
            <Route path='/details/:id'>
              <Details />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
