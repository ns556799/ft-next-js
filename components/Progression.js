import styled from 'styled-components';

const Container = styled.div`
	.progress-indicator {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		position: relative;
		opacity: 1;
		transition: background-color 0.5s, opacity 0.5s;
		background-color: #990f3d;
	}

	.progress-indicator__bar,
	.progress-indicator__slice {
		top: 2px;
		left: 2px;
		clip: rect(0, 36px, 36px, 18px);
		width: 36px;
		height: 36px;
		position: absolute;
		border-radius: 50%;
		transition: transform 0.25s linear;
	}

	.progress-indicator__overlay {
		background-color: #990f3d;
		width: calc(100% - 8px);
		height: calc(100% - 8px);
		position: absolute;
		left: 4px;
		top: 4px;
		border-radius: 50%;
		background-color: #f2dfce;
		transition: background-color 0.5s, color 0.5s;
	}
`;

const Progression = () => {
	return (
		<Container>
			<div className="progress-indicator progress-indicator--in-progress">
				<div
					className="progress-indicator__slice"
					style={{ transform: 'rotate(25.7673deg)' }}
				>
					<div
						className="progress-indicator__bar"
						style={{ transform: 'rotate(25.7673deg)' }}
					></div>
				</div>
				<div className="progress-indicator__slice">
					<div
						className="progress-indicator__bar"
						style={{ transform: 'rotate(51.53473deg)' }}
					></div>
				</div>
				<div className="progress-indicator__overlay">
					<span className="progress-indicator__icon--complete"></span>
				</div>
			</div>
		</Container>
	);
};

export default Progression;
