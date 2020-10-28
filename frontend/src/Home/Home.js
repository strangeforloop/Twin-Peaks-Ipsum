import React, { useRef, useState } from 'react';
import styles from './home.module.css';
// import { setPriority } from 'os';

const Home = () => {
  const [numberToGenerate, setNumberToGenerate] = useState(3);
  const [loremType, setLoremType] = useState('paragraphs');
  const [removeProfanity, setRemoveProfanity] = useState(false);
  const [output, setOutput] = useState('');
  const inputAreaRef = useRef(null);

  const generateOutput = (data) => {
    if (loremType === 'paragraphs') {
      generateParagraphOutput(data);
    } else {
      generateWordOutput(data);
    }
  }

  const generateParagraphOutput = (data) => {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      output += data[i] + '\n\n';
    }
    console.log(output);
    setOutput(output);
  }

  const generateWordOutput = (data) => {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      output += data[i] + ' ';
    }
    console.log(output);
    setOutput(output);
  }

  const handleLoremToggle = (e) => {
    console.log(e.target.value);
    setLoremType(e.target.value);
  }

  const handleProfanityToggle = (e) => {
    setRemoveProfanity(e.target.checked);
  }

  const handleNumberInput = (e) => {
    setNumberToGenerate(e.target.value);
  }

  const copyTextToClipboard = (e) => {
    console.log({inputAreaRef});
    inputAreaRef.current.select();
    document.execCommand('copy');
  }

  const generateText =  async (e) => {
    e.preventDefault();
    const response = await fetch(`https://twin-peaks-lorem-ipsum.herokuapp.com/api/${loremType}/${numberToGenerate}/?profanity=${removeProfanity}`);
    const data = await response.json();
    console.log(data);
    generateOutput(data);
  }

  return (
    <div className={styles.page}>
      <div className={styles.home}>
        <div className={styles.hero}>
          <img src="/assets/SVG/clouds_left.svg" alt="clouds" className={styles.leftClouds}></img>
          <img src="/assets/SVG/clouds_right.svg" alt="clouds" className={styles.rightClouds}></img>
          <div className={styles.heroContent}>
            <img src="/assets/SVG/mountains.svg" alt="twin peaks mountains" className={styles.mountains}></img>
            <div className={styles.heroText}>
              <h1>Twin Peaks
              <span style={{ display: 'block' }}>Lorem Ipsum</span>
              </h1>
              <p className={styles.visitorCount}>Population: 51,201</p>
              <p className={styles.infoText}>The text is not what it seems. Choose either paragraphs containing dialog from Twin Peaks or words associated with Twin Peaks.
            </p>
            </div>
          </div>
        </div>
        <form onSubmit={generateText}>
          <div className={styles.tabs}>
            <input
              type="radio"
              name="lorem-type"
              onChange={handleLoremToggle}
              id="paragraphs"
              value="paragraphs"
              checked={loremType === 'paragraphs'}
            />
            <label data-tab-target="#paragraphs-controls" for="paragraphs" className={styles.button}>Paragraphs</label>
            <input
              type="radio"
              name="lorem-type"
              onChange={handleLoremToggle}
              id="words"
              value="words"
              checked={loremType === 'words'}
            />
            <label data-tab-target="#words-controls" for="words" className={styles.button}>Words</label>
          </div>

          <div className="tabs-content">
            <div id="paragraphs-controls" data-tab-content className={`${styles.paragraphControls} ${styles.active}`}>
              <div className={styles.test}>
                <input
                  type="number"
                  id="number-ipsum"
                  className={styles.numberInput}
                  onChange={handleNumberInput}
                  value={numberToGenerate}
                />

                {loremType === 'paragraphs' ?
                  <div className={styles.profanityContainer}>
                    <input
                      type="checkbox"
                      id="remove-profanity"
                      className={styles.profanityToggle}
                      name="profanity-toggle"
                      onChange={handleProfanityToggle}
                    />
                    <label for="profanity-toggle">Remove Profanity</label>
                  </div>
                  :
                  <div className={styles.profanityContainer}>
                  </div>
                }
              </div>

            </div>

            <div id="words-controls" data-tab-content className="words-controls">
              <input
                type="number"
                id="number-ipsum"
                className={styles.numberInput }
                placeholder="paragraphs"
                value={numberToGenerate}
              />
            </div>
            <input
              type="submit"
              className={`${styles.generateTextButton} ${styles.button}`} id="generateIpsum"
              value="Generate Text"
            />
          </div>
        </form>
      </div>

      <section className={`${styles.outputIpsum} ${styles.container}`} id="output-ipsum">
        <button onClick={copyTextToClipboard}>
          Copy
        </button>
        <textarea ref={inputAreaRef}
          placeholder="Select Paragraphs or Words and how many to generate. Then click the Generate Text button."
          defaultValue={output}>
        </textarea>
      </section>
    </div>
  );
}

export default Home;
