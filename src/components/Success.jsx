import React from 'react';
import successImage from '../assets/success.svg';

export const Success = ({ count, resetSubmitUsers }) => {
  return (
    <div className="success-block">
      <img src={successImage} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={resetSubmitUsers} className="send-invite-btn">Назад</button>
    </div>
  );
};