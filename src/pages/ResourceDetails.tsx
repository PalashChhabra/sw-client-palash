import { Istate } from '../models';
import { fetchResource } from '../actions';
import { useLocation } from 'react-router-dom';
import React, { FC, useEffect, useState } from 'react';
import { Button, CardBody, CardFooter, CardHeader, Collapse } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { ColouredIcon, ListCardItem, ResourceTitle, Title } from '../styles/styles';
import { RootAttributes } from '../constants';
import IonIcon from '@reacticons/ionicons';

interface LocationState {
      type: string;
}
const ResourceDetails: FC = () => {
	const location = useLocation<LocationState>();
	const { type } = location.state || { type: '' };
	const dispatch = useDispatch();
	const resources = useSelector((state: Istate) => state.resource);

	// const resourceData : ResourceResult[] = resources.payload || [];

	const [isOpen, setIsOpen] = useState(false);

  	const toggle = () => setIsOpen(!isOpen);

	useEffect(() => {
		dispatch(fetchResource(type));
	}, [dispatch]);

	return (<>
		{resources.isLoading ? (
			<Loader />
		) : (
			<>
				<Title><span className="pr-3">{`${type} List`}</span>
					<ColouredIcon color={RootAttributes[type].color}
						key={type}
					>
						<IonIcon
							name={RootAttributes[type].icon}
						/>
					</ColouredIcon>
				</Title>
				<ListCardItem>
					<CardHeader><ResourceTitle color={RootAttributes[type].color}>{'Darth Vader'}</ResourceTitle></CardHeader>
					<CardBody />
					<CardFooter>
						<Button color="primary"
							onClick={toggle}
							style={{ marginBottom: '1rem' }}
						>Toggle</Button>
					</CardFooter>

					<Collapse isOpen={isOpen}>Some Cotent</Collapse>
				</ListCardItem>
			</>) }
	</>);
};

export default ResourceDetails;
