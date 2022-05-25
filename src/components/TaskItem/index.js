import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class TaskItem extends Component {
    render() {
        var { classes, status, task, onClickEdit, onClickDelete } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography variant="h3">{task.title}</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography variant="button">
                                {status.label}
                            </Typography>
                        </Grid>
                    </Grid>
                    <p>{task.description}</p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <ButtonGroup
                        disableElevation
                        color="inherit"
                        variant="text"
                    >
                        <Button size="small" color="info" onClick={onClickEdit}>
                            <ModeEditOutlineTwoToneIcon />
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            onClick={onClickDelete}
                        >
                            <DeleteTwoToneIcon />
                        </Button>
                    </ButtonGroup>
                </CardActions>
            </Card>
        );
    }
}

TaskItem.propTypes = {
    classes: PropTypes.object,
    status: PropTypes.object,
    title: PropTypes.object,
    description: PropTypes.object,
    task: PropTypes.object,
    onClickEdit: PropTypes.func,
    onClickDelete: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
