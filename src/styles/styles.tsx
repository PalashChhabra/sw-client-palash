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

export const NavWrapper = styled.nav`
background: rgb(5, 2, 36);
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
    path {
      fill: #fff;
    }
}
a {
    color: #fff
}
a:hover {
    color: #ff8ba7;
    text-decoration: none;
    transform: scale(1.05);
}
`;

export const Loading = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: var(--centerHeight);
left: 0;
display: grid;
place-content: center;
box-sizing: border-box;
  img {
    width: 15rem;
    height: 15rem;
    object-fit: contain;
    padding: 5%;
    box-sizing: border-box;
  }
`;

export const RootCardItem = styled.div`
:hover {
  transform: scale(1.05);
}
display: flex;
flex-direction: column;
min-width: 0;
background-clip: border-box;
border: 1px solid rgba(0,0,0,.125);
border-radius:  4px;
background-color: #fff;
margin-bottom: 30px;
cursor: pointer;
.card-body {
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
              font-size: 1 rem;
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
        color: #a9a9a9;
        display: inline-block;
        & div{
            width: 18px!important;
            padding-right: 10px;
        }

    }
}
`;

export const ColouredIcon = styled.span`
color: ${props => (props.color || 'black')} `;
