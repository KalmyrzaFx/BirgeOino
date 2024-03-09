import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Button } from '@material-ui/core';

import styles from './Home.module.css';
import LandingImg from '../../img/football.png';
import HowitworkImg1 from '../../img/EventsListScreenshot.png';
import HowitworkImg2 from '../../img/createEventScreenshot.png';
import StepsImg from '../../img/together2.png';

class Home extends Component{
  onLogoutClick(e){
      e.preventDefault();
      this.props.logoutUser();
  }
  
  render(){
      const { isAuthenticated } = this.props.auth;
      const {
        header,
        header__text,
        header__buttons,
        header__img,
        howItWork,
        howItWork__container,
        howItWork__container2,
        howItWork__text,
        howItWork__imgReverse,
        steps__text,
        steps__list } = styles;
      
      const guestLinks = (
        <div className={header__buttons}>
          <Button className="primary-color marginR-1" component={Link} to="/register" variant="contained" size="large">
            Начни сейчас
          </Button>
          <Button className="secondary-color" component={Link} to="/events" variant="contained" size="large">
            Найди спортивные события
          </Button>
      	</div>
      );
      
      const userLinks = (
        <div className={header__buttons}>
          <Button className="primary-color marginR-1" component={Link} to="/profile" variant="contained" size="large">
            Ваш профиль
          </Button>
          <Button className="secondary-color" component={Link} to="/events" variant="contained" size="large">
            Список событий
          </Button>
      	</div>
      );

      return(
        <Container maxWidth="lg">
          <header className={header}>
            <div className={header__text}>
              <h1>Достигай новых высот вместе!</h1>
              <p>Выберите время и место, чтобы присоединиться к другими спортивным энтузиастам</p>
              {isAuthenticated ? userLinks : guestLinks}
            </div>
            <img src={LandingImg} alt="Landing" className={header__img}/>
          </header>
          
          <main>
            <div className={howItWork}>
              <div className={howItWork__container}>
                <img src={StepsImg} alt="HowitworkImg2" />
                <div className={steps__text}>
                  <h2>Легко находите с кем поиграть!</h2>
                  <ol className={steps__list}>
                    <li>Создайте аккаунт</li>
                    <li>Загрузите событие</li>
                    <li>Дождитесь остальных</li>
                    <li>Встречайтесь чтобы вместе провести время</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className={howItWork}>
              <div className={howItWork__container2}>
                <img src={HowitworkImg1} className={howItWork__imgReverse} alt="HowitworkImg1" />
                <div className={howItWork__text}>
                  <h2>Ищите события</h2>
                  <p>Ноходите и присоединяйтесь к любым спортивным событиям</p>
                  <Button className="primary-color marginB-2" component={Link} to="/events" variant="contained" size="large">
                    Смотреть события
                  </Button>
                </div>
              </div>

              <div className="mb-5"></div>

              <div className={howItWork__container2}>
                <img src={HowitworkImg2} alt="HowitworkImg2" />
                <div className={howItWork__text}>
                  <h2>Создать событие</h2>
                  <p>Вы можете создать событие, чтобы любой игрок мог присоединиться к вам, чтобы играть вместе</p>
                  <Button className="primary-color" component={Link} to="/create-event" variant="contained" size="large">
                    Загрузить событие
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </Container>
      );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);