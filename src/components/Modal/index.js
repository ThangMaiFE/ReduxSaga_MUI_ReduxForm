import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalAction from '../../actions/modal';
import styles from './styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
};

class CommonModal extends Component {
    render() {
        const { open, classes, modalActionCreators, component, title } =
            this.props;
        const { hideModal } = modalActionCreators;
        return (
            <Modal open={open} onClose={hideModal}>
                <div>
                    <Box sx={style}>
                        <div className={classes.header}>
                            <span className={classes.title}>{title}</span>
                            <CancelSharpIcon
                                className={classes.icon}
                                onClick={hideModal}
                            />
                        </div>
                        <div className={classes.content}>{component}</div>
                    </Box>
                </div>
            </Modal>
        );
    }
}

CommonModal.propTypes = {
    open: PropTypes.bool,
    classes: PropTypes.object,
    title: PropTypes.string,
    component: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func,
    }),
};

const mapStateToProps = (state) => ({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
});
const mapDispatchToProps = (dispatch) => ({
    modalActionCreators: bindActionCreators(modalAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(CommonModal);
