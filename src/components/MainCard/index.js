import React from 'react';
import background from '../../media/background.jpg';
import { Link } from 'react-router-dom';
import style from './main.module.css';

const MainCard = () => {
  return (
    <div className={style.main}>
      <div className={style.firstColumn}>
        Let's get started
        <span className={style.subHeading}>Understated, trustworthy, reassured and reliable.</span>
      </div>
      <div
        className={style.secondColumn}
        style={{
          backgroundImage: `url("${background}")`,
        }}
      >
        <Link to="/simple-app-task/signup"
          style={{
            color: '#5FBB6D',
            textDecoration: 'none',
          }}
        >Proceed →</Link>
      </div>
    </div>
  );
};

export default MainCard;
