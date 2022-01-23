import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import Index from "./Pages/Index";
import Error404 from "./Pages/Error404";
import MainClub from "./Pages/MainClub";
import SubClub from "./Pages/SubClub";
import ElseClub from "./Pages/ElseClub";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import MyPage from "./Pages/MyPage";
import Logout from "./Pages/Logout";
import IndexTemplate from "./Components/Menu/IndexTemplate";
<<<<<<< HEAD
=======
import FooterTemplate from "./Components/Menu/FooterTemplate"

import Recruitment from './Components/Recruitment/Recruitment';
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b

function App() {
  return (
    <div className="App">
      <IndexTemplate />
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/mainClub" component={MainClub} exact />
        <Route path="/mainClub/:category" component={MainClub} exact />
        <Route path="/mainClub/:category/:name" component={MainClub} exact />
        <Route path="/subClub" component={SubClub} exact />
<<<<<<< HEAD
        <Route path="/subClub/:category" component={SubClub} exact />
        <Route path="/subClub/:category/:name" component={SubClub} exact />
        <Route path="/elseClub" component={ElseClub} exact />
=======
        <Route path="/recruitment" component={Recruitment} exact />
        <Route path="/subClub/:category" component={SubClub} exact />
        <Route path="/subClub/:category/:name" component={SubClub} exact />
        <Route path="/elseClub/:category" component={ElseClub} exact />
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
        <Route path="/elseClub/post/:id" component={ElseClub} exact />
        <Route path="/elseClub/posting" component={ElseClub} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/mypage" component={MyPage} exact />
<<<<<<< HEAD
        <Route path="/logout" component={Logout} exact />
        <Route component={Error404} />
      </Switch>
=======
        <Route path="/mypage/:category" component={MyPage} exact />
        <Route path="/logout" component={Logout} exact /> 
        <Route component={Error404} />
      </Switch>
      <FooterTemplate />
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
    </div>
  );
}

export default App;
