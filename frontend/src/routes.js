import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Tarefas from './pages/tarefas/';
import Sobre from './pages/sobre/';

const routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Tarefas} />
                <Route path="/sobre" component={Sobre} />
                
                <Redirect from='*' exact to='/'/>
            </Switch>
        </Router>
    )
};

export default routes; 