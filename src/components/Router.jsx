import { Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NotFound from "./NotFound";
import Users from "./Users";
import User from "./User";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/users/:username/profile" component={User} />
      <Route component={NotFound} />
    </Switch>
  );
}
