import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Container, Grid, Link, Typography } from '@material-ui/core';

import Logo from '../../img/BirgeLogo3.png';

export default() => {
    return(
        <footer>
            <AppBar className="primary-color marginT-3 pad-2" position="static">
                <Grid component={Container} container>
                    <Grid item xs={12} sm={3}>
                        <img src={Logo} className="logo" alt="Logo" />
                    </Grid>
                    <Grid item xs={12} sm={9} className="footer-links">
                        <Link className="white-link" component={RouterLink} to="/">
                            Главная
                        </Link>
                        <span>/</span>
                        <Link className="white-link" component={RouterLink} to="/events">
                            Список событий
                        </Link>
                        <span>/</span>
                        <Link className="white-link" component={RouterLink} to="/create-event">
                            Создать событие
                        </Link>
                        <span>/</span>
                        <Link className="white-link" component={RouterLink} to="/register">
                            Начать
                        </Link>
                        <span>/</span>
                        <Link className="white-link" component={RouterLink} to="/termsofservice">
                            Условия
                        </Link>
                        <span>/</span>
                        <Link className="white-link" component={RouterLink} to="/privacypolicy">
                            Конфиденциальность
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={3}></Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography className="marginL-d7">
                            &copy;{new Date().getFullYear()} BirgeOyno
                        </Typography>
                    </Grid>
                </Grid>
            </AppBar>
        </footer>
    );
};