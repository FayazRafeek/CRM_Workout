
import GlobalStyle from "./globalStyles";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admission from "./Pages/Admission";
import Fees from "./Pages/Fees";
import Academics from "./Pages/Academics";

function App() {

  const [screen, setScreen] = useState('Admission')

  const itemSelect = (item) => {
    setScreen(item)
  }

  return (
    <>
    <Router>

    <GlobalStyle />
    <div className="App" style={appParent}>
        <NavBar itemSelect={itemSelect} activeItem={screen}/>
  
      <Switch>
        <Route path='/' exact component={Admission}/>
        <Route path='/Fees' component={Fees}/>
        <Route path='/Academics' component={Academics}/>
      </Switch>
    </div>

    </Router>
    </>
  );
}

const appParent = {
  display : 'flex',

}

export default App;
