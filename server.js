/*
MIT License

Copyright (c) 2019 David Barton (theDavidBarton)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

'use strict'

const express = require('express')
const twinpeaks = require('./twinpeaksQuotes.json')

function endpointCreation() {
  try {
    const app = express()
    const port = process.env.PORT || 5000
    const quotesLength = twinpeaks.quotes.length
    const availableIds = twinpeaks.quotes.map(el => el.id)

    // random number from the available IDs
    const randomizer = () => {
      const randomizeNumberBetweenZeroAnd = max => {
        return Math.floor(Math.random() * Math.floor(max))
      }
      let randomInteger = randomizeNumberBetweenZeroAnd(quotesLength)
      if (!availableIds.includes(randomInteger)) {
        randomInteger = randomizeNumberBetweenZeroAnd(quotesLength)
      }
      return randomInteger
    }

    // providing endpoint for **random** quotes
    app.get('/api/quotes/recommend', (req, res) => {
      const randomId = randomizer()
      const recommendedResult = twinpeaks.quotes.filter(quote => {
        if (quote.id == randomId) return quote
      })
      recommendedResult[0] ? res.json(recommendedResult) : res.json({ error: 'no such id!' }) // this condition won't be applied, error handling happens in randomizer()
      console.log(`/api/quotes/recommend endpoint has been called! ${randomId}`)
    })

    // providing a dynamic endpoint for quotes by ID
    app.get('/api/quotes/:id', (req, res) => {
      const id = req.params.id
      const idResult = twinpeaks.quotes.filter(quote => {
        if (quote.id == id) return quote
      })
      idResult[0] ? res.json(idResult) : res.json({ error: 'no such id!' })
      console.log(`/api/quotes/${id} endpoint has been called!`)
    })

    // providing a dynamic endpoint for searches
    app.get('/api/quotes', (req, res) => {
      const query = req.query.q
      const queryRegex = RegExp(query, 'gi')
      const personResult = twinpeaks.quotes.filter(quote => {
        if (queryRegex.test(quote.quoteText)) return quote
      })
      res.json(personResult)
      console.log(`/api/quotes?q=${query} endpoint has been called!`)
    })

    app.listen(port)

    console.log(
      `API is listening on ${port}\nEndpoint is ready at: localhost:${port}/api/quotes/ \nCheck documentation at: https://github.com/theDavidBarton/twin-peaks-api`
    )
  } catch (e) {
    console.error(e)
  }
}
endpointCreation()
