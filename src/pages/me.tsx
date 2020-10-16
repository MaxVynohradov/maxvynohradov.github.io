import React, { FC } from 'react';
import styled from 'styled-components';

export const ResumeMain = styled.main`
  margin: 20px 0 20px 0;
`;

export const ResumeSections = styled.section`
  border-top: 1px solid #dedede;
  padding: 20px 0 0;
`;

export const ResumeArticle = styled.article`
  display: block;
`;

export const ResumeSectionTitle = styled.h1`
  font-size: 22px;
  float: left;
  width: 25%;
`;

export const ResumeArticleSubtitle = styled.h2`
  font-size: 20px;
`;

export const ResumeSectionContent = styled.div`
  float: right;
  width: 72.5%;
`;

export const ResumeSectionClear = styled.div`
  clear: both;
`;

export const ResumeParagraph = styled.p`
  font-size: 1em;
  line-height: 1.4em;
  margin-bottom: 20px;
  color: #444;
`;

export const ResumeSubDetails = styled.p`
  font-size: 0.8em;
  font-style: italic;
  margin-bottom: 3px;
`;

export const ResumeSkills = styled.ul`
  list-style-type: none;
  -moz-column-count: 3;
  -webkit-column-count: 3;
  column-count: 3;
  margin-bottom: 20px;
  font-size: 1em;
  color: #444;
`;

const ResumeRoute: FC = () => {
  return (
    <ResumeMain>
      <ResumeSections>
        <ResumeArticle>
          <ResumeSectionTitle>Personal Profile</ResumeSectionTitle>
          <ResumeSectionContent>
            <ResumeParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in,
              porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis
              dignissim. Proin id sapien quis libero interdum porttitor.
            </ResumeParagraph>
          </ResumeSectionContent>
        </ResumeArticle>
        <ResumeSectionClear />
      </ResumeSections>
      <ResumeSections>
        <ResumeSectionTitle>Work Experience</ResumeSectionTitle>
        <ResumeSectionContent>
          <ResumeArticle>
            <ResumeArticleSubtitle>Job Title at Company</ResumeArticleSubtitle>
            <ResumeSubDetails>April 2011 - Present</ResumeSubDetails>
            <ResumeParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit.
              Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum
              porttitor.
            </ResumeParagraph>
          </ResumeArticle>
          <ResumeArticle>
            <ResumeArticleSubtitle>Job Title at Company</ResumeArticleSubtitle>
            <ResumeSubDetails>Janruary 2007 - March 2011</ResumeSubDetails>
            <ResumeParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit.
              Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum
              porttitor.
            </ResumeParagraph>
          </ResumeArticle>
          <ResumeArticle>
            <ResumeArticleSubtitle>Job Title at Company</ResumeArticleSubtitle>
            <ResumeSubDetails>October 2004 - December 2006</ResumeSubDetails>
            <ResumeParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit.
              Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum
              porttitor.
            </ResumeParagraph>
          </ResumeArticle>
        </ResumeSectionContent>
        <ResumeSectionClear />
      </ResumeSections>
      <ResumeSections>
        <ResumeSectionTitle>Key Skills</ResumeSectionTitle>
        <ResumeSectionContent>
          <ResumeSkills>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
          </ResumeSkills>
        </ResumeSectionContent>
        <ResumeSectionClear />
      </ResumeSections>
      <ResumeSections>
        <ResumeSectionTitle>Education</ResumeSectionTitle>
        <ResumeSectionContent>
          <ResumeArticle>
            <ResumeArticleSubtitle>College/University</ResumeArticleSubtitle>
            <ResumeSubDetails>Qualification</ResumeSubDetails>
            <ResumeParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit.
              Curabitur non consequat enim.
            </ResumeParagraph>
          </ResumeArticle>
          <ResumeArticle>
            <ResumeArticleSubtitle>College/University</ResumeArticleSubtitle>
            <ResumeSubDetails>Qualification</ResumeSubDetails>
            <ResumeParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit.
              Curabitur non consequat enim.
            </ResumeParagraph>
          </ResumeArticle>
        </ResumeSectionContent>
        <ResumeSectionClear />
      </ResumeSections>
    </ResumeMain>
  );
};

export default ResumeRoute;
