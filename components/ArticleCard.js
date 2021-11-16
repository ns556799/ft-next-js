import Link from 'next/link';
import styled from 'styled-components';
import { device } from '~/config/utils';

const ArticleCardContainer = styled.div`
  margin-bottom: 30px;
  a {
    text-decoration: none;
  }
`;



const ArticleCard = ({ data }) => {
  return (
    <ArticleCardContainer>
      <Link href={`/article/`} passHref>
        <a>
        </a>
      </Link>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
