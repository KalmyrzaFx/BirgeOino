import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';

class PrivacyPolicy extends Component{
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
      return(
        <Container maxWidth="lg" className="minHeight">
          <h1 className="primary-textColor">Политика Конфиденциальности</h1>

          <Typography variant="h6">
          Это веб-приложение может собирать данные, такие как:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Имя
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
              Электронная почта
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Местоположение
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Любимый вид спорта
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Биография
              </Typography>
            </li>
          </ul>  
          
          <Typography variant="h6" paragraph>
          Мы используем ваши данные только для этого веб-приложения.
          </Typography>

          <Typography variant="h6" paragraph>
          Вы можете связаться с нами, чтобы удалить ваши данные и аккаунт.
          </Typography>

          <Typography variant="h6">
          Если вы не хотите, чтобы мы собирали ваши данные, тогда не используйте это веб-приложение.
          </Typography>
        </Container>
      );
  }
}

export default PrivacyPolicy;