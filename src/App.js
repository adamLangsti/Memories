import React, { useEffect } from 'react';
import './css/index.css';
import logo from './images/memories.png';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import makeStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/Posts';

const App = () => {
    const classes = makeStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar
                className={classes.appBar}
                position='static'
                color='inherit'>
                <Typography
                    className={classes.heading}
                    variant='h2'
                    align='center'>
                    Memories
                </Typography>
                <img
                    src={logo}
                    className={classes.image}
                    alt='memories'
                    height='60'
                />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        container
                        justify='space-between'
                        align-items='stretch'
                        spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
