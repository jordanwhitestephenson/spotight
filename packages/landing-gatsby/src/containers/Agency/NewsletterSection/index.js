import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Input from "common/components/Input";
import { useFormik } from "formik";
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
import * as sgMail from '@sendgrid/mail';


// admin.initializeApp();

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  address: yup.string("Enter your address").required("Address is required"),
});

const NewsletterSection = ({ sectionHeader, btnStyle, title, description }) => {

  console.log(process.env.GATSBY_API_URL, '***', process.env.GATSBY_API_SENDGRID, process.env.YAE, process.env.GATBSY_YAE)

  const [datePicked, setDate] = useState(new Date());
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      name: "Tire Customer",
      address: "000 Pick My Tires Up Drive",
      state: "OK",
      zipcode: 66083,
      tires: 100,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(response, '???')
      // admin.firestore().collection('mail').add({
      //   to: 'someone@example.com',
      //   message: {
      //     subject: 'Hello from Firebase!',
      //     html: 'This is an <code>HTML</code> email body.',
      //   },
      // })
      // sgMail
      //   .send(msg)
      //   .then((res) => {
      //     console.log("Email sent", res);
      //   })
      //   .catch((error) => {
      //     console.error(error, "error?");
      //   });
    },
  });
  return (
    <NewsletterSectionWrapper id="newsletterSection">
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
                  helperText={formik.touched.email && formik.errors.email}
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
                  error={formik.touched.password && Boolean(formik.errors.name)}
                  helperText={formik.touched.password && formik.errors.name}
                />

                <TextField
                  fullWidth
                  id="tireNumber"
                  name="tires"
                  label="Number of Tires to be Collected"
                  type="number"
                  style={{ marginBottom: "15px" }}
                  value={formik.values.tires}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.tireNumber &&
                    Boolean(formik.errors.tireNumber)
                  }
                  helperText={
                    formik.touched.tireNumber && formik.errors.tireNumber
                  }
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
                  helperText={formik.touched.address && formik.errors.address}
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
                  helperText={formik.touched.state && formik.errors.state}
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
                  <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
                    <MobileDatePicker
                      label="Approximate Date"
                      value={datePicked}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField label="Approximate Date" {...params} />
                      )}
                    />
                  </LocalizationProvider>

                  <Button
                    type="submit"
                    title="Send Tire Collection Request"
                    {...btnStyle}
                  />
                </Stack>
              </form>
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
