import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Metadata from '~/components/Metadata';
import { ARTICLE_URL, FEATURED_URL, HOMEPAGE_URL } from '~/config/utils';
import { device } from '~/config/utils';
import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';
import HeroImage from '~/components/HeroImage';
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

			<HeroImage
				imgSrc="https://ft.com/partnercontent/marriott/hero.jpeg"
				title="Hello this is a title"
				desc="This is a description"
			/>
			<ArticleCardContainer>
				<ArticleCard
					imgSrc="https://ft.com/partnercontent/marriott/SingaHero.jpg"
					title="The art of travel"
					country="singapore"
					id="the-art-of-travel"
				/>
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
