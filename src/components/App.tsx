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
			<NavbarBrand href={'/'}> <CuvvaLogo /></NavbarBrand>
			<NavbarText>
				<a
					href="https://palashchhabra.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					{'Palash Chhabra'}</a></NavbarText>
		</NavWrapper>

		<Container className={'pt-5'}>{children}</Container>
	</LayoutWrapper>
);

export default App;
