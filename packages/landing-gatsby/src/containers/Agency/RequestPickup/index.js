import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import Box from "common/components/Box";
import Card from "common/components/Card";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import FeatureBlock from "common/components/FeatureBlock";
import Container from "common/components/UI/Container";
import RequestPickupWrapper, { CounterUpArea } from "./requestPickup.styles";
import FormGroup from "common/components/FormGroup";

const RequestPickup = ({
  row,
  col,
  cardStyle,
  title,
  description,
  btnStyle,
}) => {
  return (
    <RequestPickupWrapper id="workHistorySection">
      <Container>
        <Box>
          <FormGroup />
        </Box>
      </Container>
    </RequestPickupWrapper>
  );
};

// WorkHistory style props
RequestPickup.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// WorkHistory default style
RequestPickup.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // WorkHistory section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center",
  },
  // Card default style
  cardStyle: {
    p: ["20px 20px", "30px 20px", "30px 20px", "53px 40px"],
    borderRadius: "10px",
    boxShadow: "0px 8px 20px 0px rgba(16, 66, 97, 0.07)",
  },
  // WorkHistory section title default style
  title: {
    fontSize: ["26px", "26px", "30px", "40px"],
    lineHeight: "1.5",
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "20px",
  },
  // WorkHistory section description default style
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "33px",
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default RequestPickup;
