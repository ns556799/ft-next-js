import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Metadata from '~/components/Metadata';
import { ARTICLE_URL, HOMEPAGE_URL, REPORT_URL } from '~/config/utils';
import { device } from '~/config/utils';
import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';
import ArticleCard from '~/components/ArticleCard';
import HeroBanner from '~/components/HeroBanner';

const Introduction = styled.div`
	max-width: 1220px;
	padding: 5px;
	margin: 0 auto;
	@media ${device.tablet} {
		padding: 50px 20px;
	}
`;

const IntroductionTitle = styled.h1`
	font-family: museo-sans, sans-serif;
	color: #06a88e;
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;
	@media ${device.tablet} {
		font-size: 55px;
	}
`;
const IntroductionContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
`;

const IntroductionContent = styled.div``;

const IntroductionImageWrapper = styled.div`
	width: 100%;
	display: block;
	padding-bottom: 56%;
	background-color: black;
`;

export default function Home({ reportData }) {
	useEffect(() => {
		FtEvents();
		FtAnalytics();
	}, []);

	return (
		<>
			<Head>
				<title>[Title]</title>
				<Metadata title={true} data={null} />
			</Head>
			<HeroBanner title={'Campaign Title goes here'} />
		</>
	);
}
export async function getStaticProps(context) {
	// const res = await fetch(HOMEPAGE_URL);
	const fetchReport = await fetch(REPORT_URL);

	const reportData = await fetchReport.json();
	return {
		props: { reportData },
	};
}
