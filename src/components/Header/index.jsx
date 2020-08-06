import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import iconMenu from '../../assets/iconMenu.svg';
import iconClose from '../../assets/iconClose.svg';

const Header = (props) => {
  const nav = [
    {
      id: 1,
      name: 'LogIN',
      url: '/',
    },
  ];

  const hidemenu = () => {
    const check = document.getElementById('toggle');
    check.checked = 0;
  };

  return (
    <header className='Header'>
      <div className='Header__logo'>
        <Link className='Header__logo__link' to='/' onClick={() => hidemenu()}>
          <img className='Header__logo__link-img' src={Logo} alt='Logo CalendarON' />
          <h1 className='Header__logo__link-title'>CalerndarON</h1>
        </Link>
      </div>
      <div className='Header__menu'>
        <input type='checkbox' id='toggle' />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className='Header__menu-input' htmlFor='toggle'>
          <img className='Header__menu-input-act' src={iconMenu} alt='icon Menú Hamburgesa' />
          <img className='Header__menu-input-inac' src={iconClose} alt='icon cierre Menú Hamburgesa' />
        </label>
        <nav className='Header__menu-nav'>
          <Link className='Header__menu-item' to='login' onClick={() => hidemenu()}>
            <button type='button'>
              LogIN
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
