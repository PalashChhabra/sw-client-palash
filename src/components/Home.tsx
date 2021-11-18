
import { Istate } from '../models';
import { Loader } from './Loader';
import RootCard from './CardComponent';
import { fetchRoots } from '../actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
	const dispatch = useDispatch();
	const roots = useSelector((state: Istate) => state.roots);

	useEffect(() => {
		dispatch(fetchRoots());
	}, [dispatch]);

	const rootTypes = Object.keys(roots.payload || {});

	return (
		<>
			{roots.isLoading ? (
				<Loader />
			) : (
				<div className="row">
					{// @ts-ignore
						rootTypes.map((type: string, index: number) => (
							<div className="col-lg-4 col-sm-6"
								key={index}
							>
								<RootCard type={type}/>
							</div>
						),
						)}
				</div>) }
		</>

	);
};

export default Home;
