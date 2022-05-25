import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

class LoginPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <Card sx={{ maxWidth: 450 }}>
                    <CardContent>
                        <Typography variant="caption">
                            Đăng Nhập Để Tiếp Tục
                        </Typography>
                        <TextField
                            id="email"
                            label="Email"
                            className={classes.TextField}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="password"
                            label="Password"
                            className={classes.TextField}
                            fullWidth
                            margin="normal"
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="info"
                            fullWidth
                            type="submit"
                        >
                            Login
                        </Button>
                    </CardActions>
                    <Link to="/signup">
                        <Button>Đăng Ký Tài Khoản.</Button>
                    </Link>
                </Card>
            </div>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(LoginPage);
