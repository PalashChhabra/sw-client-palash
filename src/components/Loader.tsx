/* eslint-disable no-undef */
/* eslint-disable global-require */
import { Loading } from '../styles/styles';
import React from 'react';

export const Loader = () => (
	<Loading>
		<img
			alt="Loader"
			src={require('../assets/icons/loading.svg').default}
		/>
	</Loading>
);
