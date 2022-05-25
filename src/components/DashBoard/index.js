import { withStyles } from '@mui/styles';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as uiActions from '../../actions/ui';
import Header from './Header';
import SideBar from './SideBar';
import styles from './styles';

class DashBoard extends Component {
    handleToggleSideBar = (value) => {
        const { uiActionCreators } = this.props;
        const { showSideBar, hideSideBar } = uiActionCreators;
        if (value === true) {
            showSideBar();
        } else {
            hideSideBar();
        }
    };

    render() {
        const { classes, children, name, showSideBar } = this.props;
        return (
            <div className={classes.dashboard}>
                <Header
                    name={name}
                    showSideBar={showSideBar}
                    onToggleSideBar={this.handleToggleSideBar}
                />
                <div className={classes.wrapper}>
                    <SideBar
                        showSideBar={showSideBar}
                        onToggleSideBar={this.handleToggleSideBar}
                    />
                    <div
                        className={cn(classes.wrapperContent, {
                            [classes.shiftLeft]: showSideBar === false,
                        })}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

DashBoard.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.object,
    name: PropTypes.string,
    showSideBar: PropTypes.bool,
    uiActionCreators: PropTypes.shape({
        showSideBar: PropTypes.func,
        hideSideBar: PropTypes.func,
    }),
};

const mapStateToProps = (state) => {
    return {
        showSideBar: state.ui.showSideBar,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        uiActionCreators: bindActionCreators(uiActions, dispatch),
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(DashBoard);
