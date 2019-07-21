import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { IconGithub, IconExternal, IconFolder } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Button, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const YoutubeContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  /* background-color: red; */
  /* border: 1px solid #fff; */
`;

const Videos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  iframe {
    width: 800px;
    height: 450px;
    margin-top: 50px;

    @media (max-width: 989px) {
      width: 700px;
      height: 350px;
    }

    @media (max-width: 873px) {
      width: 500px;
      height: 350px;
    }

    @media (max-width: 550px) {
      width: 350px;
      height: 210px;
    }

    @media (max-width: 370px) {
      width: 250px;
      height: 200px;
    }
  }
`;

const Youtube = ({ data }) => (
  <YoutubeContainer id="youtube">
    <Heading>
      <span>0100.</span>
      Youtube videos
    </Heading>

    <p>
      I love solving coding challenges, sometimes I record it and upload them to youtube check out
      my channel{' '}
      <a
        style={{ color: 'red' }}
        href="https://www.youtube.com/channel/UCmBGPt_yWzwheX7VS2Rhsyw/videos?view_as=subscriber"
        target="_blank">
        here
      </a>
      .
      <br />
      bellow there are some videos I've uploaded to my channel
    </p>
    <Videos>
      <iframe src="https://www.youtube.com/embed/oTfvZ13ZZbk" />
      <iframe src="https://www.youtube.com/embed/xJut6NxD7O4" />
      <iframe src="https://www.youtube.com/embed/NdeCT1LomnU" />
    </Videos>
  </YoutubeContainer>
);

// Youtube.propTypes = {
//   data: PropTypes.array.isRequired,
// };

export default Youtube;
