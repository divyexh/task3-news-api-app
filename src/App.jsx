import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY; 
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(NEWS_URL)
      .then((response) => {
        setArticles(response.data.articles);
        setError('');
      })
      .catch((error) => {
        console.error(error);
        setError(' Failed to load news. Please check your API key or try again later.');
      });
  }, []);

  return (
    <div className="container">
      <h1> Top News Headlines</h1>
      {error && <p className="error">{error}</p>}
      <div className="grid">
        {articles.map((article, index) => (
          <div className="card" key={index}>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} />
            )}
            <h2>{article.title}</h2>
            <p>{article.description || 'No description available.'}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more 
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
