import styled from 'styled-components';

export const MdxThematicBreak = styled.hr``;

export const MdxHr = styled.hr``;

export const MdxImg = styled.img`
  margin: 20px auto;
  display: block;
  text-align: center;
  width: 50%;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const MdxBlockquote = styled.blockquote``;

export const MdxLink = styled.a`
  color: #6745b0;
  text-decoration-line: underline;
  text-decoration-style: initial;
  cursor: pointer;
  line-height: 28px;
  font-size: inherit;
  padding: 0 5px;
  overflow-wrap: break-word;
`;

export const MdxParagraph = styled.p`
  color: #0f0217;
  display: block;
  line-height: 28px;
  font-size: 20px;
  padding: 0 5px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  overflow-wrap: break-word;
`;
