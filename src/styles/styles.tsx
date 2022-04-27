/* eslint-disable max-len */
import { breakpoints } from './breakpoints';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    width: 100%;
  height: 100%;
  box-sizing: border-box;
}
`;

export const LayoutWrapper = styled.div`
  background: radial-gradient(circle farthest-side at left bottom, rgb(166, 68, 226) 5.93%, rgba(101, 68, 226, 0.3) 59.9%, rgba(101, 68, 226, 0) 100%), rgb(5, 2, 36);
  min-height: 100vh;
  width: 100vw;
  --centerHeight: 4rem;
`;

export const Title = styled.div`
text-transform: capitalize;
 color: #fff;
 margin-bottom: 20px;
 font-size: 4rem;
 justify-content:center;
 text-align:center;
 @media ${breakpoints.tablet} {
  font-size: 2rem;
}
@media ${breakpoints.mobile} {
  font-size: 1rem;
}
`;

export const NavWrapper = styled.nav`
background-color: #fff;
position: sticky;
top: 0;
left: 0;
width: 100%;
height: var(--centerHeight);
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: .5rem 1rem;
z-index: 999;
svg {
    width: 5rem;
    transition: all 0.3s;
    height: 100%;
    object-fit: contain;
    :hover {
      transform: scale(1.05);
    }
}
a {
    color: #0f2c65
}
a:hover {
    color: #ff8ba7;
    text-decoration: none;
    transform: scale(1.05);
}
`;

export const Loading = styled.div`
z-index: 999;
position: fixed;
width: 100%;
height: 100%;
top: var(--centerHeight);
left: 0;
display: grid;
place-content: center;
box-sizing: border-box;
  svg {
    width: 15rem;
    height: 15rem;
    object-fit: contain;
    padding: 5%;
    box-sizing: border-box;
    path {
      fill: #fff;
    }
}
.loadingSpinner {
  color: orange;
  margin-top: 50px;
  margin-left: 80px;
  height: 70px;
  width: 70px;
}
`;

export const CardItem = styled.div`
display: flex;
flex-direction: column;
min-width: 0;
background-clip: border-box;
border: 5px solid transparent;
border-radius:  1em;
background-color: #fff;
margin-bottom: 30px;`;

export const RootCardItem = styled(CardItem)`
&.hoverable:hover {
  transform: scale(1.05);
}
a:hover {
  text-decoration: none;
}

&:before {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -1;
  border-radius: inherit;
  background: linear-gradient(to right,#ff8ba7, #F9BC41);
}
&:hover .action {
  color: #333!important;
}
.card-body {
  cursor: pointer;
    padding: 15px 15px 10px;
    & .description {
        font-size: 1.5rem;
        text-align: right;
        margin-bottom: 0;
        & .card-title {
            margin: 0;
            color: #333;
            font-weight: 300;
            text-transform: uppercase;
            @media ${breakpoints.tablet} {
              font-size: 1rem;
            }
            @media ${breakpoints.mobile} {
              font-size: 0.75rem;
            }
        }
    }
    & .icon-big {
        font-size: 3em;
        min-height: 64px;
        font-weight: 700;
        line-height: 59px;
    }
}
.card-footer {
    padding: 0 15px 10px;
    background-color: transparent;
    line-height: 30px;
    border-top: none!important;
    font-size: 14px;
    & hr {
        margin-top: 5px;
        margin-bottom: 5px;
        }
    & .action {
      cursor: pointer;
        color: #a9a9a9;
        display: inline-block;
        & div{
            width: 18px!important;
            padding-right: 10px;
        }

    }
}
`;

export const ListCardItem = styled(CardItem)`
background: 
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(to right, rgb(5, 2, 36), rgb(166, 68, 226)) border-box;
  border-radius: 1em;
`;

export const ResourceTitle = styled.h6`
text-transform:capitalize;
font-weight:600;
color: ${props => (props.color || 'black')}
font-size: 2rem;
@media ${breakpoints.tablet} {
  font-size: 1rem;
}
@media ${breakpoints.mobile} {
  font-size: 0.9rem;
}
`;

export const OtherDetails = styled.span`
cursor: pointer;
:hover {
  color: #ff8ba7;
}
&.active{
  background-color: orange;
  border-radius: 20px;
  padding: 7px;
  :hover {
    color:#fff;
  }
}
`;

export const DetailsCard = styled(CardItem)`
background: 
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(to right, orange, pink) border-box;
  border-radius: 1em;
`;

export const ColouredIcon = styled.span`
color: ${props => (props.color || 'black')} `;
