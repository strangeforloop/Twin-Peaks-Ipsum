'use strict';

const express = require('express');
const cors = require('cors');
const { recommend, getId, search, getParagraphs, getWords } = require('./twinpeaks');
const path = require('path');

function endpointCreation() {
  try {
    const app = express();
    app.use(cors());
    const port = process.env.PORT || 5000;

    app.use(express.static(path.join(__dirname, '/build')));

    // A dynamic endpoint for paragraphs by number of paragraphs
    app.get('/api/paragraphs/:numberOfParagraphs', (req, res) => {
      const numberOfParagraphs = req.params.numberOfParagraphs || 3;
      const profanity = req.query.profanity;

      const paragraphs = getParagraphs(numberOfParagraphs, profanity);
      console.log(paragraphs);
      res.json(paragraphs);
      console.log(`/api/paragraphs/${numberOfParagraphs} endpoint has been called!`);
    });

    app.get('/api/paragraphs', (req, res) => {
      const numberOfParagraphs = 3;
      const profanity = req.query.profanity;

      const paragraphs = getParagraphs(numberOfParagraphs);
      console.log(paragraphs);
      res.json(paragraphs);
      console.log(`/api/paragraphs endpoint has been called!`);
    });

    app.get('/api/words/:numberOfWords', (req, res) => {
      const numberOfWords = req.params.numberOfWords;

      const words = getWords(numberOfWords);
      res.json(words);
      console.log(`/api/words/${numberOfWords} endpoint has been called!`);
    });

    app.get('/api/words', (req, res) => {
      const numberOfWords = 5;

      const words = getWords(numberOfWords);
      res.json(words);
      console.log(`/api/words endpoint has been called!`);
    });

    app.get('*', (req, res) => {
      console.log('star thingy hit');
      // res.sendFile(path.join(__dirname+'/frontend/public/index.html')); // This is likely incorrect
      res.sendFile(path.join(__dirname + '/build/index.html'));
    });

    app.listen(port);

    console.log(
      `API is listening on ${port}.\n`
    );

  } catch (e) {
    console.error(e);
  }
}

endpointCreation();
