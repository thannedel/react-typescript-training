import Navigation from "./components/common/Navigation";
import Home from "../src/components/common/Home";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { House } from './components/routes/Congress/House'
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
                 <House />
              </Route>
            </Switch>
            
            </Container>
        </div>
        </Router>
  
  );
}

export default App;
