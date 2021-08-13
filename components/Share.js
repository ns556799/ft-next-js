import styled from 'styled-components';
import { device } from '../config/utils';
import logo from '../assets/ida-logo-white.svg';
import instagram from '../assets/insta.svg';
import linkedIn from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import youTube from '../assets/youtube.svg';

const ShareContainer = styled.div`
  width: 100%;
  background-color: #404545;
  padding: 100px 0;
`;
const ShareWrapper = styled.div``;
const ShareLogo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
const ShareLogoImage = styled.img`
  max-width: 300px;
  width: 100%;
`;
const ShareSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ShareSocialItem = styled.a`
  margin: 0 10px;
`;
const ShareSocialItemImage = styled.img`
  filter: brightness(0) invert(1);
  width: 40px;

  @media ${device.tablet} {
    width: initial;
  }

  &:hover {
    filter: initial;
  }
`;

const Share = () => {
  return (
    <ShareContainer>
      <ShareWrapper>
        <ShareLogo>
          <ShareLogoImage src={logo.src} />
        </ShareLogo>
        <ShareSocial>
          <ShareSocialItem href="https://www.instagram.com/idaireland/">
            <ShareSocialItemImage src={instagram.src} />
          </ShareSocialItem>
          <ShareSocialItem href="https://twitter.com/IDAIRELAND/">
            <ShareSocialItemImage src={twitter.src} />
          </ShareSocialItem>
          <ShareSocialItem href="https://www.linkedin.com/company/ida-ireland/">
            <ShareSocialItemImage src={linkedIn.src} />
          </ShareSocialItem>
          <ShareSocialItem href="https://www.youtube.com/user/investireland/">
            <ShareSocialItemImage src={youTube.src} />
          </ShareSocialItem>
        </ShareSocial>
      </ShareWrapper>
    </ShareContainer>
  );
};

export default Share;
