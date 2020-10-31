'use strict';

const twinpeaks = require('./twinpeaksQuotes.json');
const twinpeaksWords = require('./twinpeaksWords.json');

// random number from the available IDs
const randomizer = quotesArray => {
  const quotesLength = twinpeaks.quotes.length;

  const randomizeNumberBetweenZeroAnd = max => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const availableIdChecker = quotesArray => {
    const availableIds = quotesArray.map(el => el.id);
    return availableIds;
  }

  const availableIds = availableIdChecker(quotesArray);
  let randomInteger = randomizeNumberBetweenZeroAnd(quotesLength);

  while (!availableIds.includes(randomInteger)) {
    randomInteger = randomizeNumberBetweenZeroAnd(quotesLength);
  }

  return randomInteger;
}

/*
 * @param {string [and NOT boolean!]} profanity: (optional) filter criteria (true|false|true,false)
 * @param {string} relevance: (optional) filter criteria (1|2|3|1,2|2,3|1,3|1,2,3)
 * @return {object} recommendedResult: a random recommendation matches the two filter criteria
 */

const recommend = (profanity, relevance) => {
  const twinpeaksQuotesArray = twinpeaks.quotes;
  const profValue = profanity && profanity.match(/^(true|false)$/) ? profanity : 'true,false';
  const relValue = relevance && relevance.match(/^(1|2|3|1,2|2,3|1,3|1,2,3)$/) ? relevance : '1,2,3';

  const queriedArray = twinpeaksQuotesArray.filter(quote => {
    const profanityRegex = RegExp(quote.profanity, 'g');
    const relevanceRegex = RegExp(quote.relevance, 'g');
    if (profValue.match(profanityRegex) && relValue.match(relevanceRegex)) return quote;
  })

  const randomId = randomizer(queriedArray)
  const recommendedResult = queriedArray.filter(quote => {
    if (quote.id == randomId) return quote;
  })
  return recommendedResult;
}

// get quote by its ID
const getId = id => {
  const idResult = twinpeaks.quotes.filter(quote => {
    if (quote.id == id) return quote;
  })
  return idResult;
}

// searches based on string query
const search = query => {
  const queryRegex = RegExp(query, 'gi');
  const personResult = twinpeaks.quotes.filter(quote => {
    if (queryRegex.test(quote.quoteText)) return quote;
  })
  return personResult;
}

const getWords = (numberOfWords) => {
  let wordsNeeded = numberOfWords;
  let wordsArray = [];

  while (wordsNeeded > 0) {
    let randomIndex = Math.floor(Math.random() * twinpeaksWords.length);

    const wordsEntry = twinpeaksWords[randomIndex];
    const currentNumberOfWords = wordsEntry.wordCount;

    if (currentNumberOfWords <= wordsNeeded) {
      wordsNeeded-= currentNumberOfWords;
      wordsArray.push(wordsEntry.content);
    }
  }

  return wordsArray;
}

const getParagraphs = (numberOfParagraphs, profanity = false) => {
  let paragraphArray = [];

  for (let i = 0; i < numberOfParagraphs; i++) {
    let paragraph = '';
    const numOfSentences = Math.floor((Math.random() * (14 - 8)) + 8);;
    for (let i = 0; i < numOfSentences; i++) {
      paragraph += getSentence(profanity) + ' ';
    }
    paragraphArray.push(paragraph);
  }

  return paragraphArray;
}

const getSentence = (profanity) => {
  const twinpeaksQuotesArray = twinpeaks.quotes;
  let randomIndex = Math.floor((Math.random() * (twinpeaksQuotesArray.length - 0)) + 0);
  let quote = twinpeaks.quotes[randomIndex];

  if (!profanity) {
    while (quote.profanity) {
      randomIndex = Math.floor((Math.random() * (twinpeaksQuotesArray.length - 0)) + 0);
      quote = twinpeaks.quotes[randomIndex];
    }
  }

  const sentence = quote.quoteTextOnly;
  return sentence;
}

module.exports = { recommend, getId, search, getParagraphs, getWords }
