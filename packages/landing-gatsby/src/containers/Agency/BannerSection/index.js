import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import Particles from '../../Agency/Particle';
import BannerWrapper, { DiscountLabel } from './bannerSection.style';
import MobileBanner from 'common/assets/image/agency/2-men-using-tablet-stood-infront-of-shovel-loader-SMALL.jpeg';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Button title="Request Tire Collection" {...btnStyle} />
    </Fragment>
  );
  return (
    <BannerWrapper className= "mobileBannerWrapper">
      <Particles />
      <Container >
        <Box className="row" {...row}>
          <Box className="col" {...col}>
          
            <FeatureBlock
            id = "AboutUsSection"
              title={
                <Heading
                className="mobileHeadline"
                  content="Tire Knowledge and Innovation"
                  {...title}
                />
              }
              description={
                <Text
                  content="At Spotlight Collections we are relentlessly focused on our customers and community. We have a sustainability mindset at every level of our operations and continue to improve effeciency in the recycling industry."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
              <img className = "bannerMobile" src = {MobileBanner} alt= "spotlight"/> 
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#0ba0e9',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
};

export default BannerSection;
