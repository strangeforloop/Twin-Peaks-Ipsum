import React from 'react';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className={styles.navContent}>
        <Link className={styles.navLink} to="/">Home</Link>
        <Link className={styles.navLink} to="/documentation">Documentation</Link>
        <a className={styles.navLink} target="_blank" href= "https://github.com/strangeforloop/Twin-Peaks-Lorem-Ipsum">Github</a>
      </ul>
    </nav>
  );
}

export default Nav;
