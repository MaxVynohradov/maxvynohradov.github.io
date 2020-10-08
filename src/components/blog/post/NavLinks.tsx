import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

import { FrontmatterData } from '../interfaces/FrontmatterData';

export const NavLinksContainer = styled.h1`
  display: flex;
`;

const NavLink = styled(Link)`
  display: flex;
  text-align: center;
  width: 50%;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: #632f83;
  }
`;

interface NavLinksProps {
  previous: {
    slug: string;
    frontmatter: FrontmatterData;
  } | null;
  next: {
    slug: string;
    frontmatter: FrontmatterData;
  } | null;
}

export const NavLinks: FC<NavLinksProps> = ({ previous, next }: NavLinksProps) => {
  console.log('previous', previous);
  return (
    <NavLinksContainer>
      <i className="fas fa-arrow-left"></i>
      {previous?.slug ? <NavLink to={`/blog/${previous?.slug}`}>{previous?.frontmatter.title}</NavLink> : null}
      {next?.slug ? <NavLink to={`/blog/${next?.slug}`}>{next.frontmatter?.title}</NavLink> : null}
    </NavLinksContainer>
  );
};
