import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { IconGithub, IconExternal, IconFolder } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Button, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const BlogContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;

const BlogTitle = styled.h5`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: ${colors.lightestSlate};
  ${media.tablet`font-size: 24px;`};
  a {
    ${media.tablet`display: block;`};
  }
`;

const BlogContent = styled.a`
  max-width: 700px;
  margin: 50px auto 0;
  padding: 10px;
  box-shadow: 0px 1px 5px 2px rgb(0, 179, 118);
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;

const Blog = ({ data }) => (
  <BlogContainer id="blog">
    <Heading>
      <span>0011.</span>Blog posts
    </Heading>

    <p>
      I believe that the best way to learn how to build things in actually putting that in practice
      or teaching other people. <br />I have a{' '}
      <a style={{ color: 'red' }} href="https://medium.com/@emersonlopxs" target="_blank">
        medium blog
      </a>
      , once in a while I post some stuff that I find interesting, here there are some entries.
    </p>

    <BlogContent
      href="https://medium.com/@emersonlopxs/this-in-javascript-88050c02a9dd"
      target="_blank">
      <BlogTitle>“This” in Javascript</BlogTitle>
      <img src="https://miro.medium.com/fit/c/700/210/0*wvzdZftQCGQfF_Yx" alt="" srcSet="" />
      <small>Jan 6 - 2019</small>
      <div>
        1- Default behavior: ‘this’ will point to the global scope{' '}
        {`let a = 2
        function greet() {
          console.log(this.a)
        }
        greet() // undefined...`}
      </div>
    </BlogContent>

    <BlogContent
      href="https://medium.com/@emersonlopxs/stop-being-obsessed-with-money-5de299245cf3"
      target="_blank">
      <BlogTitle>Stop being obsessed with money</BlogTitle>
      <img src="https://miro.medium.com/fit/c/1400/420/0*zKjBwkwquanEKeHn" alt="" srcSet="" />
      <small>May 3 - 2019</small>
      <div>
        You may have already seen people say stuff like nothing in life is free time is money And
        much more of those crap...
      </div>
    </BlogContent>

    <BlogContent
      href="https://medium.com/@emersonlopxs/overcoming-the-tutorial-purgatory-e7b374e4c454"
      target="_blank">
      <BlogTitle>Overcoming the “Tutorial Purgatory”</BlogTitle>
      <img src="https://miro.medium.com/fit/c/1400/420/0*qZGw8vjeKfbPE8wW" alt="" srcSet="" />
      <small>Jan 3 - 2019</small>
      <div>
        When I was getting started I used to finish an Udemy course and then try to build something
        myself, I just couldn’t. I didn’t remember how I could do stuff...
      </div>
    </BlogContent>

    <BlogContent
      href="https://medium.com/@emersonlopxs/2018-as-a-22-year-old-self-taught-junior-software-engineer-45956ce2e74f"
      target="_blank">
      <BlogTitle>2018 as a 22-year-old Self-Taught Junior Software Engineer</BlogTitle>
      <img src="https://miro.medium.com/fit/c/700/210/0*ZdKf4j2xhaahss_L" alt="" srcSet="" />
      <small>Dec 29 - 2018</small>
      <div>
        In December 2016 I started learning how to code, in December 2018 I have just delivered my
        5th freelance project (and probably the last for a while)...
      </div>
    </BlogContent>
  </BlogContainer>
);

// Blog.propTypes = {
//   data: PropTypes.array.isRequired,
// };

export default Blog;
