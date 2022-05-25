import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute';
import DefaultLayoutRoute from '../../commons/Layout/DefaultLayoutRoute';
import theme from '../../commons/theme';
import GlobalLoading from '../../components/GlobalLoading';
import CommonModal from '../../components/Modal';
import { ADMIN_ROUTES, ROUTES } from '../../constants/index';
import styles from './styles';

class App extends Component {
    renderAdminRoutes = () => {
        let xhtml = null;
        xhtml = ADMIN_ROUTES.map((route) => {
            return (
                <AdminLayoutRoute
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    name={route.name}
                />
            );
        });
        return xhtml;
    };

    renderDefaultRoutes = () => {
        let xhtml = null;
        xhtml = ROUTES.map((route) => {
            return (
                <DefaultLayoutRoute
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    name={route.name}
                />
            );
        });
        return xhtml;
    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <ToastContainer />
                    <GlobalLoading />
                    <CommonModal />
                    <Switch>
                        {this.renderAdminRoutes()}
                        {this.renderDefaultRoutes()}
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
