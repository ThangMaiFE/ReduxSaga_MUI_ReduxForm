import { Checkbox, FormControlLabel, TextField } from '@mui/material';
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

class SignUpPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardContent>
                        <Typography variant="caption">
                            Đăng Ký Tài Khoản
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
                        <TextField
                            id="cppassword"
                            label="Confirm Password"
                            className={classes.TextField}
                            fullWidth
                            margin="normal"
                        />
                        <FormControlLabel
                            control={<Checkbox value="agree" />}
                            label="Tôi đã đọc chính sách và đồng ý điều khoản"
                            className={classes.fullWidth}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="info"
                            fullWidth
                            type="submit"
                        >
                            SignUp
                        </Button>
                    </CardActions>
                    <Link to="/login">
                        <Button>Đã có tài khoản ?</Button>
                    </Link>
                </Card>
            </div>
        );
    }
}

SignUpPage.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(SignUpPage);
