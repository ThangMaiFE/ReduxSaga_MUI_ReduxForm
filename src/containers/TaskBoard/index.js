import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import SearchBox from '../../components/SearchBox';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constants';
import TaskForm from '../TaskForm';
import styles from './styles';

class TaskBoard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { open: false };
    // }

    componentDidMount() {
        const { taskActionsCreators } = this.props;
        const { fetchTask } = taskActionsCreators;
        fetchTask();
    }

    handleEditTask = (task) => {
        const { taskActionsCreators, modalActionsCreators } = this.props;
        const { setTaskEditing } = taskActionsCreators;
        setTaskEditing(task);
        const { showModal, changeModalContent, changeModalTitle } =
            modalActionsCreators;
        showModal();
        changeModalTitle('Cập Nhật Công Việc');
        changeModalContent(<TaskForm />);
    };

    showModalDeleteTask = (task) => {
        const { modalActionsCreators, classes } = this.props;
        const { showModal, changeModalContent, changeModalTitle, hideModal } =
            modalActionsCreators;
        showModal();
        changeModalTitle('Xóa Công Việc');
        changeModalContent(
            <div className={classes.modalDelete}>
                <div className={classes.modalConfirmText}>
                    Bạn Có Chắc Muốn Xóa {}
                    <span className={classes.modalConfirmTextBold}>
                        {task.title} ?
                    </span>
                </div>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                    <Box ml={1}>
                        <Button
                            variant="contained"
                            color="info"
                            onClick={() => this.handleDeleteTask(task)}
                        >
                            Đồng Ý
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="outlined" onClick={hideModal}>
                            Hủy Bỏ
                        </Button>
                    </Box>
                </Box>
            </div>,
        );
    };

    handleDeleteTask = (task) => {
        const { id } = task;
        const { taskActionsCreators } = this.props;
        const { deleteTask } = taskActionsCreators;
        deleteTask(id);
    };

    renderBoard = () => {
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={6}>
                {STATUSES.map((status) => {
                    const taskFiltered = listTask.filter(
                        (task) => task.status === status.value,
                    );
                    return (
                        <TaskList
                            tasks={taskFiltered}
                            status={status}
                            key={status.value}
                            onClickEdit={this.handleEditTask}
                            onClickDelete={this.showModalDeleteTask}
                        />
                    );
                })}
            </Grid>
        );
        return xhtml;
    };

    // renderForm = () => {
    //     let xhtml = null;
    //     var { open } = this.state;
    //     xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    //     return xhtml;
    // };

    handleFilter = (e) => {
        const { value } = e.target;
        const { taskActionsCreators } = this.props;
        const { filterTask } = taskActionsCreators;
        filterTask(value);
    };

    renderSearchBox = () => {
        let xhtml = null;
        xhtml = <SearchBox handleChange={this.handleFilter} />;
        return xhtml;
    };

    // handleClose = () => {
    //     this.setState({
    //         open: false,
    //     });
    // };

    openForm = () => {
        // eslint-disable-next-line no-shadow
        const { modalActionsCreators, taskActionsCreators } = this.props;
        const { setTaskEditing } = taskActionsCreators;
        setTaskEditing(null);

        const { showModal, changeModalContent, changeModalTitle } =
            modalActionsCreators;
        showModal();
        changeModalTitle('Thêm Mời Công Việc');
        changeModalContent(<TaskForm />);
    };

    loadData = () => {
        const { taskActionsCreators } = this.props;
        const { fetchTask } = taskActionsCreators;
        fetchTask();
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button
                    variant="outlined"
                    color="info"
                    className={classes.button}
                    onClick={this.loadData}
                    style={{ marginRight: 20 }}
                >
                    Tải Dữ Liệu
                </Button>
                <Button
                    variant="outlined"
                    color="info"
                    className={classes.button}
                    onClick={this.openForm}
                >
                    <AddCircleIcon style={{ marginRight: 3 }} />
                    Thêm Công Việc
                </Button>
                {this.renderSearchBox()}
                {this.renderBoard()}
                {/* {this.renderForm()} */}
            </div>
        );
    }
}

TaskBoard.propTypes = {
    classes: PropTypes.object,
    taskActionsCreators: PropTypes.shape({
        fetchTask: PropTypes.func,
        filterTask: PropTypes.func,
        setTaskEditing: PropTypes.func,
        deleteTask: PropTypes.func,
    }),
    modalActionsCreators: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func,
    }),

    listTask: PropTypes.array,
};
const mapStateToProps = (state) => {
    return {
        listTask: state.task.listTask,
    };
};
const mapDispatchToProps = (dispatch) => ({
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
});

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(TaskBoard),
);
