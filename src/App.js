import{BrowserRouter as Router,Route,Switch} from "react-router-dom";

import Homepage from "./pages/homePage";
import Login from "./pages/login";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/header";
import "./index.css"

function App() {
  return (

    <Router>
      <div className="App">

      <Header/>

      <Switch>

        <Route exact path = '/'> 
        < Homepage />
        </Route>

        <Route path = '/details/:id'> 
        < ProductDetails />
        </Route>

        <Route path = '/login'> 
        < Login />
        </Route>

        <Route path = '/signup'> 
        < SignUp />
        </Route>

        <Route path = '/profile'> 
        < Profile />
        </Route>
        
      
      </Switch>
      
    </div>

    </Router>
      );
}

export default App;
