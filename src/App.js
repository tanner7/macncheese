import React from 'react';
import './style/App.css';
import Container from './containers/Container';
import AddNote from './components/notes/AddNote';
import HammerBox from './components/HammerBox';
import Clock from './components/Clock';

// used for routing
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// Navbar creates links that can be used to navigate
// between routes.
/*
const Navbar = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>NoteList</Link></li>
        <li><Link to='/hammerbox'>HammerBox</Link></li>
      </ul>
    </nav>
  </header>
)
*/

// traditional functino way to write this vs the arrow method above.
function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>NoteList</Link></li>
          <li><Link to='/hammerbox'>HammerBox</Link></li>
          <li><Link to='/clock'>Clock</Link></li>
        </ul>
      </nav>
    </header>
  );  
}

// The Main component renders one of the three provided
// Routes (provided that one matches).
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Container}/>
      <Route path='/hammerbox' component={HammerBox}/>
      <Route path='/clock' component={Clock}/>
    </Switch>
  </main>
)

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;