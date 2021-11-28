import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import Index from './Pages/Index';
import Error404 from './Pages/Error404';
import MainClub from './Pages/MainClub';
import SubClub from './Pages/SubClub';
import ElseClub from './Pages/ElseClub';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import MyPage from './Pages/MyPage';

function App() {
  return (
    <Switch>
      <Route path="/" component={Index} exact />
      <Route path="/mainClub" component={MainClub} exact />
      <Route path="/mainClub/:category" component={MainClub} exact />
      <Route path="/mainClub/:category/:name" component={MainClub} exact />
      <Route path="/subClub" component={SubClub} exact />
      <Route path="/subClub/:category" component={SubClub} exact />
      <Route path="/subClub/:category/:name" component={SubClub} exact />
      <Route path="/elseClub" component={ElseClub} exact />
      <Route path="/elseClub/post/" component={ElseClub} exact />
      <Route path="/elseClub/posting" component={ElseClub} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/mypage" component={MyPage} exact />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;