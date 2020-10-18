import { graphql, StaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

export const ResumeMain = styled.main`
  margin: 20px 0 45px 0;
  font-size: 1.1em;
  @media print {
    background-color: white;
    font-size: 18px;
  }
`;

export const ResumeSections = styled.section`
  display: flex;
  border-bottom: 1px solid #dedede;
  padding: 25px 0 5px 0;

  @media screen and (max-width: 960px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ResumeSectionTitle = styled.h1`
  font-size: 23px;
  width: 20%;
  padding-right: 15px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 960px) {
    width: 100%;
    padding-bottom: 15px;
  }
`;

export const ResumeSectionContent = styled.div`
  width: 79%;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const ResumeArticle = styled.article`
  display: block;
`;

export const ResumeJobHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ResumeArticleSubtitle = styled.h2`
  font-size: 20px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
  margin-top: 3px;
`;

export const ResumeJobPlace = styled.a`
  display: block;
  font-size: 16px;
  font-style: italic;
  color: #6745b0;
  margin-bottom: 5px;
`;

export const ResumeJobDate = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  padding: 0 5px 0 5px;
  min-width: 40px;
`;

export const JobDutiesList = styled.ul`
  display: block;
  list-style-type: square;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 30px;
  overflow-wrap: break-word;
`;

export const JobDutiesLI = styled.li`
  color: #292929;
  line-height: 28px;
  padding: 0 5px;
`;

export const JobDomain = styled.p`
  line-height: 28px;
  padding: 0 5px;
`;

export const JobDomainName = styled.span`
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`;

export const JobTechnologies = styled.p`
  line-height: 28px;
  padding: 0 5px;
`;

export const JobTechnologiesHeader = styled.span`
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`;

export const ResumeParagraph = styled.div`
  line-height: 1.4em;
  margin-bottom: 20px;
  color: #444;
`;

export const ResumeJobParagraph = styled.div<{ collapsed: boolean }>`
  max-height: ${props => (props.collapsed ? 0 : 'none')};
  visibility: ${props => (props.collapsed ? 'hidden' : 'visible')};
  opacity: ${props => (props.collapsed ? '0' : '1')};
  line-height: 1.4em;
  color: #444;
  transition: opacity 1s ease-out, max-height 1s linear;
  margin-bottom: 10px;

  @media print {
    max-height: none;
    visibility: visible;
    opacity: 1;
  }
`;

export const ResumeSubDetails = styled.p`
  font-size: 0.8em;
  font-style: italic;
  margin-bottom: 3px;
`;

export const ResumeSkills = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 1em;
  color: #444;

  @media (max-width: 960px) {
    width: 100%;
    display: block;
  }
`;

export const ResumeSkillsColumns = styled.div`
  width: 30%;
  margin-right: 3%;

  @media (max-width: 960px) {
    width: 100%;
  }

  div {
    h4 {
      color: #6745b0;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
      margin: 5px 0 5px 0;
    }
    span {
      font-size: 14px;
      display: inline-block;
      background-color: #f7f3ff;
      padding: 4px 6px;
      margin: 3px 5px 3px 0;
      border-radius: 10px;
    }
  }
`;

export const PrintButton = styled.button`
  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (min-width: 960px) {
    display: inline-flex;
    position: fixed;
    right: 100px;
    bottom: 25px;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 0.4rem 0.8rem;
    border-width: 1px;
    border-radius: 290486px;
    text-align: center;
    white-space: nowrap;
    color: black;
    border-color: black;
    background-color: white;
    font-size: 16px;
    cursor: pointer;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    transition-delay: 0s;
    opacity: 0.4;
    transition: opacity 200ms ease-in;
    &:hover {
      opacity: 0.9;
    }
    :focus {
      outline: 0;
    }
  }
  @media print {
    display: none;
  }
`;

export const ResumeJobDetailsButton = styled.button`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 0.4rem 0.8rem;
  margin: 5px 0 0 0;
  border: none;
  text-align: center;
  white-space: nowrap;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  transition-delay: 0s;
  opacity: 0.7;
  transition: opacity 200ms ease-in;
  :focus {
    outline: 0;
  }
  &:hover {
    opacity: 1;
  }
  @media print {
    display: none;
  }
`;

export const ResumeJobDetails: FC<{ children: JSX.Element; defaultCollapsed?: boolean }> = ({
  children,
  defaultCollapsed = true,
}: {
  children: JSX.Element;
  defaultCollapsed?: boolean;
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(defaultCollapsed);
  const toggle = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed, setCollapsed]);
  return (
    <>
      <ResumeJobDetailsButton onClick={toggle}>{collapsed ? 'Expand' : 'Collapse'}</ResumeJobDetailsButton>
      <ResumeJobParagraph collapsed={collapsed}>{children}</ResumeJobParagraph>
    </>
  );
};

ResumeJobDetails.defaultProps = { defaultCollapsed: true };

export const ProfileParagraph = styled.div`
  background-color: #f7f3ff;
  border-radius: 15px;
  padding: 10px;
  display: flex;
`;

export const ProfileParagraphText = styled.div`
  display: block;
  width: 100%;
`;

export const PersonContact = styled.a`
  margin: 0 15px 5px 0;
  font-style: italic;
  color: #6745b0;
`;

export const PersonContactBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  @media (max-width: 960px) {
    justify-content: center;
  }
  @media print {
    justify-content: left;
  }
`;

export const PersonName = styled.p`
  font-size: 23px;
  padding: 0 0 5px 0;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 960px) {
    padding-bottom: 15px;
  }
`;

const StyledProfileImage = styled(Img)<{ fixed: FluidObject | FluidObject[] }>`
  display: block !important;
  margin: 0 15px 10px 10px;
  width: 500px;
  height: 240px;
  border-radius: 15px;
  @media screen and (max-width: 960px) {
    width: 800px;
    height: 140px;
  }
  @media print {
    width: 0;
    height: 0;
  }
`;

export const ProfileImage: FC = () => (
  <StaticQuery
    query={graphql`
      query {
        profileImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <StyledProfileImage fixed={data.profileImage.childImageSharp.fluid} />}
  />
);
