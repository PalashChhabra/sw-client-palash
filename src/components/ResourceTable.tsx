import OtherDetailsModal from './OtherDetailsCard';
import { ResourceResult } from '../models';
import { transformText } from '../utils/transformText';
import { Button, CardBody, CardFooter, CardHeader, Collapse, Table } from 'reactstrap';
import { ListCardItem, OtherDetails, ResourceTitle } from '../styles/styles';
import React, { FC, useState } from 'react';
import { ResourceAttributes, RootAttributes } from '../constants';
interface Props {
    type: string;
    resource: ResourceResult;
}
interface SelectedDetail {
    openModal : boolean;
    selectedDetailUrl: string;
}
const ResourceTable: FC<Props> = ({ type, resource }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isActive, setIsActive] = useState({ active: '' });
	const [selectedDetail, setSelectedDetail] = useState<SelectedDetail>({ openModal: false, selectedDetailUrl: '' });

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const showDetails = async (url: string) => {
		setIsActive({ active: url });
		setSelectedDetail({ openModal: true, selectedDetailUrl: url });
	};

	const getIteratorKey = (type: string): string => ResourceAttributes[type].otherInfoKey;
	const getIteratorValues = (resource: ResourceResult): string[] => {
		const values = resource[ResourceAttributes[type].otherInfoKey];

		if (Array.isArray(values))
			return values;

		return [values];
	};

	return (<>
    		<ListCardItem>
			<CardHeader>
				<ResourceTitle
					color={RootAttributes[type].color}
				>
					{resource.name ? resource.name : resource.title}
				</ResourceTitle>
			</CardHeader>
			<CardBody className="p-2">
				<Table borderless
					size="sm"
				>
					<thead>
						<tr>
							{ResourceAttributes[type].keys.map((keyName : string, index: number) => (
								<th key={index}><span>{transformText(keyName)}</span></th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							{ResourceAttributes[type].keys.map((keyName : string, index: number) => (
								<td key={index}><span>{resource[keyName]}</span></td>
							))}
						</tr>
					</tbody>
				</Table>
			</CardBody>
			<CardFooter>
				<Button color="info"
					onClick={toggle}
				>{isOpen ? 'Collapse' : 'Expand'}</Button>
			</CardFooter>

			<Collapse isOpen={isOpen}>
				<h4 className="pl-4 pt-4">{transformText(getIteratorKey(type))}</h4>
				<div className="mb-4">
					{ getIteratorValues(resource).length ? getIteratorValues(resource).map((value, index) => (
						<div
							className="pl-4 d-inline-flex"
							key={index}
							onClick={() => showDetails(value)}
						>
							<OtherDetails className={`${isActive.active === value ? 'active' : ''}`}>
								{`${transformText(getIteratorKey(type))} Detail ${index + 1}`}
							</OtherDetails>
						</div>
					)) : <div className="pl-4 d-inline-flex">{'No Detailed Information Exists'}</div>}
				</div>

			</Collapse>
			{ selectedDetail.openModal ? (<OtherDetailsModal showTable={selectedDetail.openModal}
				url={selectedDetail.selectedDetailUrl}// eslint-disable-next-line no-mixed-spaces-and-tabs
			                              />) : null
			}
		</ListCardItem>

	</>);
};

export default ResourceTable;
