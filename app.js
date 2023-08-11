// Variables
// https://www.youtube.com/watch?v=5fb2aPlgoys&t=3597s&ab_channel=freeCodeCamp.org

import quotes from './quotes.json' assert { type: 'json' };

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document. querySelector('.author');

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})