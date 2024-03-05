import {  BrowserRouter,Routes,Route } from 'react-router-dom';
import Principal from './Principal';
import UserPage from './UserPage';
import Login from './Login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Principal/> } exact />
      <Route path="/user/:userId" element={ <UserPage/> } />
      <Route path="/login" element={ <Login/> } />
      </Routes>
  </BrowserRouter>
  );
}
export default App;