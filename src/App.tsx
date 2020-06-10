import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import CanvasPage from './pages/Canvas';
import MainPage from './pages/Main';
import HooksPage from './pages/Hooks';
import HomePage from './pages/Home';

const routes = [
    {
        path: '/canvas',
        component: CanvasPage
    },
    {
        path: '/hooks',
        component: HooksPage
    },
    {
        path: '/home',
        component: HomePage
    }
]
function RouteWithSubRoutes(route: any) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

function App() {
    return (
        <div className="App" >
            <Router>
                <MainPage></MainPage>
                <div style={{width: '100%'}}>
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
