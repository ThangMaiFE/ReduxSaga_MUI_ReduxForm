import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTES } from '../../../constants';
import styles from './styles';

class SideBar extends Component {
    toggleDrawer = (value) => {
        const { onToggleSideBar } = this.props;
        if (onToggleSideBar) {
            onToggleSideBar(value);
        }
    };

    renderList = () => {
        let xhtml = null;
        const { classes } = this.props;
        xhtml = (
            <div className={classes.list}>
                <List commponent="div">
                    {ADMIN_ROUTES.map((item) => {
                        return (
                            <NavLink
                                key={item.path}
                                className={classes.menuLink}
                                exact={item.exact}
                                to={item.path}
                                activeClassName={classes.menuLinkActive}
                            >
                                <ListItem className={classes.listText} button>
                                    {item.name}
                                </ListItem>
                            </NavLink>
                        );
                    })}
                </List>
            </div>
        );
        return xhtml;
    };

    render() {
        const { classes, showSideBar } = this.props;
        return (
            <Drawer
                open={showSideBar}
                PaperProps={{
                    style: {
                        position: 'absolute',
                        width: 240,
                        maxWidth: 240,
                    },
                }}
                className={classes.drawerPaper}
                onClose={() => this.toggleDrawer(false)}
                variant="persistent"
            >
                {this.renderList()}
            </Drawer>
        );
    }
}

SideBar.propTypes = {
    classes: PropTypes.object,
    showSideBar: PropTypes.bool,
    onToggleSideBar: PropTypes.func,
};

export default withStyles(styles)(SideBar);
