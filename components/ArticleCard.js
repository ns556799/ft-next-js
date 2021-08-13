import Link from 'next/link';
import styled from 'styled-components';
import { device } from '~/config/utils';

const ArticleCardContainer = styled.div`
  margin-bottom: 30px;
  a {
    text-decoration: none;
  }
`;

const ArticleImageWrapper = styled.div`
  position: relative;

  &:after {
    content: '';
    display: block;
    padding-bottom: 50%;
  }
`;
const ArticleContent = styled.div`
  padding: 10px;
`;

const ArticleContentType = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 10px;
  color: white;
  background-color: #009b3a;
  padding: 5px 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 10;
`;
const ArticleImage = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;
const ArticleTitle = styled.div`
  font-family: 'Open Sans', sans-serif;
  color: #009b3a;
  line-height: 1.2;
  font-size: 25px;
  margin-bottom: 10px;

  @media ${device.tablet} {
    font-size: 27px;
    min-height: 100px;
  }
`;
const ArticleDesc = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  line-height: 1.4;
  margin-bottom: 20px;
  color: #404545;

  @media ${device.tablet} {
    font-size: 18px;
    min-height: 100px;
  }
`;

const ArticleCTA = styled.button`
  text-transform: uppercase;
  background: #f8971d;
  border: 2px solid #009b3a;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 10px 15px;
  pointer-events: auto;
  cursor: pointer;
  margin: 0;
  position: relative;
  display: inline-block;
  overflow: hidden;
  color: #fff;

  span {
    position: relative;
    color: #009b3a;
  }

  &:before {
    content: '';
    background: white;
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    border: 2px solid #f8971d;

    span {
      color: white;
      transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    }
    &:before {
      transform: translate3d(0, -100%, 0);
    }
  }
`;

const ArticleVideo = styled.img``;

const ArticleCard = ({ data }) => {
  const { id, contentType, title, desc, hasVideo, articleImage, ctaText } =
    data;
  return (
    <ArticleCardContainer>
      <Link href={`/article/${id}`} passHref>
        <a>
          <ArticleImageWrapper>
            <ArticleContentType>{contentType}</ArticleContentType>
            <ArticleImage src={articleImage} />
            {hasVideo ? <ArticleVideo /> : null}
          </ArticleImageWrapper>
          <ArticleContent>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleDesc>{desc}</ArticleDesc>

            <ArticleCTA>
              <span>{ctaText}</span>
            </ArticleCTA>
          </ArticleContent>
        </a>
      </Link>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
