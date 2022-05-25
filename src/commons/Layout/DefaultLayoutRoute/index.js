import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './styles';

class DefaultLayoutRoute extends Component {
    render() {
        const { component: YourComponent, remainProps } = this.props;
        return (
            <Route
                {...remainProps}
                render={(routeProps) => {
                    return <YourComponent {...routeProps} />;
                }}
            />
        );
    }
}
DefaultLayoutRoute.propTypes = {
    route: PropTypes.object,
    component: PropTypes.object,
    remainProps: PropTypes.element,
};

export default withStyles(styles)(DefaultLayoutRoute);
