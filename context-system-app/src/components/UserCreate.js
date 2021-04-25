import React from "react";
import Button from "./Button";
import Field from "./Field";
import LanguageContext from "../context/LanguageContext";

const UserCreate = () => {
  return (
    <div>
      <LanguageContext.Consumer>
        {(language) => console.log(language)}
      </LanguageContext.Consumer>
      <Field />
      <Button />
    </div>
  );
};

export default UserCreate;
