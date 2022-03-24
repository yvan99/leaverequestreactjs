import { Switch,Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Dashboard from './pages/dashboard';
import Logout from './components/dashboard/logout';
import ProtectedRoute from './common/ProtectedRoutes';

function App() {
  return (
    <div>
    <Switch>
      
      <Route exact path="/" component={IndexPage}/>
      <Route path='/login' component={LoginPage}></Route>
      <Route path='/logout' component={Logout}></Route>
      <Route path='/signup' component={RegisterPage}></Route>
      <ProtectedRoute exact path='/dashboard' component={Dashboard}></ProtectedRoute>
      
    </Switch>
    </div>
    

  );
}

export default App;