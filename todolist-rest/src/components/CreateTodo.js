import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class CreateTodo extends Component {
  renderInput({ input, label, meta }) {
    // console.log(formValues);
    // console.log(input);
    return (
      <div>
        <label>{label}</label>
        <br />
        <input {...input} autoComplete="off" />
        <p style={{ color: "red" }}>{meta.touched ? meta.error : ""}</p>
      </div>
    );
  }
  onSubmit = (formValues) => {
    console.log(formValues);
  };
  render() {
    // field components

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="todo"
          component={this.renderInput}
          label="Enter your Task"
        ></Field>
        <button>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.todo) {
    error.todo = "Enter your Task";
  }
  return error;
};

export default reduxForm({
  // by wiring up the redux-form to the components we get tons of special props
  form: "createTodo",
  validate: validate,
})(CreateTodo);
