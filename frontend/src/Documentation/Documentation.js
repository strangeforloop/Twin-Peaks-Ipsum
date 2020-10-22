import React from 'react';
import styles from './Documentation.module.css';

/*
 When you click on the links, add a class of active to the corresponding
 tab-content
 */

const Documentation = () => {
  return (
    <div>
      <div className={styles.box}>
        <p className={styles.heading}>API - How to Get Lorem Ipsum By Paragraphs</p>
        <div className={styles.innerContainer}>
          <div className="">
            <ul className={styles.navTabs}>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} ${styles.active} ${styles.show}`}>Default</a>
              </li>
              <li className={styles.navItem}>
                {/* <a className="nav-link active show">Specific Paragraph Count</a> */}
                <a className={styles.navLink}>Specific Paragraph Count</a>
              </li>
              <li className={styles.navItem}>
                {/* <a className="nav-link active show">Profanity Toggle</a> */}
                <a className={styles.navLink}>Profanity Toggle</a>
              </li>
            </ul>
            <div className={styles.tabContent}>
              <div>
                <h5>Lorem Ipsum Paragraphs</h5>
                <p className={styles.apiDescription}>Get paragraphs of lorem ipsum.</p>
                <p className={styles.prettyPrint}>GET https://twinpeaksloremipsum.com/api/paragraphs</p>
              </div>
            </div>
            <div className={styles.tabContent}>
              <div>
                <h5>Paragraph Count</h5>
                <p className={styles.apiDescription}>Get a Specific Number of Lorem Ipsum Paragraphs</p>
                <p className={styles.prettyPrint}>GET https://twinpeaksloremipsum.com/api/paragraphs/:numberOfParagraphs</p>
              </div>
            </div>
            <div className={styles.tabContent}>
              <div>
                <h5>Profanity Toggle for Lorem Ipsum Paragraphs</h5>
                <p className={styles.apiDescription}>Toggle the profanity on or off.</p>
                <p className={styles.prettyPrint}>GET https://twinpeaksloremipsum.com/api/paragraphs/:numberOfParagraphs/?profanity=true</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>

{/* put these boxes into a separate component */}
      {/* <div className="box">
        <div className="requestExample">
          <p className="heading">API - How to Get Lorem Ipsum by Words</p>
          <div>
            <ul className="nav-tabs">
              <li className="nav-item">Default</li>
              <li className="nav-item">Specify Word Count</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Documentation;
