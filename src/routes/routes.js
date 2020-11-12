import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from '_pages/index';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
            </Switch>
        </Router>
    );
}
