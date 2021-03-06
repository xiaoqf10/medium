import React from "react";
import PropTypes from "prop-types";

const Headline = props => {
  const { title, children, theme, cover } = props;

  return (
    <React.Fragment>
      {/* {cover ? <img src={cover} style={{'vertical-align', 'middle'}}/>: <div/> } */}
      {cover ? <img src={cover} className='headerImage'/>: <div/> }
      {/* {cover ? <img src={cover}/>: <div/> } */}
      {title ? <h1>{title}</h1> : <h1>{children}</h1>}

      {/* --- STYLES --- */}
      <style jsx>{`
        h1 {
          font-size: ${theme.font.size.xxl};
          margin: ${theme.space.stack.l};
          animation-name: headlineEntry;
          animation-duration: ${theme.time.duration.long};

          :global(span) {
            font-weight: ${theme.font.weight.standard};
            display: block;
            font-size: 0.5em;
            letter-spacing: 0;
            margin: ${theme.space.stack.xs};
          }

          :global(svg) {
            height: 0.75em;
            fill: ${theme.color.brand.primary};
          }
        }

        .headerImage {
          width: 100%;
          height: 100%;
          display: block;
          margin: 2.5em 0;
          border-radius: ${theme.size.radius.default};
          overflow: hidden;
          box-shadow: inset 0px 0px 0px 400px transparent;
       }

        @keyframes headlineEntry {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }

        @from-width tablet {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.2)`};
          }
        }

        @from-width desktop {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.4)`};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object.isRequired
};

export default Headline;
