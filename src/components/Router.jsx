import { Route, Switch } from "react-router";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NotFound from "./NotFound";

export default function Router() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact-us" component={ContactUs} />
      <Route component={NotFound} />
    </Switch>
  );
}
