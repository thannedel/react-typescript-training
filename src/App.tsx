import Navigation from "./components/common/Navigation";
import Home from "../src/components/common/Home";
import House from '../src/components/Congress/House'
import { MemberProvider } from "./contexts/MemberContext";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
function App() {
  return (
    <MemberProvider>
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
              <Route path="/house">
                 <House />
              </Route>
            </Switch>
            
            </Container>
        </div>
        </Router>
    </MemberProvider>
  );
}

export default App;
