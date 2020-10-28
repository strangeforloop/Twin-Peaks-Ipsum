import React, { useState } from 'react';
import styles from './Documentation.module.css';
import TabNav from "../components/TabNav/TabNav";
import Tab from "../components/Tab/Tab";

const Documentation = () => {
  const [selectedParagraphExample, setSelectedParagraphExample] = useState("Default");
  const [selectedWordExample , setSelectedWordExample] = useState("Default");

  return (
    <div className={styles.documentation}>
      <h3>How to Use the API</h3>
      <div className={styles.APIrequestExample}>
        <p className={styles.heading}>API - Get Lorem Ipsum By Paragraphs</p>
        <TabNav
          tabs={["Default", "Specific Paragraph Count", "Profanity Toggle"]}
          selected={selectedParagraphExample}
          setSelected={setSelectedParagraphExample}
        >
          <Tab isSelected={selectedParagraphExample === "Default"}>
            <div className={styles.info}>
              <h5>Lorem Ipsum Paragraphs</h5>
              <p className={styles.apiDescription}>Get paragraphs of lorem ipsum.</p>
              <p className={styles.prettyPrint}>GET https://twinpeaksloremipsum.com/api/paragraphs</p>
            </div>
          </Tab>
          <Tab isSelected={selectedParagraphExample === "Specific Paragraph Count"}>
            <div className={styles.info}>
              <h5>Paragraph Count</h5>
              <p className={styles.apiDescription}>Get a Specific Number of Lorem Ipsum Paragraphs</p>
              <p className={styles.prettyPrint}>GET https://twinpeaksloremipsum.com/api/paragraphs/:numberOfParagraphs</p>
            </div>
          </Tab>
          <Tab isSelected={selectedParagraphExample === "Profanity Toggle"}>
            <div className={styles.info}>
              <h5>Profanity Toggle for Lorem Ipsum Paragraphs</h5>
              <p className={styles.apiDescription}>Toggle the profanity on or off.</p>
              <p className={styles.prettyPrint}>GET https://twinpeaksloremipsum.com/api/paragraphs/:numberOfParagraphs/?profanity=true</p>
            </div>
          </Tab>
        </TabNav>
      </div>

      <div className={styles.APIrequestExample}>
      <p className={styles.heading}>API - Get Lorem Ipsum By Words</p>
      <TabNav
        tabs={["Default", "Specific Word Count"]}
        selected={selectedWordExample}
        setSelected={setSelectedWordExample}
      >
        <Tab isSelected={selectedWordExample === "Default"}>
          <div className={styles.info}>
            <h5>Lorem Ipsum Paragraphs</h5>
            <p className={styles.apiDescription}>Get paragraphs of lorem ipsum.</p>
            <p className={styles.prettyPrint}>GET https://twinpeaksloremipsum.com/api/words</p>
          </div>
        </Tab>
        <Tab isSelected={selectedWordExample === "Specific Word Count"}>
          <div>
            <h5>Paragraph Count</h5>
            <p className={styles.apiDescription}>Get a Specific Number of Lorem Ipsum Paragraphs</p>
            <p className={styles.prettyPrint}>GET https://twinpeaksloremipsum.com/api/words/:numberOfWords</p>
          </div>
        </Tab>
      </TabNav>
      </div>

    </div>
  );
}

export default Documentation;
