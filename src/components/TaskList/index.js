import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import styles from './styles';

class TaskList extends Component {
    render() {
        const { classes, status, tasks, onClickEdit, onClickDelete } =
            this.props;
        return (
            <Grid item md={4} xs={12} key={status.value}>
                <Box mt={2} mb={2}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {tasks.map((task) => (
                        <TaskItem
                            task={task}
                            status={status}
                            key={status.value}
                            onClickEdit={() => onClickEdit(task)}
                            onClickDelete={() => onClickDelete(task)}
                        />
                    ))}
                </div>
            </Grid>
        );
    }
}

TaskList.propTypes = {
    classes: PropTypes.object,
    status: PropTypes.object,
    tasks: PropTypes.array,
    onClickEdit: PropTypes.func,
    onClickDelete: PropTypes.func,
};

export default withStyles(styles)(TaskList);
