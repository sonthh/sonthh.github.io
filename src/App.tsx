import { Route, Switch } from 'react-router-dom';
import { routers } from './router';

export const App = () => {
  return (
    <Switch>
      {routers.map((e, index) => (
        <Route
          path={e.path}
          component={e.component}
          key={index}
          exact={true}
        />
      ))}
    </Switch >
  );
}