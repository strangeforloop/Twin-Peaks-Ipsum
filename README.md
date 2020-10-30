This project can be viewed at http://www.twinpeaksipsum.com/.

Twin Peak Ipsum is a lorem ipsum alternative that allows fans of the TV show to generate the desired amount of copy text for their projects.

This project has a public-facing API and a corresponding front end website. Puppeteer was used for scraping the web for the show dialog used in this project. The illustration and design was created by me in Adobe Illustrator.

# Table of Contents
1. [Installation](#installation)
2. [HTTP API Examples](#http-api-examples)
3. [Technologies Used](#technologies-used)

## Installation
To run a local copy, run the following commands: 
```
npm install
npm start
```
The project can then be viewed on localhost:5000.

## HTTP API Examples
An API is available which will provide a string of either words or paragraphs.

Usage example: To generate the 2 paragraphs, make a request at https://twinpeaksloremipsum.com/api/paragraphs/2.

## Technologies Used
* React
* Express
* Node
* [Puppeteer] (https://github.com/puppeteer/puppeteer)
* Adobe Illustrator
