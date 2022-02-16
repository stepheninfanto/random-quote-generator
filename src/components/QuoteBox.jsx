import react, { useEffect, useState } from "react";
import React from 'react'


function QuoteBox() {

  const [quoteData,setQuoteData]= useState([]);
  const [currentQuote,setCurrentQuote]= useState("");
  const [currentAuthor,setCurrentAuthor]= useState("");

  const getQuotes=()=>{
      fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then(res=>res.json())
      .then((data)=>{
                console.log(data.quotes);
          let randomNo = Math.floor(Math.random()*data.quotes.length);
          setQuoteData(data.quotes);
          setCurrentQuote(data.quotes[randomNo].quote);
          setCurrentAuthor(data.quotes[randomNo].author);
      })
    }
  

  useEffect(()=>{
      getQuotes();
  },[])

  const getRandomQuote=()=>{
    const randomNum =  Math.floor(Math.random()*quoteData.length);
    setCurrentQuote(quoteData[randomNum].quote);
    setCurrentAuthor(quoteData[randomNum].author);
  }
  return (
    <div>
      <div id="wrapper">
      <div id="quote-box">
      <div id="text">{currentQuote} </div>
      <div id="author">{currentAuthor} </div>
      <div className="Buttons">
        <div className="socials">
          <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+{currentQuote}+'&'+{currentAuthor}} target="_blank" id="tweet-quote">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </span>
          </a> 
      </div>
      <button className="button" onClick={()=>getRandomQuote()}id="new-quote">New quote</button>
        
      </div>

        </div>
      </div>
    </div>
  )
}

export default QuoteBox