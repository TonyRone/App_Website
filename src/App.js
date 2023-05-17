import i18n from './lang/i18n';
import Home from './pages/Home';
import Eula from './pages/Eula';
import { Switch, Route } from "react-router-dom";
import RouteChangeTracker from './common/route-tracker';

function App() {
  return (
    <div>
        <RouteChangeTracker/>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path={["/", "/eula"]} component={Eula} />
        </Switch>
      </div>
  );
}

export default App;
