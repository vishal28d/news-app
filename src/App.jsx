import './App.css';
import React, { useEffect, useState } from 'react';
import Nav from './navbar';

function App() {
  const [value, setValue] = useState([]);
  const [topic] = useState('india');
  

  function date (){
    // Get the current date
const currentDate = new Date();

// Extract individual components of the date
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Note: Month is 0-indexed, so we add 1
const day = currentDate.getDate();

// Format the date as a string
const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

// console.log(formattedDate); // Output: "YYYY-MM-DD" format of current date

  }

 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=india&from=${date()}&sortBy=publishedAt&apiKey=59cf5131091d478aa74796ffe3ef19f1`
      );
      const result = await response.json();
      console.log(result);

      if (result.articles) {
        const mappedArticles = result.articles
          .filter((a) => a.urlToImage !== null)
          .map((a) => (
      
            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={Math.random()}>
              <img className="w-full" src={a.urlToImage} alt="img" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{a.title}</div>
                <p className="text-gray-700 text-base">{a.description}</p>
              </div>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <a href={a.url}>Read more..</a>
              </button>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{topic}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #news
                </span>
              </div>
            </div>
          ));

        setValue(mappedArticles);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {value}
      </div>
    </div>
  );
}

export default App;
