import * as React from 'react';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};

// data
const links = [];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Luchetti</title>
      <h1 style={headingStyles}>
        Hi!
        <br />
        <span style={headingAccentStyles}>This is my portfolio website!</span>
      </h1>
      <p style={paragraphStyles}>
        I'm working on my graduation thesis but I'm getting around to updating
        this website! soon!ᵗᵐ
      </p>
    </main>
  );
};

export default IndexPage;
