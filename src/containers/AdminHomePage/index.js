import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import styles from './styles';

class AdminHomePage extends Component {
    render() {
        return (
            <div>
                <h1>welcome to home page</h1>
            </div>
        );
    }
}
export default withStyles(styles)(AdminHomePage);
