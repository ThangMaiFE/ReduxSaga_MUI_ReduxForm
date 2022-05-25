import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class SearchBox extends Component {
    render() {
        const { classes, handleChange } = this.props;
        return (
            <Box
                className={classes.container}
                component="form"
                sx={{
                    '& > :not(style)': { mt: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    className={classes.textField}
                    color="info"
                    label="Tìm Kiếm"
                    onChange={handleChange}
                    variant="standard"
                />
            </Box>
        );
    }
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
