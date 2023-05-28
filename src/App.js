
import './App.css';
import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SignUp from './SignUp';
import SignIn from './SignIn';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
         <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/signin">
            <SignIn/> 
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
         </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
