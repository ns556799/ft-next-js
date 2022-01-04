import styled from 'styled-components';
import { device } from '~/config/utils';
import ReportItem from './ReportItem';

const ReportWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	max-width: 1220px;
	padding: 5px;
	margin: 0 auto;

	@media ${device.tablet} {
		flex-direction: row;
		padding: 0 20px;
	}
`;

const ReportWrapperContent = styled.div`
	max-width: 100%;
	flex-basis: 100%;

	@media ${device.tablet} {
		flex-basis: 35%;
		max-width: 35%;
		padding-right: 30px;
	}
`;
const ReportWrapperTitle = styled.h2`
	font-weight: 400;
	text-transform: uppercase;
	line-height: 1;
	color: #06a88e;
	margin-top: 0;
	position: relative;
	padding-bottom: 15px;

	&:after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		width: 110px;
		height: 2px;
		background-color: #707070;
	}
	@media ${device.tablet} {
		font-size: 44px;
	}
`;

const ReportWrapperDesc = styled.div`
	font-weight: 300;
	line-height: 1;

	@media ${device.tablet} {
		font-size: 24px;
	}
`;

const ReportItemContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-row: auto auto;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	max-width: 100%;
	flex-basis: 100%;

	@media ${device.tablet} {
		flex-basis: 65%;
		max-width: 65%;
	}
`;

const ReportContainer = ({ data }) => {
	return (
		<ReportWrapper>
			<ReportWrapperContent>
				<ReportWrapperTitle>Report Title goes here</ReportWrapperTitle>
				<ReportWrapperDesc>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore.
				</ReportWrapperDesc>
			</ReportWrapperContent>
			<ReportItemContainer>
				{data.map((report, i) => {
					return <ReportItem key={i} data={report} />;
				})}
			</ReportItemContainer>
		</ReportWrapper>
	);
};

export default ReportContainer;
