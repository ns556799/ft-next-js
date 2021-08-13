import { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Content from '~/components/Content';
import Hero from '~/components/Hero';
import ImageEl from '~/components/Image';
import Quote from '~/components/Quote';
import Related from '~/components/Related';
import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';
import FtTracking from '~/config/FtTracking';
import { ARTICLE_URL } from '~/config/utils';
import CtaArticle from '~/components/CtaArticle';
import Footnotes from '~/components/Footnotes';
import ParallaxImage from '~/components/ParallaxImage';
import ReadProgression from '~/components/ReadProgression';
import Metadata from '~/components/Metadata';
import VideoEl from '~/components/Video';
import A2A1 from '~/components/Animation/A2A1';

import background from '~/assets/pageBackground.png';
import AnimCard from '~/components/AnimCard';
import ContentCutout from '~/components/ContentCutout';

const ArticleWrapper = styled.div`
  position: relative;
  background-image: url(${background.src});
  background-size: cover;
  background-position: center center;
`;

export default function ArticlePage({ post, related }) {
  useEffect(() => {
    FtEvents();
    FtAnalytics();
  });

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Metadata data={post.metaData} />
      </Head>
      <Hero tall={false} title={post.title} heroSrc={`/${post.articleImage}`} />
      <ArticleWrapper className="articleWrapper">
        <ReadProgression />
        {post.content.map((el) => {
          switch (el.type) {
            case 'content':
              return <Content key={el.id} id={el.id} data={el.data} />;
            case 'image':
              return <ImageEl key={el.id} data={el.data} />;
            case 'parallax':
              return (
                <ParallaxImage
                  key={el.id}
                  caption={el.caption}
                  data={el.data}
                />
              );
            case 'quote':
              return <Quote key={el.id} data={el.data} />;
            case 'cta':
              return <CtaArticle key={el.id} data={el.data} />;
            case 'notes':
              return <Footnotes key={el.id} data={el.data} />;
            case 'video':
              return <VideoEl key={el.id} data={el.data} />;
            case 'animation':
              return <AnimCard key={el.id} data={el.data} />;
            case 'cutout':
              return <ContentCutout key={el.id} data={el.data} />;
            default:
              break;
          }
        })}
        <Related data={related} />
      </ArticleWrapper>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export async function getStaticProps({ params }) {
  const results = await fetch(ARTICLE_URL);
  const articles = await results.json();

  const post = articles.find((article) => article.id === params.slug);
  const related = articles.filter((article) => {
    return article.id != params.slug;
  });

  return {
    props: { post, related },
  };
}
