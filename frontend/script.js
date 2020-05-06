const generateTextButton = document.querySelector('.generate-ipsum');
let generatedIpsum;

const getResults = async function() {
  const response = await fetch('http://localhost:5000/api/quotes/', {
    method: 'GET'
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  let sampleOutput = '';

  for (let i = 1; i < 15; i++) {
    let randomIndex = Math.floor((Math.random() * (500 - 0)) + 0);
    sampleOutput += data[randomIndex].quoteTextOnly + ' ';
  }

  console.log(sampleOutput);
}

// getResults();
const getRadioValue = () => {
  const loremRadioButtons = document.getElementsByName('lorem-type');

  for (let i = 0; loremRadioButtons.length; i++) {
    if (loremRadioButtons[i].checked) {
      return loremRadioButtons[i].value;
    }
  }
}

generateTextButton.addEventListener('click', async () => {
  const loremTypeToGenerate = getRadioValue();
  const numberToGenerate = document.getElementById('number-ipsum').value;
  const removeProfanity = document.getElementById('remove-profanity').checked;
  const outputBox = document.getElementById('output-ipsum');

  const response = await fetch(`http://localhost:5000/${loremTypeToGenerate}/${numberToGenerate}/?profanity=${removeProfanity}`);
  const data = await response.json();
  console.log(data);

  let output;

  if (loremTypeToGenerate === 'paragraphs') {
    output = generateParagraphOutput(data);
  } else if (loremTypeToGenerate === 'words') {
    output = generateWordOutput(data);
  }

  outputBox.innerText = output;
});

const generateParagraphOutput = (data) => {
  let output = '';
  for (let i = 0; i < data.length; i++) {
    output += data[i] + '\n\n';
  }
  return output;
}

const generateWordOutput = (data) => {
  return data;
}