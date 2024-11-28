import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { submitOrder } from "../redux/cartSlice";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .matches(/^[a-zA-Z]+$/, "First name can only contain letters")
      .min(2, "Min length is 2 characters")
      .max(20, "Max length is 20 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[a-zA-Z]+$/, "Last name can only contain letters")
      .min(2, "Min length is 2 characters")
      .max(20, "Max length is 20 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    address: Yup.string()
      .required("Address is required")
      .min(5, "Address must be at least 5 characters long"),
  });

  const handleSubmit = (values) => {
    console.log("Form Data", values);

    dispatch(submitOrder());
    navigate("/success"); // Перенаправлення без затримки
  };

  return (
    <div className="checkout-page">
      <div className="form-container">
        <h2 className="form-title">Checkout</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="form-group">
                <div className="form-item">
                  <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" type="text" />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="lastName">Last Name</label>
                  <Field name="lastName" type="text" />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-item">
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="phone">Phone</label>
                  <Field name="phone" type="text" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
              <div className="form-group single-item">
                <label htmlFor="address">Address</label>
                <Field name="address" type="text" />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-buttons">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="back-button"
                >
                  Go Back
                </button>
                <button type="submit" className="btn-continue">
                  Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CheckoutPage;
