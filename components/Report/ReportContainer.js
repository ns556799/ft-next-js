import styled from 'styled-components';

const ReportWrapper = styled.div``;
const ReportWrapperContent = styled.div``;
const ReportWrapperTitle = styled.h2``;
const ReportWrapperDesc = styled.div``;

const ReportItemContainer = styled.div``;

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
			<ReportItemContainer></ReportItemContainer>
		</ReportWrapper>
	);
};

export default ReportContainer;
