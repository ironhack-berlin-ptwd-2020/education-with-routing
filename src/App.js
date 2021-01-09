import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Education from './components/Education';
import EducationDetail from './components/EducationDetail';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav className="nav-style">
        <ul>
          <Link to="/">take me home</Link><br />
          <Link to="/education">take me to education</Link>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/education' component={Education}></Route>
        {/* Route is setting props.match.params.theID for us in the component */}
        <Route path='/education/:theID' component={EducationDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
