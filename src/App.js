import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './component/pages/Home'
import Signup from './component/pages/Singup';
import Services from './component/pages/Services';
import Products from './component/pages/Product';
function App() {
  return (
    <>
        <Router>
        <Navbar />
        <Switch>
         <Route path="/" exact  component={Home}/>
         <Route path="/product" exact  component={Products}/>
         <Route path="/services" exact  component={Services}/>
         <Route path="/signup" exact  component={Signup}/>
        </Switch> 
        </Router>
    </>
  );
}

export default App;
