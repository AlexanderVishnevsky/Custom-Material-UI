import * as React from 'react';
import { Box, CircularProgress, CircularProgressProps, createStyles, makeStyles, Theme } from '@material-ui/core';

const CustomizedProgressBar = (props: CircularProgressProps): JSX.Element => {
    const classes = useStylesFacebook();

    return (
        <div className={classes.root}>
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.one}
                classes={{
                    circle: classes.circle,
                }}
                size={100}
                thickness={3}
                {...props}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.two}
                classes={{
                    circle: classes.circle,
                }}
                size={140}
                thickness={2.5}
                {...props}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.three}
                classes={{
                    circle: classes.circle,
                }}
                size={180}
                thickness={2}
                {...props}
            />
        </div>
    );
};

export const LoaderApp = (): JSX.Element => (
    <Box width={'100%'} height={'100%'} overflow={'hidden'}>
        <CustomizedProgressBar />
    </Box>
);

const useStylesFacebook = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '95%',
        },

        one: {
            color: '#28D7FF',
            animationDuration: '1250ms',
            position: 'absolute',
        },
        two: {
            color: '#20A3FF',
            animationDuration: '1650ms',
            position: 'absolute',
        },
        three: {
            color: '#1D6DF2',
            animationDuration: '2050ms',
            position: 'absolute',
        },
        circle: {
            strokeLinecap: 'round',
        },
    }),
);
