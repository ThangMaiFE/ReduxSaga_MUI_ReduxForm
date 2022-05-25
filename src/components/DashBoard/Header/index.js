import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './styles';

const menuId = 'primary-search-account-menu';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }

    handleToggleSideBar = () => {
        const { showSideBar, onToggleSideBar } = this.props;
        if (onToggleSideBar) {
            onToggleSideBar(!showSideBar);
        }
    };

    handleProfileMenuOpen = (e) => {
        this.setState({
            anchorEl: e.currentTarget,
        });
    };

    handleMenuClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    handleLogout = () => {
        const { history } = this.props;
        if (history) {
            history.push('/login');
        }
    };

    renderMenu = () => {
        const { anchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        return (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleLogout}>LogOut</MenuItem>
            </Menu>
        );
    };

    render() {
        const { classes, name } = this.props;
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={this.handleToggleSideBar}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            {name}
                        </Typography>
                        <div className={classes.Search}>
                            <div className={classes.SearchIconWrapper}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                className={classes.StyledInputBase}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {this.renderMenu()}
            </Box>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object,
    name: PropTypes.string,
    showSideBar: PropTypes.bool,
    onToggleSideBar: PropTypes.func,
    history: PropTypes.object,
};

export default withStyles(styles)(withRouter(Header));
