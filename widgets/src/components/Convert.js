import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  let [translation, setTranslation] = useState("");
  useEffect(() => {
    const handleRequest = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslation(data.data.translations[0].translatedText);
    };
    handleRequest();
  });
  return (
    <div className="ui header">
      <h1> {translation}</h1>
    </div>
  );
};
export default Convert;
