import IonIcon from '@reacticons/ionicons';
import { Loader } from '../components/Loader';
import ResourceTable from '../components/ResourceTable';
import { fetchResource } from '../actions';
import { useLocation } from 'react-router-dom';
import { ColouredIcon, Title } from '../styles/styles';
import { Istate, ResourceResult } from '../models';
import React, { FC, useEffect } from 'react';
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

	useEffect(() => {
		dispatch(fetchResource(type));
	}, [dispatch]);

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
						{resourceData.map((resource: ResourceResult, index: number) => (
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
