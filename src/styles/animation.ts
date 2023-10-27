import { keyframes } from 'styled-components';

export const AnimationFadeIn = keyframes`
	0% {
		opacity: 0;
		transform: translateX(50px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;
