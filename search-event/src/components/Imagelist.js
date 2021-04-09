import React from "react";

class Imagelist extends React.Component {
  // map the list
  //   const imageList = props.image.map(({ id, urls, description }) => {
  //     return <img alt={description} key={id} src={urls.regular} />;
  //   });

  //   return <div> {imageList}</div>;
  listOfimages() {
    // helper function
    return this.props.image.map(({ id, urls, description }) => {
      return <img alt={description} key={id} src={urls.regular} />;
    });
  }
  render() {
    return <div> {this.listOfimages()}</div>;
  }
}
export default Imagelist;
