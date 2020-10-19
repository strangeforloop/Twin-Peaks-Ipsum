'use strict';

const express = require('express');
const cors = require('cors');
const { recommend, getId, search, getParagraphs, getWords } = require('./twinpeaks');

function endpointCreation() {
  try {
    const app = express();
    app.use(cors());
    const port = process.env.PORT || 5000;

    // // providing endpoint for **random** quotes
    // app.get('/api/1/quotes/recommend', (req, res) => {
    //     const recommendedResult = recommend(req.query.profanity, req.query.relevance);
    //   recommendedResult[0] ? res.json(recommendedResult) : res.status(404).json({ error: 'no such id!' }); // this condition won't be applied, error handling happens in randomizer()
    //   console.log(
    //     `/api/1/quotes/recommend?profanity=${req.query.profanity ? req.query.profanity : 'true,false'}&relevance=${
    //       req.query.relevance ? req.query.relevance : '1,2,3'
    //     } endpoint has been called!`
    //   );
    // })

    // // providing a dynamic endpoint for quotes by ID
    // app.get('/api/1/quotes/:id', (req, res) => {
    //   const id = req.params.id;
    //   const idResult = getId(id);
    //   // console.log('id ', id);
    //   // console.log('idResult', idResult);
    //   idResult[0] ? res.json(idResult) : res.status(404).json({ error: 'no such id!' });
    //   console.log(`/api/1/quotes/${id} endpoint has been called!`);
    // })

    // // providing a dynamic endpoint for searches
    // app.get('/api/quotes', (req, res) => {
    //   const query = req.query.q;
    //   const personResult = search(query);
    //   res.json(personResult);
    //   console.log(`/api/1/quotes?q=${query} endpoint has been called!`);
    // })

    // A dynamic endpoint for paragraphs by number of paragraphs
    app.get('/paragraphs/:numberOfParagraphs', (req, res) => {
      // If they specify a number of paragraphs, give them that,
      // If they don't give them the default of 2 paragraphs.
      // THIS IS BROKEN! Default is actually giving 3, but it says it gives 2.
      const numberOfParagraphs = req.params.numberOfParagraphs || 2;
      const profanity = req.query.profanity;

      const paragraphs = getParagraphs(numberOfParagraphs, profanity);
      console.log(paragraphs);
      res.json(paragraphs);
      console.log(`/paragraphs/${numberOfParagraphs} endpoint has been called!`);
    });

    app.get('/words/:numberOfWords', (req, res) => {
      const numberOfWords = req.params.numberOfWords;
      // There is currently no profanity box for words
      const profanity = req.query.profanity;

      const words = getWords(numberOfWords, profanity);
      res.json(words);
      console.log(`/words/${numberOfWords} endpoint has been called!`);
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
