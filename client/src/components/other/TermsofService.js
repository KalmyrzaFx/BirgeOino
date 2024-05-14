import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';

class TermsofService extends Component{
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
      return(
        <Container maxWidth="lg" className="minHeight">
          <h1 className="primary-textColor">Условия использования</h1>

          <Typography variant="h6">
          Пользовательское содержимое
          </Typography>
          <Typography variant="body1">
          Вы несете ответственность за свое пользовательское содержимое.
          </Typography>
          <Typography variant="body1">
          При добавлении изображения вы соглашаетесь, что:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
              Изображение не нарушает авторские права и другие интеллектуальные права
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
              Изображение не содержит клеветнического, порнографического, домогательного, угрожающего, ненавистнического или иным образом неподходящего контента
              </Typography>
            </li>
          </ul>

          <Typography variant="h6">
          Запрещенное поведение
          </Typography>
          <Typography variant="body1">
          Используя данный сервис, вы соглашаетесь:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
             Не использовать сервис в незаконных целях или в нарушение каких-либо законов или регуляций;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
              Не размещать какой-либо контент пользователя, который является клеветническим, порнографическим, преследующим, угрожающим, ненавистным или иным образом неприемлемым.
              </Typography>
            </li>
          </ul>
          
          <Typography variant="h6">
          Прекращение Вашего Аккаунта
          </Typography>
          <Typography variant="body1" paragraph>
          Если вы нарушите любые из этих Условий, ваш аккаунт и публикации будут удалены.
          </Typography>

          <Typography variant="h6">
          Отказ от ответственности
          </Typography>
          <Typography variant="body1">
          Положения об ограничении ответственности являются обычными в лицензионных соглашениях с конечными пользователями, чтобы пользователи были в курсе, что они не смогут привлекать компанию к ответственности за любой ущерб, возникающий в результате использования приложения.
          </Typography>
        </Container>
      );
  }
}

export default TermsofService;