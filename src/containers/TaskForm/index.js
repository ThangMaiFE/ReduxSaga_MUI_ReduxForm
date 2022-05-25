import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalAction from '../../actions/modal';
import * as taskAction from '../../actions/task';
import renderSelectField from '../../components/FormHelper/Select/index';
import renderTextField from '../../components/FormHelper/TextField';
import styles from './styles';
import validate from './validate';

class TaskForm extends Component {
    handleSubmitForm = (data) => {
        const { taskActionCreators, taskEditing } = this.props;
        const { addTask, updateTask } = taskActionCreators;
        const { title, description, status } = data;
        if (taskEditing && taskEditing.id) {
            updateTask(title, description, status);
        } else {
            addTask(title, description);
        }
    };

    renderStatusSelection = () => {
        let xhtml = null;
        const { taskEditing, classes } = this.props;
        if (taskEditing && taskEditing.id) {
            xhtml = (
                <Field
                    id="status"
                    label="Trạng Thái"
                    className={classes.select}
                    color="info"
                    name="status"
                    component={renderSelectField}
                >
                    <MenuItem value={0}>Ready</MenuItem>
                    <MenuItem value={1}>In Progress</MenuItem>
                    <MenuItem value={2}>Completed</MenuItem>
                </Field>
            );
        }
        return xhtml;
    };

    render() {
        const {
            classes,
            modalActionCreators,
            handleSubmit,
            invalid,
            submitting,
        } = this.props;
        const { hideModal } = modalActionCreators;

        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Grid container>
                    <Grid item md={12}>
                        <Field
                            id="title"
                            label="Tiêu Đề"
                            className={classes.textField}
                            margin="normal"
                            color="info"
                            name="title"
                            component={renderTextField}
                        />
                    </Grid>
                    <Grid item md={12} mb={2}>
                        <Field
                            id="description"
                            label="Mô Tả"
                            className={classes.textField}
                            margin="normal"
                            color="info"
                            name="description"
                            component={renderTextField}
                        />
                    </Grid>
                    {this.renderStatusSelection()}
                    <Grid item md={12}>
                        <Box display="flex" flexDirection="row-reverse" mt={2}>
                            <Box ml={1}>
                                <Button variant="contained" onClick={hideModal}>
                                    Hủy Bỏ
                                </Button>
                            </Box>
                            <Button
                                variant="outlined"
                                color="info"
                                type="submit"
                                disabled={invalid || submitting}
                            >
                                Lưu Lại
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func,
    }),
    taskActionCreators: PropTypes.shape({
        addTask: PropTypes.func,
        updateTask: PropTypes.func,
    }),
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    taskEditing: PropTypes.object,
};

const mapStateToProps = (state) => ({
    taskEditing: state.task.taskEditing,
    initialValues: {
        title: state.task.taskEditing ? state.task.taskEditing.title : null,
        description: state.task.taskEditing
            ? state.task.taskEditing.description
            : null,
        status: state.task.taskEditing ? state.task.taskEditing.status : null,
    },
});

const mapDispatchToProps = (dispatch) => ({
    modalActionCreators: bindActionCreators(modalAction, dispatch),
    taskActionCreators: bindActionCreators(taskAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'FORM_MANAGEMENT';

const withReduxForm = reduxForm({
    form: FORM_NAME,
    validate,
});

export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(TaskForm);
