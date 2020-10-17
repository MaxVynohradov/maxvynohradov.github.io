import React, { FC, useCallback, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
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
  color: black;
  margin-bottom: 5px;
`;

export const ResumeJobDate = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
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
  max-height: ${props => (props.collapsed ? 0 : 'auto')};
  visibility: ${props => (props.collapsed ? 'hidden' : 'visible')};
  opacity: ${props => (props.collapsed ? '0' : '1')};
  line-height: 1.4em;
  color: #444;
  transition: opacity 1s ease-out, max-height 1s linear;
  margin-bottom: 10px;
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
`;

const ResumeJobDetails: FC<{ children: JSX.Element; defaultCollapsed?: boolean }> = ({
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

const ResumeRoute: FC = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    content: () => componentRef.current,
  });

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ResumeMain ref={componentRef}>
      <PrintButton onClick={handlePrint}>Print resume</PrintButton>
      <ResumeSections>
        <ResumeSectionTitle>Personal Profile</ResumeSectionTitle>
        <ResumeSectionContent>
          <ResumeArticle>
            <ResumeParagraph>
              I believe that programming and computer science entirely is my calling in life. I develop my technical and
              soft skills; get new experience and knowledge to be a role model in my field.
            </ResumeParagraph>
          </ResumeArticle>
        </ResumeSectionContent>
      </ResumeSections>
      <ResumeSections>
        <ResumeSectionTitle>Work Experience</ResumeSectionTitle>
        <ResumeSectionContent>
          <ResumeArticle>
            <ResumeArticleSubtitle>Senior Software Engineer</ResumeArticleSubtitle>
            <ResumeJobPlace href="http://brocoders.com/">Brocoders | Software Development Company</ResumeJobPlace>
            <ResumeJobDate>October 2017 - Present</ResumeJobDate>
            <ResumeJobDetails>
              <>
                <JobDutiesList>
                  <JobDutiesLI>Development of scalable web-applications based on Node.js platform</JobDutiesLI>
                  <JobDutiesLI>Bug-fixing, codereview</JobDutiesLI>
                  <JobDutiesLI>Improvement, extending functionality of existing solutions</JobDutiesLI>
                  <JobDutiesLI>
                    DevOps: handling web-servers. Management of AWS Infrastructure: EC2, ECS\ECR, Lambda, S3, Beanstalk,
                    AWS ElasticSearch, CloudFront, Route53, CloudWatch
                  </JobDutiesLI>
                  <JobDutiesLI>Automation of routine tasks using AWS Lambda functions (Serverless / SAM)</JobDutiesLI>
                  <JobDutiesLI>Troubleshooting REST API, Routing, HTTP(S)</JobDutiesLI>
                  <JobDutiesLI>CI\CD automation with AWS CodePipeline, GitHub Actions, Jenkins Pipelines</JobDutiesLI>
                  <JobDutiesLI>Mentoring of trainees and newcomers</JobDutiesLI>
                </JobDutiesList>
                <JobDomain>
                  <JobDomainName>Domain: </JobDomainName>
                  Web-development (mostly for Startups)
                </JobDomain>
                <JobTechnologies>
                  <JobTechnologiesHeader>Used technologies:</JobTechnologiesHeader>
                  Node.js, Express.js, Serverless/SAM, AWS Cloud Services, Nginx, Docker, React.js & Redux, Mocha &
                  Chai, Nock, Google Cloud Platform APIs, Sentry, Firebase, Ruby, RoR, Swagger, Postman, ES, MongoDB,
                  Postgres, Redis, MySQL, DynamoDB, BI systems (Metabase).
                </JobTechnologies>
              </>
            </ResumeJobDetails>
          </ResumeArticle>

          <ResumeArticle>
            <ResumeArticleSubtitle>Team Lead, Back-end Developer</ResumeArticleSubtitle>
            <ResumeJobPlace href="httpa://gokada.ng/">GOKADA- We do delivery now</ResumeJobPlace>
            <ResumeJobDate>September 2018 - February 2020</ResumeJobDate>

            <ResumeJobDetails>
              <>
                <JobDutiesList>
                  <JobDutiesLI>
                    Development and management of serverless API that based on AWS Lambdas and related Services
                  </JobDutiesLI>
                  <JobDutiesLI>Development web-service on Nest.js</JobDutiesLI>
                  <JobDutiesLI>Bug-fixing, codereview</JobDutiesLI>
                  <JobDutiesLI>
                    Interaction with customer and local team, making estimations and local development roadmaps.
                  </JobDutiesLI>
                  <JobDutiesLI>
                    DevOps: handling web-servers. Management of AWS Infrastructure: EC2, ECS\ECR, Lambda, S3, Beanstalk,
                    AWS ElasticSearch, CloudFront, Route53, CloudWatch
                  </JobDutiesLI>
                  <JobDutiesLI>Troubleshooting REST API, Routing, HTTP(S), MongoDB related issues</JobDutiesLI>
                  <JobDutiesLI>CI\CD automation with AWS CodePipeline</JobDutiesLI>
                </JobDutiesList>

                <JobDomain>
                  <JobDomainName>Domain: </JobDomainName>
                  Transport system
                </JobDomain>

                <JobTechnologies>
                  <JobTechnologiesHeader>Used technologies: </JobTechnologiesHeader>
                  Node.js, Express.js, Nest.js, Serverless Framework, AWS Cloud Services, Docker, Mocha & Chai, Google
                  Cloud Platform APIs, Sentry, Firebase, Swagger, Postman, MongoDB, Postgres, Redis, Metabase.
                </JobTechnologies>
              </>
            </ResumeJobDetails>
          </ResumeArticle>

          <ResumeArticle>
            <ResumeArticleSubtitle>Technical Solution Support Engineer</ResumeArticleSubtitle>
            <ResumeJobPlace href="https://www.netcracker.com/">Netcracker Technology</ResumeJobPlace>
            <ResumeJobDate>June 2016 - September 2017</ResumeJobDate>

            <ResumeJobDetails>
              <>
                <JobDutiesList>
                  <JobDutiesLI>Support of multi-component web-solution related to the telecommunication</JobDutiesLI>
                  <JobDutiesLI>Problems investigation, bugs-fixing</JobDutiesLI>
                  <JobDutiesLI>
                    Programming: adding new components to existed program solution (JavaEE, Spring framework)
                  </JobDutiesLI>
                  <JobDutiesLI>
                    Creating validation and transformation tools for raw customer's data (Python).
                  </JobDutiesLI>
                  <JobDutiesLI>
                    Interacting with developers and managers at remote locations (Russia, India)
                  </JobDutiesLI>
                </JobDutiesList>

                <JobDomain>
                  <JobDomainName>Customer: </JobDomainName>
                  Cogeco Inc.
                </JobDomain>

                <JobDomain>
                  <JobDomainName>Domain: </JobDomainName>
                  BSS, OSS and SDN/NFV
                </JobDomain>

                <JobTechnologies>
                  <JobTechnologiesHeader>Used technologies: </JobTechnologiesHeader>
                  Java 1.7, Oracle DB, SQL, Maven, Spring, J2EE, GWT, WebLogic, SVN, Jenkins, IntelliJ IDEA, AJAX,
                  jQuery, Python, Pandas.
                </JobTechnologies>
              </>
            </ResumeJobDetails>
          </ResumeArticle>

          <ResumeArticle>
            <ResumeArticleSubtitle>Senior Technical Assistant</ResumeArticleSubtitle>
            <ResumeJobPlace href="https://www.netcracker.com/">Sumy State University</ResumeJobPlace>
            <ResumeJobDate>June 2016 - September 2017</ResumeJobDate>

            <ResumeJobDetails>
              <>
                <JobDutiesList>
                  <JobDutiesLI>Development of automated, interactive web-trainers</JobDutiesLI>
                  <JobDutiesLI>Support code-base of existing web-trainers, bugs fixing</JobDutiesLI>
                  <JobDutiesLI>
                    Interactive with people (mostly teachers) that provide materials for trainers creation
                  </JobDutiesLI>
                </JobDutiesList>

                <JobDomain>
                  <JobDomainName>Customer: </JobDomainName>
                  Sumy State University
                </JobDomain>

                <JobDomain>
                  <JobDomainName>Domain: </JobDomainName>
                  Education
                </JobDomain>

                <JobTechnologies>
                  <JobTechnologiesHeader>Used technologies: </JobTechnologiesHeader>
                  SVN, JavaScript, AJAX, jQuery, Mustache templates, Bootstrap 3
                </JobTechnologies>
              </>
            </ResumeJobDetails>
          </ResumeArticle>
        </ResumeSectionContent>
      </ResumeSections>
      <ResumeSections>
        <ResumeSectionTitle>Education</ResumeSectionTitle>
        <ResumeSectionContent>
          <ResumeArticle>
            <ResumeArticleSubtitle>Sumy State University</ResumeArticleSubtitle>
            <ResumeJobDate>2018 - 2019</ResumeJobDate>
            <ResumeParagraph>Master's degree. Informatics.</ResumeParagraph>
          </ResumeArticle>
          <ResumeArticle>
            <ResumeArticleSubtitle>Sumy State University</ResumeArticleSubtitle>
            <ResumeJobDate>2014 - 2018</ResumeJobDate>
            <ResumeParagraph>Bachelor's degree. Informatics.</ResumeParagraph>
          </ResumeArticle>
        </ResumeSectionContent>
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
      </ResumeSections>
      <ResumeSections>
        <ResumeSectionTitle>Languages</ResumeSectionTitle>
        <ResumeSectionContent>
          <ResumeArticle>
            <ResumeArticleSubtitle>English</ResumeArticleSubtitle>
            <ResumeArticleSubtitle>Ukrainian</ResumeArticleSubtitle>
            <ResumeArticleSubtitle>Russian</ResumeArticleSubtitle>
          </ResumeArticle>
        </ResumeSectionContent>
      </ResumeSections>
    </ResumeMain>
  );
};

export default ResumeRoute;
