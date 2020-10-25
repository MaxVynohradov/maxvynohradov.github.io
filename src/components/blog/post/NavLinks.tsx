import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

import { FrontmatterData } from '../interfaces/FrontmatterData';

export const NavLinksContainer = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled(Link)<{ before: string; after: string }>`
  display: flex;
  font-size: 21px;
  font-style: italic;
  text-align: center;
  width: 45%;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: #632f83;
  }
  ::before {
    content: ${props => props.before};
  }
  ::after {
    content: ${props => props.after};
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
  return (
    <NavLinksContainer>
      {previous?.slug ? (
        <NavLink to={`/blog/${previous?.slug}`} before="'❮'" after="">
          {previous?.frontmatter.title}
        </NavLink>
      ) : null}
      {next?.slug ? (
        <NavLink to={`/blog/${next?.slug}`} before="" after="'❯'">
          {next.frontmatter?.title}
        </NavLink>
      ) : null}
    </NavLinksContainer>
  );
};
