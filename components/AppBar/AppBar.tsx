import React from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { useStyles } from '../../styles/AppBar/AppBarStyle';
import MenuIcon from '@material-ui/icons/Menu';

/**
 * Header of App component
 */
function AppBarComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppBarComponent;
