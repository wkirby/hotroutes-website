import React from "react";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Formik } from "formik";

const validate = values => {
  let errors = {};

  if (!values.EMAIL) {
    errors.EMAIL = "An email address is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.EMAIL)) {
    errors.EMAIL = "Invalid email address";
  }

  return errors;
};

const SignupForm = ({ status, message, onSubmit, ...props }) => {
  const sending = status === "sending";
  const error = status === "error";
  const success = status === "success";

  let alertColor = "warning";

  if (error) {
    alertColor = "danger";
  } else if (success) {
    alertColor = "success";
  }

  return (
    <>
      {message && (
        <Alert color={alertColor}>
          <div dangerouslySetInnerHTML={{ __html: message }} />
        </Alert>
      )}

      <Formik
        initialValues={{ EMAIL: "" }}
        onSubmit={(values, _a) => onSubmit(values)}
        validate={validate}
        render={props => (
          <Form onSubmit={props.handleSubmit}>
            <FormGroup>
              <Label className="sr-only" htmlFor="EMAIL">
                Email Address
              </Label>
              <Input
                id="EMAIL"
                placeholder="joe@example.com"
                type="email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.EMAIL}
                name="EMAIL"
              />
              {props.errors.EMAIL && (
                <FormText color="danger">{props.errors.EMAIL}</FormText>
              )}
            </FormGroup>
            <FormGroup>
              <Button disabled={sending} color="primary" block type="submit" className="mb-2">
                {sending ? "Submitting..." : "Subscribe"}
              </Button>
              <FormText className="text-center">
                We will never sell your email. We hate that.
              </FormText>
            </FormGroup>
          </Form>
        )}
      />
    </>
  );
};

export const MailChimpForm = ({ url, ...props }) => {
  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <SignupForm
            status={status}
            message={message}
            onSubmit={async formData => await subscribe(formData)}
          />
        )}
      />
    </div>
  );
};
