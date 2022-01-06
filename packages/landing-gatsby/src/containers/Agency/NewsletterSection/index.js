import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { useFormik, Formik, Form, Field } from "formik";
import Button from "common/components/Button";
import Stack from "@mui/material/Stack";
import Container from "common/components/UI/Container";
import FeatureBlock from "common/components/FeatureBlock";
import Text from "common/components/Text";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

import NewsletterSectionWrapper, {
  NewsletterForm,
} from "./newsletterSection.style";

import * as yup from "yup";
import * as sgMail from "@sendgrid/mail";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const NewsletterSection = ({ sectionHeader, btnStyle, title, description }) => {
  const [datePicked, setDate] = useState(new Date());
  const [formSuccess, setFormSuccess] = useState(false);
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    tireNumber: yup
      .number("How many tires are needed to be picked up>")
      .required("Tire count is required"),
    name: yup.string("Enter your name").required("Name is required"),
    state: yup.string("Enter state").required("State is required"),
    zipcode: yup.number("Enter state").required("zipcode is required"),
    date: yup.date("Date needed").default(() => new Date()),
    phone: yup
      .number("Enter your contact information")
      .required(
        "Contact number is required - we won't get on a spam list we promise!"
      ),
    address: yup.string("Enter your address").required("Address is required"),
  });
  const formik = useFormik({
    initialValues: {
      // email: "foobar@example.com",
      // name: "Tire Customer",
      // address: "000 Pick My Tires Up Drive",
      // state: "OK",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      const FormData = {
        ...values,
        dateRequested: datePicked,
      };

      axios
        .post("https://formspree.io/f/mnqwnldd", FormData)
        .then(function (response) {
          console.log(response);
          actions.resetForm();
          setFormSuccess(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });
  return (
    <NewsletterSectionWrapper id="requestTire">
      <Container>
        <Box {...sectionHeader}>
          <FeatureBlock
            title={<Heading content="Request Tire Collection" {...title} />}
            description={
              <Text
                content="Regardless of your company's size or location, Spotlight Collections can create a custom scrap tire collection program that meets your needs and helps protect the environment."
                {...description}
              />
            }
          />
        </Box>
        <Box>
          <NewsletterForm style={{ display: "flex", flexDirection: "column" }}>
            <Container>
              {!formSuccess ? (
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    fullWidth
                    style={{ marginBottom: "15px" }}
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.errors.email}
                  />
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Business/Customer Name"
                    type="text"
                    style={{ marginBottom: "15px" }}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.errors.name}
                  />

                  <TextField
                    fullWidth
                    id="tireNumber"
                    name="tireNumber"
                    label="Number of Tires to be Collected"
                    type="number"
                    style={{ marginBottom: "15px" }}
                    value={formik.values.tires}
                    onChange={formik.handleChange}
                    helperText={formik.errors.tireNumber}
                  />

                  <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Contact Phone Number"
                    type="phone"
                    style={{ marginBottom: "15px" }}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.errors.phone}
                  />
                  <TextField
                    fullWidth
                    id="address"
                    name="address"
                    label="Street Address"
                    type="addresss"
                    style={{ marginBottom: "15px" }}
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.errors.address}
                  />
                  <TextField
                    fullWidth
                    id="zipcode"
                    name="zipcode"
                    label="zipcode"
                    type="zipcode"
                    style={{ marginBottom: "15px" }}
                    value={formik.values.zipcode}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.zipcode && Boolean(formik.errors.zipcode)
                    }
                    helperText={formik.errors.zipcode}
                  />

                  <Select
                    labelText="State"
                    fullWidth
                    id="state"
                    name="state"
                    label="state"
                    type="state"
                    style={{ marginBottom: "15px" }}
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.errors.state}
                  >
                    <MenuItem value="AL">Alabama</MenuItem>
                    <MenuItem value="AK">Alaska</MenuItem>
                    <MenuItem value="AZ">Arizona</MenuItem>
                    <MenuItem value="AR">Arkansas</MenuItem>
                    <MenuItem value="CA">California</MenuItem>
                    <MenuItem value="CO">Colorado</MenuItem>
                    <MenuItem value="CT">Connecticut</MenuItem>
                    <MenuItem value="DE">Delaware</MenuItem>
                    <MenuItem value="DC">District Of Columbia</MenuItem>
                    <MenuItem value="FL">Florida</MenuItem>
                    <MenuItem value="GA">Georgia</MenuItem>
                    <MenuItem value="HI">Hawaii</MenuItem>
                    <MenuItem value="ID">Idaho</MenuItem>
                    <MenuItem value="IL">Illinois</MenuItem>
                    <MenuItem value="IN">Indiana</MenuItem>
                    <MenuItem value="IA">Iowa</MenuItem>
                    <MenuItem value="KS">Kansas</MenuItem>
                    <MenuItem value="KY">Kentucky</MenuItem>
                    <MenuItem value="LA">Louisiana</MenuItem>
                    <MenuItem value="ME">Maine</MenuItem>
                    <MenuItem value="MD">Maryland</MenuItem>
                    <MenuItem value="MA">Massachusetts</MenuItem>
                    <MenuItem value="MI">Michigan</MenuItem>
                    <MenuItem value="MN">Minnesota</MenuItem>
                    <MenuItem value="MS">Mississippi</MenuItem>
                    <MenuItem value="MO">Missouri</MenuItem>
                    <MenuItem value="MT">Montana</MenuItem>
                    <MenuItem value="NE">Nebraska</MenuItem>
                    <MenuItem value="NV">Nevada</MenuItem>
                    <MenuItem value="NH">New Hampshire</MenuItem>
                    <MenuItem value="NJ">New Jersey</MenuItem>
                    <MenuItem value="NM">New Mexico</MenuItem>
                    <MenuItem value="NY">New York</MenuItem>
                    <MenuItem value="NC">North Carolina</MenuItem>
                    <MenuItem value="ND">North Dakota</MenuItem>
                    <MenuItem value="OH">Ohio</MenuItem>
                    <MenuItem value="OK">Oklahoma</MenuItem>
                    <MenuItem value="OR">Oregon</MenuItem>
                    <MenuItem value="PA">Pennsylvania</MenuItem>
                    <MenuItem value="RI">Rhode Island</MenuItem>
                    <MenuItem value="SC">South Carolina</MenuItem>
                    <MenuItem value="SD">South Dakota</MenuItem>
                    <MenuItem value="TN">Tennessee</MenuItem>
                    <MenuItem value="TX">Texas</MenuItem>
                    <MenuItem value="UT">Utah</MenuItem>
                    <MenuItem value="VT">Vermont</MenuItem>
                    <MenuItem value="VA">Virginia</MenuItem>
                    <MenuItem value="WA">Washington</MenuItem>
                    <MenuItem value="WV">West Virginia</MenuItem>
                    <MenuItem value="WI">Wisconsin</MenuItem>
                    <MenuItem value="WY">Wyoming</MenuItem>
                  </Select>
                  <Stack spacing={3}>
                    <LocalizationProvider
                      dateAdapter={AdapterDateFns}
                      fullWidth
                    >
                      <MobileDatePicker
                        label="Approximate Date"
                        value={datePicked}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            label="Approximate Date"
                            {...params}
                            name="date"
                            error={
                              formik.touched.date && Boolean(formik.errors.date)
                            }
                            helperText={formik.errors.date}
                          />
                        )}
                      />
                    </LocalizationProvider>
                    <TextField
                      name="notes"
                      value={formik.values.notes}
                      onChange={formik.handleChange}
                      label="Comments"
                      multiline
                      rows={2}
                      maxRows={4}
                    />

                    <Button
                      type="submit"
                      title="Send Tire Collection Request"
                      {...btnStyle}
                    />
                  </Stack>
                </form>
              ) : (
                <Alert severity="success">
                  A Spotlight Representative will be in contact with you
                  shortly.
                </Alert>
              )}
            </Container>
          </NewsletterForm>
        </Box>
      </Container>
    </NewsletterSectionWrapper>
  );
};

// NewsletterSection style props
NewsletterSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

// NewsletterSection default style
NewsletterSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: "56px",
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
  },
  // button default style
  btnStyle: {
    minWidth: "152px",
    minHeight: "45px",
    fontSize: "14px",
    fontWeight: "500",
  },
  // Quality section title default style
  title: {
    fontSize: ["26px", "26px", "32px", "40px"],
    lineHeight: "1.5",
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "20px",
    textAlign: "center",
  },
  // Quality section description default style
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "2.1",
    mb: "33px",
    maxWidth: "820px",
    margin: "auto",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
};

export default NewsletterSection;
