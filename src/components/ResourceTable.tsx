import { ResourceResult } from '../models';
import { transformText } from '../utils/transformText';
import { Button, CardBody, CardFooter, CardHeader, Collapse, Table } from 'reactstrap';
import { ListCardItem, ResourceTitle } from '../styles/styles';
import React, { FC, useState } from 'react';
import { ResourceAttributes, RootAttributes } from '../constants';

interface Props {
    type: string;
    resource: ResourceResult;
}
const ResourceTable: FC<Props> = ({ type, resource }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggle = () => {
		setIsOpen(!isOpen);
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

			<Collapse isOpen={isOpen}>Some Cotent</Collapse>
		</ListCardItem>
	</>);
};

export default ResourceTable;
