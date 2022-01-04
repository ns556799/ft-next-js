import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { device } from '~/config/utils';

const ItemContainer = styled.div`
	position: relative;
	padding-bottom: 56%;

	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}
`;
const ItemContent = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 1;
	color: white;
	padding: 20px;
`;
const ItemSection = styled.div`
	font-weight: 600;
	font-size: 16px;
	text-transform: uppercase;
	line-height: 1;

	@media ${device.tablet} {
		margin-bottom: 20px;
	}
`;

const ItemTitle = styled.div`
	text-transform: uppercase;
	line-height: 1;
	@media ${device.tablet} {
		font-size: 36px;
	}
`;

const ItemCta = styled.button`
	padding: 5px 15px;
	background-color: white;
	border-radius: 5px;
	color: #06a88e;
	font-size: 15px;
	font-weight: 500;
	line-height: 1;
	position: absolute;
	bottom: 20px;
`;

const ReportItem = ({ data }) => {
	return (
		<ItemContainer>
			<Image
				src={data.metaData.articleImage}
				layout="fill"
				alt="report item image"
			/>
			<ItemContent>
				<ItemSection>Section {data.section}</ItemSection>
				<ItemTitle>{data.metaData.title}</ItemTitle>
				<Link href={`/report/${data.id}`} passHref>
					<ItemCta>CTA</ItemCta>
				</Link>
			</ItemContent>
		</ItemContainer>
	);
};

export default ReportItem;
