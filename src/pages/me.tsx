import React, { FC, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import {
  JobDomain,
  JobDomainName,
  JobDutiesLI,
  JobDutiesList,
  JobTechnologies,
  JobTechnologiesHeader,
  PrintButton,
  ResumeArticle,
  ResumeArticleSubtitle,
  ResumeJobDate,
  ResumeJobDetails,
  ResumeJobPlace,
  ResumeMain,
  ResumeParagraph,
  ResumeSectionContent,
  ResumeSections,
  ResumeSectionTitle,
  ResumeSkills,
} from '../components/resume/index.';

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
                    Creating validation and transformation tools for raw customer&apos;s data (Python).
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
            <ResumeParagraph>Master&apos;s degree. Informatics.</ResumeParagraph>
          </ResumeArticle>
          <ResumeArticle>
            <ResumeArticleSubtitle>Sumy State University</ResumeArticleSubtitle>
            <ResumeJobDate>2014 - 2018</ResumeJobDate>
            <ResumeParagraph>Bachelor&apos;s degree. Informatics.</ResumeParagraph>
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
