import {
  faFacebook,
  faLinkedin,
  faRedditAlien,
  faTelegram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import styled from 'styled-components';

type SocialHocComponentType =
  | typeof FacebookShareButton
  | typeof LinkedinShareButton
  | typeof RedditShareButton
  | typeof TwitterShareButton
  | typeof TelegramShareButton
  | typeof WhatsappShareButton;

const SocialHoc = (component: SocialHocComponentType) => styled(component)<{ color: string }>`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 0.5rem 0.25rem;
  padding: 0.5rem 0.8rem;
  border-width: 1px;
  border-radius: 290486px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  color: ${props => props.color};
  border-color: ${props => props.color};
  font-size: 16px;
  &:hover {
    background-color: ${props => props.color};
    border-color: ${props => props.color};
    color: #fff;
    border-radius: 290486px;
  }
`;

const SocialIconWrapper = styled.span`
  padding-right: 6px;
`;

const ShareSectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const StyledFacebookShareButton = SocialHoc(FacebookShareButton);
const StyledLinkedinShareButton = SocialHoc(LinkedinShareButton);
const StyledRedditShareButton = SocialHoc(RedditShareButton);
const StyledTwitterShareButton = SocialHoc(TwitterShareButton);
const StyledTelegramShareButton = SocialHoc(TelegramShareButton);
const StyledWhatsappShareButton = SocialHoc(WhatsappShareButton);

interface ShareBlockProps {
  socialConfig: {
    twitterHandle: string;
    config: {
      url: string;
      title: string;
    };
  };
  tags: string[];
}

export const ShareSocialBlock: FC<ShareBlockProps> = ({ socialConfig, tags }: ShareBlockProps) => {
  return (
    <>
      <ShareSectionTitle>Share</ShareSectionTitle>
      <StyledFacebookShareButton url={socialConfig.config.url} color="#3b5998" resetButtonStyle={false}>
        <SocialIconWrapper>
          <FontAwesomeIcon icon={faFacebook} />
        </SocialIconWrapper>
        <span className="text">Facebook</span>
      </StyledFacebookShareButton>
      <StyledTwitterShareButton
        url={socialConfig.config.url}
        color="#1da1f2"
        title={socialConfig.config.title}
        resetButtonStyle={false}
        via={socialConfig.twitterHandle.split('@').join('')}
        hashtags={tags}
      >
        <SocialIconWrapper>
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIconWrapper>
        <span className="text">Twitter</span>
      </StyledTwitterShareButton>
      <StyledTelegramShareButton
        url={socialConfig.config.url}
        color="#0088cc"
        title={socialConfig.config.title}
        resetButtonStyle={false}
      >
        <SocialIconWrapper>
          <FontAwesomeIcon icon={faTelegram} />
        </SocialIconWrapper>
        <span className="text">Telegram</span>
      </StyledTelegramShareButton>
      <StyledLinkedinShareButton
        url={socialConfig.config.url}
        color="#0077b5"
        title={socialConfig.config.title}
        resetButtonStyle={false}
      >
        <SocialIconWrapper>
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIconWrapper>
        <span className="text">LinkedIn</span>
      </StyledLinkedinShareButton>
      <StyledRedditShareButton
        url={socialConfig.config.url}
        color="#ff4500"
        title={socialConfig.config.title}
        resetButtonStyle={false}
      >
        <SocialIconWrapper>
          <FontAwesomeIcon icon={faRedditAlien} />
        </SocialIconWrapper>
        <span className="text">Reddit</span>
      </StyledRedditShareButton>
      <StyledWhatsappShareButton
        url={socialConfig.config.url}
        color="#128c7e"
        title={socialConfig.config.title}
        resetButtonStyle={false}
      >
        <SocialIconWrapper>
          <FontAwesomeIcon icon={faWhatsapp} />
        </SocialIconWrapper>
        <span className="text">WhatsApp</span>
      </StyledWhatsappShareButton>
    </>
  );
};
