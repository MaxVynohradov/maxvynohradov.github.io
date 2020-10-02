import styled from 'styled-components';

const CodeBlock = styled.pre`
  font-family: 'Source Code Pro', monospace;
  background-color: #000;
  color: #fafafa;
  padding: 20px;
  border-radius: 5px;
  display: block;
  overflow-x: auto;
  margin-right: 25px;
  margin-left: 25px;
`;

const Header1 = styled.h1`
  font-family: 'Notable', sans-serif;
  color: #461969;
  text-transform: uppercase;
`;

const Header3 = styled.h3`
  font-family: 'Oswald', sans-serif;
  color: #461969;
  text-transform: uppercase;
`;

const MdxLink = styled.a`
  color: #6745b0;
  text-decoration-line: underline;
  text-decoration-style: double;
`;

const Paragraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #0f0217;
`;

export const mdxProviderComponentsList = {
  p: Paragraph,
  h1: Header1,
  // h2
  h3: Header3,
  // h4
  // h5
  // h6
  // thematicBreak
  // blockquote
  // ul
  // ol
  li: MdxLink,
  // table
  // thead
  // tbody
  // tr
  // td
  // th
  // pre
  code: CodeBlock,
  // em
  // strong
  // del
  // inlineCode
  // hr
  // a
  // img
};
