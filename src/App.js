import React from 'react';
import logo from './media/logo.png';
import logoName from './media/logo-name.png';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import MainCard from './components/MainCard';
import UserForm from './components/UserForm';
import style from './app.module.css';

function App() {
  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <img className={style.logo} src={logo} alt="Brand" />
        <img className={style.logoName} src={logoName} alt="Brand" />
      </header>
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainCard />
          </Route>
          <Route path="/signup" exact>
            <UserForm />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
