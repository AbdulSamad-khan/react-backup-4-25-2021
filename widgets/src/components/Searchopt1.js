// // This way of calling api call inside event handler is not preffered by doing things

// import React, { useState } from "react";
// import axios from "axios";

// const Searchopt1 = () => {
//   const [term, setTerm] = useState("");
//   const [results, setResult] = useState([]);
//   const listItems = results.map((result, index) => {
//     return (
//       <div key={result.pageid} className="ui text container">
//         <h1>{result.title}</h1>
//         <p>{result.snippet}</p>
//       </div>
//     );
//   });
//   return (
//     <div className="ui container">
//       <form className="ui form">
//         <div className="field">
//           <label>Enter a Search term</label>
//           {/* controlled event handler */}
//           <input
//             type="text"
//             placeholder="First Name"
//             onChange={(e) => {
//               setTerm(e.target.value);
//               axios
//                 .get("https://en.wikipedia.org/w/api.php", {
//                   params: {
//                     action: "query",
//                     list: "search",
//                     origin: "*",
//                     format: "json",
//                     srsearch: term,
//                   },
//                 })
//                 .then((sucess) => {
//                   setResult(sucess.data.query.search);
//                 })
//                 .catch((err) => {
//                   console.log(err);
//                 });
//             }}
//             value={term}
//           />
//         </div>
//       </form>
//       {listItems}
//     </div>
//   );
// };
// export default Searchopt1;
