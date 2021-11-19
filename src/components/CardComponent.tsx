import { APPROUTES } from '../app-routes/routes';
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
import { RootAttributes } from '../constants';
import { ColouredIcon, RootCardItem } from '../styles/styles';
import React, { FC, useState } from 'react';
import { getFavs, toggleFav } from '../utils/storageFunctions';

interface Props {
    type: string;
  }

const RootCard: FC<Props> = ({ type }) => {
	const [favs, setFavs] = useState<string[]>(getFavs());
	const toggleFavorite = (type: string) => {
		toggleFav(type);
		setFavs(getFavs());
	};

	return (<>	<RootCardItem className="hoverable">
		<div className="card-body">
			<Link to={{ pathname: APPROUTES.Resource, state: { type } }}>
				<div className="row">
					<div className="col-6">
						<div className="icon-big text-center">
							{
								<ColouredIcon color={RootAttributes[type].color}
									key={type}
								>
									<IonIcon
										name={RootAttributes[type].icon}
									/>
								</ColouredIcon>
							}
						</div>
					</div>
					<div className="col-6 align-self-center">
						<div className="description text-center">
							<h4 className="card-title">{type}</h4>
						</div>
					</div>
				</div>
			</Link>
		</div>

		<div className="card-footer">
			<hr />
			<div className="action"
				onClick={e => {
					e.stopPropagation();
					toggleFavorite(type);
				}}
			>
				     {favs.includes(type) ? (
					<><ColouredIcon color="red">	<IonIcon name={'heart-circle'}/> </ColouredIcon>
						<span>{'Bookmarked!'}</span></>
				) : (
					<>
						<IonIcon name={'heart-outline'}/>
						<span>{'Bookmark'}</span>
					</>
				)}
			</div>
		</div>
	</RootCardItem></>);
};

export default RootCard;
