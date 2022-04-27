import { APPROUTES } from '../app-routes/routes';
import { ReactComponent as BrandLogo } from '../assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import { Container, NavItem, NavbarBrand } from 'reactstrap';
import { LayoutWrapper, NavWrapper } from '../styles/styles';
import React, { FC } from 'react';
interface Props {
  children?: any;
}

const App: FC<Props> = ({ children }) => (
	<LayoutWrapper>
		<NavWrapper>
			<NavbarBrand href={APPROUTES.Home}> <BrandLogo /></NavbarBrand>
			<Link to={{ pathname: APPROUTES.Home }}>{'Home'}</Link>
			<NavItem style={{ listStyleType: 'none' }}>
				<a
					href="https://palashchhabra.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					{'Palash Chhabra'}</a></NavItem>
		</NavWrapper>

		<Container className={'p-5'}
			fluid
		>{children}</Container>
	</LayoutWrapper>
);

export default App;
