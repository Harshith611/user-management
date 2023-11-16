import { Fragment } from 'react';
import './App.css';
import UserDetails from './components/UserDetails';
import  {Route,Routes} from 'react-router-dom';
import UserDashboard from './components/UserDashboard';
import SignIn from './components/SignIn';
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<UserDashboard />}/>
        <Route path='/user-details' element={<UserDetails />}/>
        <Route path='/sign-in' element={<SignIn />}/>
      </Routes>
    </Fragment>
  );
}

export default App;
