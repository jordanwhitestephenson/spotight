import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { agencyTheme } from 'common/theme/agency';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, AgencyWrapper } from 'containers/Agency/agency.style';
import Navbar from 'containers/Agency/Navbar';
import RequestPickup from 'containers/Agency/RequestPickup'
import BannerSection from 'containers/Agency/BannerSection';
import FeatureSection from 'containers/Agency/FeatureSection';
import AboutUsSection from 'containers/Agency/AboutUsSection';
import WorkHistory from 'containers/Agency/WorkHistory';
import BlogSection from 'containers/Agency/BlogSection';
import TestimonialSection from 'containers/Agency/TestimonialSection';
import TeamSection from 'containers/Agency/TeamSection';
import VideoSection from 'containers/Agency/VideoSection';
import FaqSection from 'containers/Agency/FaqSection';
import NewsletterSection from 'containers/Agency/NewsletterSection';
import QualitySection from 'containers/Agency/QualitySection';
import Footer from 'containers/Agency/Footer';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import '@redq/reuse-modal/es/index.css';
import Seo from 'components/seo';


const Agency = () => {
  console.log(process.env.GATSBY_SENDGRID, 'AGENCY*****')
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        <Seo title="Spotlight Collection" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <TestimonialSection />
   
          <WorkHistory />
          <AboutUsSection />
          {/* <BlogSection /> */}
          <QualitySection />
    
          <TeamSection />
          <FaqSection />
          <NewsletterSection />
          {/* <RequestPickup/> */}
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Agency;
