import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Imagelist from "./Imagelist";
import Todo from "./Todo";
class App extends React.Component {
  // intialize the state
  state = { images: [] };
  onSearchSubmit(term) {
    // console.log(term);
    // console.log(this);
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID QrvCHMYPV7Ns0rhCx4NTqDQcwrg1HI1fZC9dGprzxDk",
        },
      })
      .then((response) => {
        this.setState({ images: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
        <Imagelist image={this.state.images} />
        <Todo />
      </div>
    );
  }
}

export default App;
