import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';
import './styles.css';

const Components = () => (
  <header id="main-header">
    <div className="header-content">
      <Link to="/">
        <img src={logo} alt="InstaClone" />
      </Link>
      <Link to="/new">
        <img src={camera} alt="Enviar publicação" />
      </Link>
    </div>
  </header>
);
export default Components;
