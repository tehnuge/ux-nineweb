import styled, {keyframes} from 'styled-components';

const imgBg = "bg.jpg"

export const FIO = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}`
export const FI = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: .9;
}`

export const Fade = styled.div`
  animation: ${props => props.out ? FIO : FI} 1s linear;
  transition: visibility 1s linear;
`;
export const BottomDiv = styled.div`
`


export const PaddingDiv = styled.div`
padding:120px;
color:white;`

export const Button = styled.button`
background-color: transparent;
color: white;
font-size: 1.5em;
margin: 1em 0px;
padding: 0.25em 1em;
border: 2px solid white;
border-radius: 18px;
`

export const ImgDiv = styled.div`
background-image: url(${imgBg});
height: 700px;
position: static;
left: 3.35%;
right: 3.35%;
top: 3.32%;
bottom: 23.27%;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
align-self:center;
flex-grow: 2;`