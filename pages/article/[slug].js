import { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';
import { ARTICLE_URL } from '~/config/utils';

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
				{/* <Metadata data={post.metaData} /> */}
			</Head>
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
