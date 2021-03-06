import React from "react";
import PropTypes from "prop-types";

import FaArrowDown from "react-icons/lib/fa/arrow-down";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="homePage vertical-section">
        <section className="homePageImage">
        </section>

        <section className="HomePagePostPreviews horizontal-section">
          <section className="featuredPosts horizontal-section">
            
            <section className="featPost vertical-section">
              <section className="postImage"></section>
              <h2>Post Title</h2>
              <h3>Post Date</h3>
              <text>Post Preview</text>
            </section>

            <section className="featPost vertical-section">
              <section className="postImage"></section>
              <h2>Post Title</h2>
              <h3>Post Date</h3>
              <text>Post Preview</text>
            </section>

            <section className="featPost vertical-section">
              <section className="postImage"></section>
              <h2>Post Title</h2>
              <h3>Post Date</h3>
              <text>Post Preview</text>
            </section>

          </section>
          <section className="popularPosts vertical-section">
            <h2>最受欢迎的 Posts</h2>
            
            <section className="popPost vertical-section">
              <h2>Post Title</h2>
              <h3>Post Date</h3>
              <text>Post Preview</text>
            </section>

            <section className="popPost vertical-section">
              <h2>Post Title</h2>
              <h3>Post Date</h3>
              <text>Post Preview</text>
            </section>

            <section className="popPost vertical-section">
              <h2>Post Title</h2>
              <h3>Post Date</h3>
              <text>Post Preview</text>
            </section>

          </section>
        </section>
      </section>

      {/* <section className="hero">
        <h1>
          This is a demo site of&nbsp;the <strong>heroBlog</strong> GatsbyJS starter
        </h1>
        <button onClick={scrollToContent} aria-label="scroll">
          <FaArrowDown />
        </button>
      </section> */}

      {/* --- STYLES --- */}
      <style jsx>{`

        .horizontal-section {
          display: flex;
          flex-direction: row;
          width:100%;
        }

        .vertical-section1 {
          display: flex;
          flex-direction: column;
          
          width:100%;
        }

        .postImage {
          background: red;
          min-height: 100px;
          width: 100%;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }

        .featPost {
          width: 80%;
          margin: 2%;
        }

        .popPost {
          width: 80%;
          margin: 2%;
          margin-bottom: 15px;
        }

        .featuredPosts {
          background: blue;
          min-height: 60vh;
        
          width: 75%;
        }

        .popularPosts {
          background: green;
          min-height: 60vh;
         
          width: 25%;
        }

        .homePageImage {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          justify-content: center;
          min-height: 40vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        .homePage {
          min-height: 100vh;
          background: red;
        }

        .hero {
          min-height: 100vh;
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            fill: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
