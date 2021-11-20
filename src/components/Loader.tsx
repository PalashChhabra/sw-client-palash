import { Loading } from '../styles/styles';
import { ReactComponent as LoadingIcon } from '../assets/icons/loading.svg';
import { Spinner } from 'reactstrap';
import React, { FC } from 'react';
interface props {
	onlySpinner?: boolean;
}

export const Loader: FC<props> = ({ onlySpinner }) => (
	<Loading>
		{onlySpinner ? null : <LoadingIcon />
		}
		<Spinner animation="border"
			className="loadingSpinner"
			variant="info"
		/>
	</Loading>
);
