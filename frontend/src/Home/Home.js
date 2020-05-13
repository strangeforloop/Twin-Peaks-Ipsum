import React, { useState } from 'react';
import styles from './home.module.css';
import { setPriority } from 'os';

const Home = () => {
  const [numberToGenerate, setNumberToGenerate] = useState(3);
  const [loremType, setLoremType] = useState('paragraphs');
  const [removeProfanity, setRemoveProfanity] = useState(false);
  const [output, setOutput] = useState('');

  // const generateTextButton = document.querySelector('#generateIpsum');
  // const tabs = document.querySelectorAll('[data-tab-target]');
  // const tabContents = document.querySelectorAll('[data-tab-content]');

  // // check if this works
  // tabs.forEach(tab => {
  //   tab.addEventListener('click', () => {
  //     const target = document.querySelector(tab.dataset.tabTarget);
  //     tabContents.forEach(tabContent => {
  //       tabContent.classList.remove('active');
  //     });
  //     target.classList.add('active');
  //   });
  // });

  // const getRadioValue = () => {
  //   const loremRadioButtons = document.getElementsByName('lorem-type');

  //   console.log(loremRadioButtons);
  //   for (let i = 0; loremRadioButtons.length; i++) {
  //     if (loremRadioButtons[i].checked) {
  //       return loremRadioButtons[i].value;
  //     }
  //   }
  // }

  // generateTextButton.addEventListener('click', async () => {
  //   const loremTypeToGenerate = getRadioValue();
  //   const numberToGenerate = document.getElementById('number-ipsum').value;
  //   // move this into just the call for paragraphs
  //   const removeProfanity = document.getElementById('remove-profanity').checked;
  //   // const startWithLatin = document.getElementById('include-latin').checked;
  //   const outputBox = document.getElementById('output-ipsum');

  //   const response = await fetch(`http://localhost:5000/${loremTypeToGenerate}/${numberToGenerate}/?profanity=${removeProfanity}`);
  //   const data = await response.json();
  //   console.log(data);

  //   let output = '';

  //   // if (startWithLatin) {
  //   //   output += "Twin peaks ipsum dolor sit amet ";
  //   // }

  //   if (loremTypeToGenerate === 'paragraphs') {
  //     output += generateParagraphOutput(data);
  //   } else if (loremTypeToGenerate === 'words') {
  //     output += generateWordOutput(data);
  //   }

  //   outputBox.innerText = output;
  // });

  const generateParagraphOutput = (data) => {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      output += data[i] + '\n\n';
    }
    console.log(output);
    setOutput(output);
  }

  const generateWordOutput = (data) => {
    return data;
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

  const generateText =  async (e) => {
    e.preventDefault();
    console.log('hi');
    console.log(loremType);
    console.log(removeProfanity);
    console.log(numberToGenerate);
    const response = await fetch(`http://localhost:5000/${loremType}/${numberToGenerate}/?profanity=${removeProfanity}`);
    const data = await response.json();
    console.log(data);
    generateParagraphOutput(data);
  }

  return (
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
            <p className={styles.visitorCount}>Vistors: 51,201</p>
            <p>The text is not what it seems...
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
            checked="checked" 
          />
          <label data-tab-target="#paragraphs-controls" for="paragraphs" className={styles.button}>Paragraphs</label>
          <input 
            type="radio" 
            name="lorem-type" 
            onChange={handleLoremToggle}
            id="words"
            value="words" 
          />
          <label data-tab-target="#words-controls" for="words" className={styles.button}>Words</label>
        </div>

        <div className="tabs-content">
          <div id="paragraphs-controls" data-tab-content className={`${styles.paragraphControls} ${styles.active}`}>
            <input 
              type="number" 
              id="number-ipsum" 
              className={styles.numberInput}
              onChange={handleNumberInput} 
              value={numberToGenerate} 
            />

            {loremType === 'paragraphs' && <div className={styles.profanityContainer}>
              <input
                type="checkbox"
                id="remove-profanity"
                className={styles.profanityToggle}
                name="profanity-toggle"
                onChange={handleProfanityToggle}
              />
              <label for="profanity-toggle">Remove Profanity</label>
            </div> }
            
          </div>

          <div id="words-controls" data-tab-content className="words-controls">
            <input 
              type="number" 
              id="number-ipsum" 
              className={styles.textInput} 
              placeholder="paragraphs" 
              value="3" 
            />
          </div>
          <input 
            type="submit"
            className={`${styles.generateText} ${styles.button}`} id="generateIpsum"
            value="Generate Text"
          />
        </div>
      </form>
      <section className={styles.outputIpsum} id="output-ipsum">
        <p>{output}</p>
      </section>
    </div>
  );
}

{/* <div className="latin-container">
  <input type="checkbox" id="include-latin" name="include-latin-toggle" />
  <label for="include-latin-toggle" className="left">Start with "Twin Peaks ipsum dolor sit amet"</label>
</div> */}

export default Home;