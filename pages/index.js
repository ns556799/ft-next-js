import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Metadata from '~/components/Metadata';
import { ARTICLE_URL, FEATURED_URL, HOMEPAGE_URL } from '~/config/utils';
import { device } from '~/config/utils';
import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';
import ArticleCard from '~/components/ArticleCard';

const ArticleCardContainer = styled.div`
	@media ${device.tablet} {
		padding: 15px 20px;
	}
`;

export default function Home({}) {
	useEffect(() => {
		FtEvents();
		FtAnalytics();
	}, []);

	return (
		<>
			<Head>
				<title></title>
				<Metadata title={true} data={null} />
			</Head>

			<ArticleCardContainer>
				{/* <ArticleCard id="the-art-of-travel" /> */}
			</ArticleCardContainer>
		</>
	);
}
export async function getStaticProps(context) {
	const res = await fetch(HOMEPAGE_URL);

	return {
		props: {},
	};
}
