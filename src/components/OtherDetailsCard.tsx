/* eslint-disable no-negated-condition */
/* eslint-disable no-nested-ternary */
import { DetailsCard } from '../styles/styles';
import { Istate } from '../models';
import { Loader } from './Loader';
import { fetchResourceDetail } from '../actions';
import { transformText } from '../utils/transformText';
import { Button, CardBody, CardFooter } from 'reactstrap';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-undef
const starwars = require('../assets/icons/star-wars-logo.png');

interface Props {
    showTable: boolean;
	url: string
}

const OtherDetailsCard: FC<Props> = ({ showTable, url }) => {
	const dispatch = useDispatch();
	const otherDetails = useSelector((state: Istate) => state.resourceDetail);

	const otherDetailsDataKeys = Object.keys(otherDetails.payload || {});

	const [hideTable, setHideTable] = useState(showTable);

	const toggle = () => {
		setHideTable(false);
	};

	useEffect(() => {
		dispatch(fetchResourceDetail(url));
		setHideTable(showTable);
	}, [dispatch, showTable, url]);

	return (<><div className="container">
		{ !otherDetails.isLoading ? hideTable ? <DetailsCard>
			<CardBody>
				<div className="row">
					<div className="col-lg-6">
						<ul>
							{otherDetailsDataKeys.map((keyName, index) => (
								!Array.isArray(otherDetails.payload[keyName]) ? <li key={index}>
									<span>{transformText(keyName)}</span>
									{' : '}
									<span>{otherDetails.payload[keyName]}</span></li> :	null
							))}
						</ul>
					</div>
					<div className="col-lg-6 align-self-center">
						<img alt="Star Wars"
							className="h-auto mw-100"
							src={starwars.default}

						/>
					</div>
				</div>
			</CardBody>
			<CardFooter>
				<Button color="secondary"
					onClick={toggle}
				>{'Hide Info'}</Button>
			</CardFooter>
		</DetailsCard> : <></> : <Loader />
		}</div>
	</>);
};

export default OtherDetailsCard;
