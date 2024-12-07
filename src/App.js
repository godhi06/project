import React, { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "BCQNHFe0XFuPcXW8BJKpjWpQZverzolL"; // Ganti dengan API key Anda

  const fetchArticles = async (searchQuery = "") => {
    setLoading(true);
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${API_KEY}`;
    console.log("Fetching articles with query:", searchQuery);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      console.log("API Response:", data);

      if (!data.response.docs || data.response.docs.length === 0) {
        console.log("No articles found for query:", searchQuery);
        setArticles([]);
      } else {
        setArticles(data.response.docs);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(); // Load artikel default saat aplikasi pertama kali dimuat
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      alert("Please enter a search term.");
      return;
    }
    fetchArticles(trimmedQuery);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The New York Times Article Search</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Search
        </button>
      </form>
      {loading ? <p>Loading...</p> : <ArticleList articles={articles} />}
    </div>
  );
}

export default App;
