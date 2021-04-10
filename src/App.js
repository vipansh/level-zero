import logo from './logo.svg';
import './App.css';
import { MarkSix } from './components/MarkSix';
import { MarkSeven } from './components/MarkSeven';
import MarkEight from './components/MarkEight';
import MarkNine from './components/MarkNine';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AllProjectPage } from './components/AllProjectPage';
function App() {
  return (
    <Router>





      <div className="App">


        <nav>
          <ul>
          <li><Link to="/">Back TO Home</Link></li>

            <li><a href="https://replit.com/@vipansh/TestYour-Knowledge" target="_blank">Mark One(A CLI Quiz app)</a></li>
            <li><a href="https://replit.com/join/ahkupvwk-vipansh" target="_blank">Mark Two (A CLI Quiz app)</a></li>
            <li><Link to="/">Mark three(Your first website)</Link></li>
            <li><a href="https://vipansh.vercel.app/" target="_blank">Mark Four(My portfolio)</a></li>
            <li><a href="https://jsblog.vercel.app/ " target="_blank">Mark five(Blogs)</a></li>
            <li> <Link to="/markSix">MarkSix</Link> </li>
            <li> <Link to="/markSeven">MarkSeven</Link> </li>
            <li> <Link to="/markEight">MarkEight</Link> </li>
            <li> <Link to="/markNine">MarkNine</Link> </li>

          </ul>
        </nav>

        <Switch>
          {/* <Route path="/markfive" /> */}
          <Route path ="/" exact component={AllProjectPage}/>
          <Route path="/markSix" exect component={MarkSix} />
          <Route path="/markSeven" exect component={MarkSeven} />
          <Route path="/markEight" exect component={MarkEight} />
          <Route path="/markNine" exect component={MarkNine} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;

// https://replit.com/@vipansh/TestYour-Knowledge 
// https://replit.com/join/ahkupvwk-vipansh