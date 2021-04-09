import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  // Initialize the state

  const [term, setSearchTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handleRequest = async () => {
      let { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      if (term) {
        setResults(data.query.search);
      }
    };
    if (!results.length) {
      handleRequest();
    } else {
      var timeoutId = setTimeout(() => {
        handleRequest();
      }, 3000);
      // at first render it won't be called but after that it firstly this method return called clean-up
      //function
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);
  const listItems = results.map((result) => {
    return (
      <div key={result.pageid} className="ui text container">
        <h1>{result.title}</h1>
        <p>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </p>
      </div>
    );
  });
  return (
    <div className="ui container">
      <form className="ui form">
        <div className="field">
          <label>Enter a Search term</label>
          {/* controlled event handler */}
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={term}
          />
        </div>
      </form>
      {listItems}
    </div>
  );
};

export default Search;
