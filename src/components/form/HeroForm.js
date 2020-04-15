import React, { Component } from "react";
import "../form/form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "reactstrap";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import Axios from "axios";
import Bg from "../form/bg.jpg";

class HeroForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          fullName: "",
          born: "",
          died: "",
          description: "",
          establishtment: "",
          imgURL: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.fullName) {
            errors.fullName = <small>Please input your name!</small>;
            return errors;
          }
        }}
        onSubmit={(values, actions) => {
          Axios.post("http://localhost:8000/Heroes", {
            values,
          }).then((res) => {
            alert("Success!");
            actions.setSubmitting(false);
            actions.resetForm();
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="container">
              <Card inverse>
                <CardImg width="100vh" src={Bg} alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle>
                    <h2>Input Your Hero!</h2>
                  </CardTitle>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Fullname"
                      className="form-control"
                    />
                  </div>
                  <ErrorMessage name="fullName" />

                  <div className="form-group">
                    <Field
                      type="text"
                      name="born"
                      placeholder="Born"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="died"
                      placeholder="Died"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="description"
                      placeholder="Description"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="imgURL"
                      placeholder="Image URL"
                      className="form-control"
                    />
                  </div>
                  <Button color="primary" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </CardImgOverlay>
              </Card>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}
export default HeroForm;
