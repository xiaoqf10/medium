import React from "react";
import PropTypes from "prop-types";
import "prismjs/themes/prism-okaidia.css";

import asyncComponent from "../AsyncComponent";
import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
import Meta from "./Meta";
import Author from "./Author";
import Comments from "./Comments";
import NextPrev from "./NextPrev";

const Share = asyncComponent(() =>
  import("./Share")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

const Post = props => {
  const {
    post,
    post: {
      html,
      fields: { prefix, slug },
      frontmatter: { title, category, cover }
      // frontmatter: { title, author, category, cover }
    },
    authornote,
    facebook,
    next: nextPost,
    prev: prevPost,
    theme
  } = props;

  // console.log('cover--', cover.childImageSharp.resize.src)
  console.log('slug: ', slug)

  return (
    <React.Fragment>
      <header>
        <Headline title={title} theme={theme} cover={cover.childImageSharp.original.src}/>
        <Meta prefix={prefix} category={category} theme={theme} />
        {/* <Meta prefix={prefix} author={author} category={category} theme={theme} /> */}
      </header>
      <Bodytext html={html} theme={theme} />
      <footer>
        <Share post={post} theme={theme} />
        <Author note={authornote} theme={theme} />
        <NextPrev next={nextPost} prev={prevPost} theme={theme} />
        <Comments slug={slug} facebook={facebook} theme={theme} />
      </footer>
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authornote: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default Post;
