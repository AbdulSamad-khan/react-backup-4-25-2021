import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";
class StreamCreate extends React.Component {
  renderError(meta) {
    if (meta.touched && meta.error) return <div>{meta.error}</div>;
  }
  renderInput = (formProps) => {
    console.log(formProps);
    return (
      <div className="Field">
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        {this.renderError(formProps.meta)}
      </div>
    );
  };
  // callback that would be invoked anytime user submits the form and receive the form valus
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    console.log(this.props);
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button>Submit </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  console.log(formValues);
  let error = {};
  if (!formValues.title) {
    error.title = "you must enter valid title";
  }

  if (!formValues.description) {
    error.description = "you must enter valid description";
  }
  return error;
};

// reduxForm contains exact same functionality as connect component
const config = reduxForm({
  form: "streamCreateForm",
  validate: validate,
})(StreamCreate);

export default connect(null, {
  createStream: createStream,
})(config);
