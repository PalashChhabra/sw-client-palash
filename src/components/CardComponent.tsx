import IonIcon from '@reacticons/ionicons';
import { RootKeys } from '../models';
import { ColouredIcon, RootCardItem } from '../styles/styles';
import React, { FC } from 'react';

interface RootIconSet {
	keyName : RootKeys;
	icon : React.ComponentProps<typeof IonIcon>['name'];
    color?: string;
}

interface Props {
    type: string;
  }

const RootCard: FC<Props> = ({ type }) => {
	const iconSet : RootIconSet[] = [
		{ keyName: RootKeys.People, icon: 'people', color: 'orange' },
		{ keyName: RootKeys.Films, icon: 'film', color: 'grey' },
		{ keyName: RootKeys.Planets, icon: 'planet', color: 'blue' },
		{ keyName: RootKeys.Species, icon: 'skull', color: 'green' },
		{ keyName: RootKeys.Starships, icon: 'rocket', color: 'purple' },
		{ keyName: RootKeys.Vehicles, icon: 'car', color: 'red' },
	];

	return (<>	<RootCardItem>
		<div className="card-body">
			<div className="row">
				<div className="col-6">
					<div className="icon-big text-center">
						{iconSet
							.filter((arrItem : RootIconSet) => arrItem.keyName === type)
							.map((filterItem, index) => (
								<ColouredIcon color={filterItem.color}
									key={index}
								>
									<IonIcon
										name={filterItem.icon}
									/>
								</ColouredIcon>
							))}
					</div>
				</div>
				<div className="col-6 align-self-center">
					<div className="description text-center">
						<h4 className="card-title">{type}</h4>
					</div>
				</div>
			</div>
		</div>
		<div className="card-footer">
			<hr />
			<div className="action">
				<IonIcon name={'heart-circle'}/>
				{'Bookmark'}</div>
		</div>
	</RootCardItem></>);
};

export default RootCard;
