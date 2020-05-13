import React from 'react';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className={styles.navContent}>
        {/* <li><a href="#"></a>Home</li>
        <li><a href="#"></a>Api</li>
        <li><a href="#"></a>Github</li>
        <li><a href="#"></a>About</li> */}
        <Link className={styles.navLink} to="/">Home</Link>
        <Link className={styles.navLink} to="/api">API</Link>   
        <Link className={styles.navLink} to="/github">Github</Link>   
        <Link className={styles.navLink} to="/about">About</Link>   
      </ul>
    </nav>
  );
}

export default Nav;