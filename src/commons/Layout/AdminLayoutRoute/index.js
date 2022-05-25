import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DashBoard from '../../../components/DashBoard';
import styles from './styles';

class AdminLayoutRoute extends Component {
    render() {
        const { component: YourComponent, remainProps, name } = this.props;
        return (
            <Route
                {...remainProps}
                render={(routeProps) => {
                    return (
                        <DashBoard {...remainProps} name={name}>
                            <YourComponent {...routeProps} />
                        </DashBoard>
                    );
                }}
            />
        );
    }
}
AdminLayoutRoute.propTypes = {
    route: PropTypes.object,
    component: PropTypes.object,
    remainProps: PropTypes.element,
    name: PropTypes.string,
};

export default withStyles(styles)(AdminLayoutRoute);
