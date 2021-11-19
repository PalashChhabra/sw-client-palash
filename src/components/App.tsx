import { APPROUTES } from '../app-routes/routes';
import { ReactComponent as CuvvaLogo } from '../assets/icons/cuvva.svg';
import { Container, NavbarBrand, NavbarText } from 'reactstrap';
import { LayoutWrapper, NavWrapper } from '../styles/styles';
import React, { FC } from 'react';
interface Props {
  children?: any;
}

const App: FC<Props> = ({ children }) => (
	<LayoutWrapper>
		<NavWrapper>
			<NavbarBrand href={APPROUTES.Home}> <CuvvaLogo /></NavbarBrand>
			<NavbarText>
				<a
					href="https://palashchhabra.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					{'Palash Chhabra'}</a></NavbarText>
		</NavWrapper>

		<Container className={'p-5'}
			fluid={'true'}
		>{children}</Container>
	</LayoutWrapper>
);

export default App;
