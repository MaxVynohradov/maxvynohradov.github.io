import React, { FC } from 'react';
import styled from 'styled-components';

export const ResumeMain = styled.main`
  margin: 20px 0 45px 0;
  font-size: 1.1em;
`;

export const ResumeSections = styled.section`
  display: flex;
  border-bottom: 1px solid #dedede;
  padding: 25px 0 5px 0;

  @media (max-width: 960px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ResumeSectionTitle = styled.h1`
  font-size: 23px;
  width: 20%;
  padding-right: 15px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);

  @media (max-width: 960px) {
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

export const ResumeWorkPlace = styled.a`
  display: block;
  font-size: 16px;
  font-style: italic;
  color: black;
  margin-bottom: 5px;
`;

export const ResumeWorkDate = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const WorkDutiesList = styled.ul`
  display: block;
  list-style-type: square;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 30px;
  overflow-wrap: break-word;
`;

export const WorkDutiesLI = styled.li`
  color: #292929;
  line-height: 28px;
  padding: 0 5px;
`;

export const WorkDomain = styled.p`
  line-height: 28px;
  padding: 0 5px;
`;

export const WorkDomainName = styled.span`
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`;

export const WorkTechnologies = styled.p`
  line-height: 28px;
  padding: 0 5px;
`;

export const WorkTechnologiesHeader = styled.span`
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`;

export const ResumeParagraph = styled.p`
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
            <ResumeWorkPlace href="http://brocoders.com/">Brocoders | Software Development Company</ResumeWorkPlace>
            <ResumeWorkDate>October 2017 - Present</ResumeWorkDate>

            <ResumeParagraph>
              <WorkDutiesList>
                <WorkDutiesLI>Development of scalable web-applications based on Node.js platform</WorkDutiesLI>
                <WorkDutiesLI>Bug-fixing, codereview</WorkDutiesLI>
                <WorkDutiesLI>Improvement, extending functionality of existing solutions</WorkDutiesLI>
                <WorkDutiesLI>
                  DevOps: handling web-servers. Management of AWS Infrastructure: EC2, ECS\ECR, Lambda, S3, Beanstalk,
                  AWS ElasticSearch, CloudFront, Route53, CloudWatch
                </WorkDutiesLI>
                <WorkDutiesLI>Automation of routine tasks using AWS Lambda functions (Serverless / SAM)</WorkDutiesLI>
                <WorkDutiesLI>Troubleshooting REST API, Routing, HTTP(S)</WorkDutiesLI>
                <WorkDutiesLI>CI\CD automation with AWS CodePipeline, GitHub Actions, Jenkins Pipelines</WorkDutiesLI>
                <WorkDutiesLI>Mentoring of trainees and newcomers</WorkDutiesLI>
              </WorkDutiesList>

              <WorkDomain>
                <WorkDomainName>Domain: </WorkDomainName>
                Web-development (mostly for Startups)
              </WorkDomain>

              <WorkTechnologies>
                <WorkTechnologiesHeader>Used technologies:</WorkTechnologiesHeader>
                Node.js, Express.js, Serverless/SAM, AWS Cloud Services, Nginx, Docker, React.js & Redux, Mocha & Chai,
                Nock, Google Cloud Platform APIs, Sentry, Firebase, Ruby, RoR, Swagger, Postman, ES, MongoDB, Postgres,
                Redis, MySQL, DynamoDB, BI systems (Metabase).
              </WorkTechnologies>
            </ResumeParagraph>
          </ResumeArticle>

          <ResumeArticle>
            <ResumeArticleSubtitle>Team Lead, Back-end Developer</ResumeArticleSubtitle>
            <ResumeWorkPlace href="httpa://gokada.ng/">GOKADA- We do delivery now</ResumeWorkPlace>
            <ResumeWorkDate>September 2018 - February 2020</ResumeWorkDate>

            <ResumeParagraph>
              <WorkDutiesList>
                <WorkDutiesLI>
                  Development and management of serverless API that based on AWS Lambdas and related AWS Cloud Services
                </WorkDutiesLI>
                <WorkDutiesLI>Development web-service on Nest.js</WorkDutiesLI>
                <WorkDutiesLI>Bug-fixing, codereview</WorkDutiesLI>
                <WorkDutiesLI>
                  Interaction with customer and local team, making estimations and local development roadmaps.
                </WorkDutiesLI>
                <WorkDutiesLI>
                  DevOps: handling web-servers. Management of AWS Infrastructure: EC2, ECS\ECR, Lambda, S3, Beanstalk,
                  AWS ElasticSearch, CloudFront, Route53, CloudWatch
                </WorkDutiesLI>
                <WorkDutiesLI>Troubleshooting REST API, Routing, HTTP(S), MongoDB related issues</WorkDutiesLI>
                <WorkDutiesLI>CI\CD automation with AWS CodePipeline</WorkDutiesLI>
              </WorkDutiesList>

              <WorkDomain>
                <WorkDomainName>Domain: </WorkDomainName>
                Transport system
              </WorkDomain>

              <WorkTechnologies>
                <WorkTechnologiesHeader>Used technologies: </WorkTechnologiesHeader>
                Node.js, Express.js, Nest.js, Serverless Framework, AWS Cloud Services, Docker, Mocha & Chai, Google
                Cloud Platform APIs, Sentry, Firebase, Swagger, Postman, MongoDB, Postgres, Redis, Metabase.
              </WorkTechnologies>
            </ResumeParagraph>
          </ResumeArticle>

          <ResumeArticle>
            <ResumeArticleSubtitle>Technical Solution Support Engineer</ResumeArticleSubtitle>
            <ResumeWorkPlace href="https://www.netcracker.com/">Netcracker Technology</ResumeWorkPlace>
            <ResumeWorkDate>June 2016 - September 2017</ResumeWorkDate>

            <ResumeParagraph>
              <WorkDutiesList>
                <WorkDutiesLI>Support of multi-component web-solution related to the telecommunication</WorkDutiesLI>
                <WorkDutiesLI>Problems investigation, bugs-fixing</WorkDutiesLI>
                <WorkDutiesLI>
                  Programming: adding new components to existed program solution (JavaEE, Spring framework)
                </WorkDutiesLI>
                <WorkDutiesLI>
                  Creating validation and transformation tools for raw customer's data (Python).
                </WorkDutiesLI>
                <WorkDutiesLI>
                  Interacting with developers and managers at remote locations (Russia, India)
                </WorkDutiesLI>
              </WorkDutiesList>

              <WorkDomain>
                <WorkDomainName>Customer: </WorkDomainName>
                Cogeco Inc.
              </WorkDomain>

              <WorkDomain>
                <WorkDomainName>Domain: </WorkDomainName>
                BSS, OSS and SDN/NFV
              </WorkDomain>

              <WorkTechnologies>
                <WorkTechnologiesHeader>Used technologies: </WorkTechnologiesHeader>
                Java 1.7, Oracle DB, SQL, Maven, Spring, J2EE, GWT, WebLogic, SVN, Jenkins, IntelliJ IDEA, AJAX, jQuery,
                Python, Pandas.
              </WorkTechnologies>
            </ResumeParagraph>
          </ResumeArticle>

          <ResumeArticle>
            <ResumeArticleSubtitle>Senior Technical Assistant</ResumeArticleSubtitle>
            <ResumeWorkPlace href="https://www.netcracker.com/">Sumy State University</ResumeWorkPlace>
            <ResumeWorkDate>June 2016 - September 2017</ResumeWorkDate>

            <ResumeParagraph>
              <WorkDutiesList>
                <WorkDutiesLI>Development of automated, interactive web-trainers</WorkDutiesLI>
                <WorkDutiesLI>Support code-base of existing web-trainers, bugs fixing</WorkDutiesLI>
                <WorkDutiesLI>
                  Interactive with people (mostly teachers) that provide materials for trainers creation
                </WorkDutiesLI>
              </WorkDutiesList>

              <WorkDomain>
                <WorkDomainName>Customer: </WorkDomainName>
                Sumy State University
              </WorkDomain>

              <WorkDomain>
                <WorkDomainName>Domain: </WorkDomainName>
                Education
              </WorkDomain>

              <WorkTechnologies>
                <WorkTechnologiesHeader>Used technologies: </WorkTechnologiesHeader>
                SVN, JavaScript, AJAX, jQuery, Mustache templates, Bootstrap 3
              </WorkTechnologies>
            </ResumeParagraph>
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
      </ResumeSections>
    </ResumeMain>
  );
};

export default ResumeRoute;
