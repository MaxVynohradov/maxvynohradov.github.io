import { graphql, PageProps } from 'gatsby';
import React, { FC, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import {
  JobDomain,
  JobDomainName,
  JobDutiesLI,
  JobDutiesList,
  JobTechnologies,
  JobTechnologiesHeader,
  PersonContact,
  PersonContactBlock,
  PersonName,
  PrintButton,
  ProfileImage,
  ProfileParagraph,
  ProfileParagraphText,
  ResumeArticle,
  ResumeArticleSubtitle,
  ResumeJobDate,
  ResumeJobDetails,
  ResumeJobHeader,
  ResumeJobPlace,
  ResumeMain,
  ResumeParagraph,
  ResumeSectionContent,
  ResumeSections,
  ResumeSectionTitle,
  ResumeSkills,
  ResumeSkillsColumns,
} from '../components/resume/index.';
import SEO from '../components/SEO';

const description = `
Back-end Engineer, Team Lead, sometimes DevOps. Addicted Node.js and TypeScript, Serverless, AWS Lambdas.
I believe that programming and computer science entirely is my calling in life. I develop my technical
and soft skills; get new experience and knowledge to be a role model in my field.
`;

interface ResumeRouteProps {
  profileImage: {
    childImageSharp: {
      fixed: {
        src: string;
        height: number;
        width: number;
      };
    };
  };
}

const ResumeRoute: FC<PageProps<ResumeRouteProps>> = (props: PageProps<ResumeRouteProps>) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const {
    data: {
      profileImage: {
        childImageSharp: { fixed },
      },
    },
  } = props;
  const coverImgFixed = {
    src: fixed.src,
    height: fixed.height,
    width: fixed.width,
  };

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
      <SEO
        title="Maxim Vynohradov | Senior Software Engineer"
        description={description}
        image={coverImgFixed}
        pathname="https://maxvynohradov.github.io/me"
      />
      <PrintButton onClick={handlePrint}>Print resume</PrintButton>
      <ResumeSections>
        <ResumeSectionTitle>Personal Profile</ResumeSectionTitle>
        <ResumeSectionContent>
          <ResumeArticle>
            <ResumeParagraph>
              <ProfileParagraph>
                <ProfileImage />
                <ProfileParagraphText>
                  <PersonName>Maxim Vynohradov</PersonName>
                  <ResumeArticleSubtitle>Senior Software Engineer</ResumeArticleSubtitle>
                  <PersonContactBlock>
                    <PersonContact href="https://www.linkedin.com/in/max-vynohradov/">LinkedIn</PersonContact>
                    <PersonContact href="https://twitter.com/max_vynohradov">Twitter</PersonContact>
                    <PersonContact href="mailto:vinogradov.max97@gmail.com">Email</PersonContact>
                  </PersonContactBlock>
                  I believe that programming and computer science entirely is my calling in life. I develop my technical
                  and soft skills; get new experience and knowledge to be a role model in my field. Also, I&apos;m big
                  fan of Serverless, AWS Lambdas, Node.js and TypeScript.
                </ProfileParagraphText>
              </ProfileParagraph>
            </ResumeParagraph>
          </ResumeArticle>
        </ResumeSectionContent>
      </ResumeSections>
      <ResumeSections>
        <ResumeSectionTitle>Work Experience</ResumeSectionTitle>
        <ResumeSectionContent>
          <ResumeArticle>
            <ResumeJobHeader>
              <ResumeArticleSubtitle>Senior Software Engineer</ResumeArticleSubtitle>
              <ResumeJobDate>
                Oct 2017
                <br />
                Present
              </ResumeJobDate>
            </ResumeJobHeader>
            <ResumeJobPlace href="http://brocoders.com/">Brocoders | Software Development Company</ResumeJobPlace>
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
            <ResumeJobHeader>
              <ResumeArticleSubtitle>Team Lead, Back-end Developer</ResumeArticleSubtitle>
              <ResumeJobDate>
                Sep 2018
                <br />
                Feb 2020
              </ResumeJobDate>
            </ResumeJobHeader>
            <ResumeJobPlace href="httpa://gokada.ng/">GOKADA- We do delivery now</ResumeJobPlace>

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
            <ResumeJobHeader>
              <ResumeArticleSubtitle>Technical Solution Support Engineer</ResumeArticleSubtitle>
              <ResumeJobDate>
                Jun 2016
                <br />
                Sep 2017
              </ResumeJobDate>
            </ResumeJobHeader>
            <ResumeJobPlace href="https://www.netcracker.com/">Netcracker Technology</ResumeJobPlace>

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
            <ResumeJobHeader>
              <ResumeArticleSubtitle>Senior Technical Assistant</ResumeArticleSubtitle>
              <ResumeJobDate>
                Jun 2016
                <br />
                Sep 2017
              </ResumeJobDate>
            </ResumeJobHeader>
            <ResumeJobPlace href="https://www.netcracker.com/">Sumy State University</ResumeJobPlace>

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
            <ResumeJobHeader>
              <ResumeArticleSubtitle>Sumy State University</ResumeArticleSubtitle>
              <ResumeJobDate>
                2018
                <br />
                2019
              </ResumeJobDate>
            </ResumeJobHeader>
            <ResumeParagraph>Master&apos;s degree. Informatics.</ResumeParagraph>
          </ResumeArticle>
          <ResumeArticle>
            <ResumeJobHeader>
              <ResumeArticleSubtitle>Sumy State University</ResumeArticleSubtitle>
              <ResumeJobDate>
                2014
                <br />
                2018
              </ResumeJobDate>
            </ResumeJobHeader>
            <ResumeParagraph>Bachelor&apos;s degree. Informatics.</ResumeParagraph>
          </ResumeArticle>
        </ResumeSectionContent>
      </ResumeSections>
      <ResumeSections>
        <ResumeSectionTitle>Key Skills</ResumeSectionTitle>
        <ResumeSectionContent>
          <ResumeSkills>
            <ResumeSkillsColumns>
              <div>
                <h4>Tech Stack</h4>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>TypeScript</span>
                <span>REST</span>
                <span>GraphQL</span>
                <span>FaaS</span>
                <span>Serverless</span>
                <span>Express.js</span>
                <span>Nest.js</span>
                <span>Apollo</span>
                <span>React.js</span>
                <span>Gatsby.js</span>
              </div>
              <div>
                <h4>Industry knowledge</h4>
                <span>Agile Methodologies</span>
                <span>Design Patterns</span>
                <span>TDD</span>
                <span>Technical Documentation</span>
                <span>Technical Support</span>
              </div>
              <div>
                <h4>Containerization</h4>
                <span>Docker</span>
                <span>Docker Compose</span>
                <span>AWS ECS</span>
              </div>
              <div>
                <h4>Public Clouds/Platforms</h4>
                <span>Amazon Web Services</span>
                <span>Netlify</span>
              </div>
              <div>
                <h4>IaC</h4>
                <span>AWS CloudFormation</span>
                <span>Pulumi</span>
              </div>
            </ResumeSkillsColumns>
            <ResumeSkillsColumns>
              <div>
                <h4>AWS Cloud Services</h4>
                <span>EC2</span>
                <span>ALB</span>
                <span>Lambda</span>
                <span>S3</span>
                <span>CloudFront</span>
                <span>ECR</span>
                <span>ECS</span>
                <span>API Gateway</span>
                <span>RDS</span>
                <span>Elastic Cache</span>
                <span>Route 53</span>
                <span>DynamoDB</span>
                <span>CloudWatch</span>
                <span>CodeBuild/Pipeline</span>
              </div>
              <div>
                <h4>Databases</h4>
                <span>PostgreSQL</span>
                <span>OracleDB</span>
                <span>MongoDB</span>
                <span>Redis</span>
                <span>DynamoDB</span>
              </div>
              <div>
                <h4>Continuous Integration</h4>
                <span>AWS CodePipeline</span>
                <span>AWS CodeBuild</span>
                <span>GitHub Actions</span>
                <span>Jenkins</span>
              </div>
              <div>
                <h4>Observability</h4>
                <span>Sentry</span>
                <span>AWS Application Insights</span>
                <span>Cadvisor</span>
              </div>
              <div>
                <h4>Logging</h4>
                <span>AWS CloudWatch logs</span>
                <span>Kibana</span>
              </div>
              <div>
                <h4>Scripting</h4>
                <span>shell</span>
                <span>nodejs</span>
                <span>python</span>
              </div>
            </ResumeSkillsColumns>
            <ResumeSkillsColumns>
              <div>
                <h4>Popular APIs & SDK</h4>
                <span>Twilio</span>
                <span>AWS SDK</span>
                <span>Mapbox</span>
                <span>Google Maps</span>
                <span>SendGrid</span>
                <span>Mailgun</span>
                <span>MixPanel</span>
              </div>
              <div>
                <h4>Chat Bots</h4>
                <span>Telegram</span>
                <span>Slack</span>
              </div>
              <div>
                <h4>BI systems</h4>
                <span>Metabase</span>
              </div>
              <div>
                <h4>Testing</h4>
                <span>Jest</span>
                <span>Mocha</span>
                <span>Chai</span>
                <span>Nyc</span>
                <span>Mutation Testing / Stryker</span>
                <span>Testing Coverege</span>
                <span>Ava</span>
                <span>Sinon</span>
                <span>super-agent</span>
                <span>Postman</span>
                <span>Cypress</span>
              </div>
              <div>
                <h4>Codestyle</h4>
                <span>EsLint</span>
                <span>Prettier</span>
                <span>EditorConfig</span>
                <span>JSCPD</span>
              </div>
              <div>
                <h4>Issue Tracking</h4>
                <span>Jira</span>
                <span>GitHub Issues</span>
                <span>Trello</span>
                <span>Waffle</span>
                <span>MeisterTask</span>
              </div>
            </ResumeSkillsColumns>
          </ResumeSkills>
        </ResumeSectionContent>
      </ResumeSections>
      <ResumeSections>
        <ResumeSectionTitle>Also Have Experience With</ResumeSectionTitle>
        <ResumeSectionContent>
          <ResumeSkills>
            <ResumeSkillsColumns>
              <div>
                <h4>Java</h4>
                <span>Java SE</span>
                <span>Java EE</span>
                <span>Servlets</span>
                <span>JSP</span>
                <span>Spring Core</span>
                <span>JMS</span>
                <span>Web Logic</span>
                <span>FindBugs</span>
                <span>PMD</span>
              </div>
            </ResumeSkillsColumns>
            <ResumeSkillsColumns>
              <div>
                <h4>Python</h4>
                <span>Pandas</span>
                <span>pycharts</span>
                <span>Matplotlib</span>
                <span>GBoost</span>
                <span>Flask</span>
                <span>pytest</span>
                <span>pylint</span>
                <span>flake8</span>
              </div>
            </ResumeSkillsColumns>
            <ResumeSkillsColumns>
              <div>
                <h4>Ruby</h4>
                <span>Ruby core</span>
                <span>Ruby On Rails</span>
                <span>Device</span>
                <span>RSpec</span>
                <span>Rubocop</span>
              </div>
              <div>
                <h4>And others...</h4>
                <span>jQuery</span>
              </div>
            </ResumeSkillsColumns>
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

export const query = graphql`
  query MeQuery {
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed {
          height
          width
          src
        }
      }
    }
  }
`;

export default ResumeRoute;
