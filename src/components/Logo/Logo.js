import React from 'react';

import logo from '../../assets/Logo.svg';

import classes from './logo.module.scss';

const Logo = () => {
  return <img src={logo} alt={'logo'} className={classes.logo}></img>;
};

export default Logo;
