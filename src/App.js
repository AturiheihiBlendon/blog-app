import NavBar from './components/NavBar';
import Home from './components/Home';
import CreateBlog from './components/Create';
import BlogDetails from './components/BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/create">
            <CreateBlog />
          </Route>

          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
