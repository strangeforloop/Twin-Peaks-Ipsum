import React from "react";
import styles from './TabNav.module.css';

export default function TabNav(props) {
  return (
    <div className={styles.container}>
      <ul className={styles.navTabs}>
        {props.tabs.map((tab) => {
          const active = tab === props.selected ? styles.active : "";

          return (
            <li className={ `${styles.navItem} ${active}`} key={tab}>
              <a
                href="#"
                className={` ${styles.navLink} ${active}` }
                onClick={() => props.setSelected(tab)}
              >
                { tab }
              </a>
            </li>
          );
        })}
      </ul>
      {props.children}
    </div>
  );
}
