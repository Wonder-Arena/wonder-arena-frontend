import styled from 'styled-components';

const LandingPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
`;

const TeamMemberWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2rem;
	background-color: #fff;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.175);
	border-radius: 0.5rem;
	transition: transform 0.2s ease-in-out;
	padding-top: 20px;

	&:hover {
		transform: translateY(-0.25rem);
	}

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: center;

		& > * {
			margin: 0 0.5rem;
		}

		max-width: 20rem;
		padding: 10px;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	// width: 10rem;
	// height: 10rem;
	border-radius: 50%;
	overflow: hidden;
	@media screen and (min-width: 768px) {
		margin-bottom: 1rem;
	}
`;

const TextWrapper = styled.div`
	text-align: center;
	padding: 1rem;
	position: relative;
`;

const SocialMediaWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 0.5rem;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		color: black;
		text-decoration: none;
		border-radius: 50%;
		width: 2.5rem;
		height: 2.5rem;
		background-color: #f5f5f5;
		transition: background-color 0.2s ease-in-out;
		margin: 0 0.5rem;

		&:hover {
			background-color: #e0e0e0;
		}

		img {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
`;
const ImageOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: opacity 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}

	img {
		width: 1.5rem;
		height: 1.5rem;
	}
`;

const TeamMembers = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	justify-content: center;
	max-width: 300px;

	flex-wrap: wrap;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		width: auto;
		max-width: 100%;
	}
`;

const InfoWrapper = styled.div`
	max-width: 80%;
	text-align: center;
	margin: 0 auto;
	margin-bottom: 2rem;
	color: white;

	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1rem;
		line-height: 1.5;
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	@media (min-width: 768px) {
		max-width: 50%;
		text-align: left;
	}
`;

export {
	LandingPageWrapper,
	TeamMemberWrapper,
	ImageWrapper,
	TextWrapper,
	SocialMediaWrapper,
	ImageOverlay,
	TeamMembers,
	InfoWrapper,
};
