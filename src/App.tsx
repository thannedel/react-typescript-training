import Navigation from "./components/common/Navigation";
import Home  from "./components/Home";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { House } from './components/routes/Congress/House'
import { Senate } from './components/routes/Congress/Senate'

function App() {
  
  return (
    
      <Router>
        <div className="App">
          <Container>
          <Navigation />
          <Switch>
              <Route exact path="/">
                 <Home />
              </Route>
            </Switch>
            <Switch>
              <Route path="/house" component={House}>
                 
              </Route>
            </Switch>
            <Switch>
              <Route path="/senate" >
              <Senate />
              </Route>
            </Switch>
            </Container>
        </div>
        </Router>
  
  );
}

export default App;
