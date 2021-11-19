import IonIcon from '@reacticons/ionicons';
import { Loader } from '../components/Loader';
import ResourceTable from '../components/ResourceTable';
import { fetchResource } from '../actions';
import { useLocation } from 'react-router-dom';
import { Button, Form, Input } from 'reactstrap';
import { ColouredIcon, Title } from '../styles/styles';
import { Istate, ResourceResult } from '../models';
import React, { FC, useEffect, useState } from 'react';
import { RootAttributes, RootKeys } from '../constants';
import { useDispatch, useSelector } from 'react-redux';

interface LocationState {
      type: string;
}
const ResourceDetails: FC = () => {
	const location = useLocation<LocationState>();
	const { type } = location.state || { type: RootKeys.People };
	const dispatch = useDispatch();
	const resources = useSelector((state: Istate) => state.resource);

	const resourceData : ResourceResult[] = resources.payload || [];

	const [resourceName, setResourceName] = useState('');
	const [filteredData, setFilteredData] = useState(resourceData);

	const onResourceNameChange = (e: any) => {
		setResourceName(e.target.value);
	};

	useEffect(() => {
		dispatch(fetchResource(type));
	}, [dispatch]);

	useEffect(() => {
		if (resourceName.length) {
			const filteredResource = resourceData.filter(resource =>
				// eslint-disable-next-line max-len
				resource.name?.toLowerCase().includes(resourceName.toLowerCase()) || resource.title?.toLowerCase().includes(resourceName.toLowerCase()),
			);

			setFilteredData(filteredResource);
		} else {
			setFilteredData(resourceData);
		}
	}, [resourceName, resources.isLoading]);

	return (<>
		{resources.isLoading ? (
			<Loader />
		) : (
			<>
				{resourceData.length ? (
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
						<div className="pb-5">
							<Form className="text-center">
								<Input
									className="w-50 h-50 d-inline mt-1 mr-2"
									onChange={onResourceNameChange}
									placeholder="Filter by name"
									type="text"
									value={resourceName}
								/>

								<Button color="primary"
									onClick={e => {
										e.preventDefault();
										setResourceName('');
									}}
									outline
									size="sm"
								>
									{'Reset filter'}
								</Button>
							</Form>
						</div>
						{filteredData.map((resource: ResourceResult, index: number) => (
							<ResourceTable key={index}
								resource={resource}
								type={type}
							/>
						))}
					</>
				) : ('No Data Found')}
			</>) }
	</>);
};

export default ResourceDetails;
