import i18n from './lang/i18n';
import Home from './pages/Home';
import { Switch, Route } from "react-router-dom";
import RouteChangeTracker from './common/route-tracker';

function App() {
  return (
    <div>
        <RouteChangeTracker/>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
        </Switch>
      </div>
  );
}

export default App;
