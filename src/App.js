
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetDetailsEstimator from './components/BudgetDetailsEstimator'
import ProtectedRoute from './components/ProtectedRoute'

import LoginForm from './components/Authentication/LoginForm'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={BudgetDetailsEstimator} />
  </Switch>
)

export default App
