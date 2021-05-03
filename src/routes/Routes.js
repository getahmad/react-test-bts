import { Route, Switch } from "react-router";
import Auth from "../views/Auth";
import Checklist from "../views/Checklist";
import PrivateRoutes from "./PrivateRoutes";


const Routes = () => {
  return (
    <Switch>
      <PrivateRoutes exact path="/checklist" component={Checklist} />
      <Route exact path="/" component={Auth} />
    </Switch>
  );
};

export default Routes;
