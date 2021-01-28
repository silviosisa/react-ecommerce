import React from "react";
import { Switch, Route } from 'react-router-dom';

// layouts
import MainLayout from "./layout/MainLayout";
import HomepageLayout from "./layout/HomepageLayout";

import './default.scss'
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" render={() => (
                <HomepageLayout>
                    <Homepage />
                </HomepageLayout>
            )} />
            <Route exact path="/registration" render={() => (
                <MainLayout>
                    <Registration />
                </MainLayout>
            )} />
        </Switch>
    </div>
  );
}

export default App;
