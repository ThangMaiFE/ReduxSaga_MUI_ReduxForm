import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return null;
    }
    return <FormHelperText>{touched && error}</FormHelperText>;
};

renderFromHelper.propTypes = {
    touched: PropTypes.bool,
    error: PropTypes.bool,
};

const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    classes,
    ...custom
}) => (
    <FormControl className={classes.formControl} error={touched && error}>
        <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
        <Select
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...input}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...custom}
            variant="filled"
            inputProps={{
                name: input.name,
                id: 'color-native-simple',
            }}
            value={input.value}
        >
            {children}
        </Select>
        {renderFromHelper({ touched, error })}
    </FormControl>
);

renderSelectField.propTypes = {
    label: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object,
    children: PropTypes.array,
};

export default withStyles(styles)(renderSelectField);
