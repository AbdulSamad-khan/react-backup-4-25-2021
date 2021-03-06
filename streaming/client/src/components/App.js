import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StreamList from "./Stream/StreamList";
import StreamCreate from "./Stream/StreamCreate";
import StreamEdit from "./Stream/StreamEdit";
import StreamDelete from "./Stream/StreamDelete";
import StreamShow from "./Stream/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};
export default App;
