import {Route, Switch} from 'react-router-dom';
import Index from './Pages/Index';
import Error404 from './Pages/Error404';
import MainClub from './Pages/MainClub';
import SubClub from './Pages/SubClub';
import ElseClub from './Pages/ElseClub';

function App() {
  return (
    <Switch>
      <Route path="/" component={Index} exact />
      <Route path="/mainClub" component={MainClub} exact />
      <Route path="/subClub" component={SubClub} exact />
      <Route path="/elseClub" component={ElseClub} exact />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;