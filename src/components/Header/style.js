import styled from "styled-components";

export const Container = styled.section`
width:100vw;
height:100vh;
position:relative;
display:flex;
justify-content:space-between;
background: url(${props => props.back}) 50%;
background-repeat:no-repeat;
background-size:cover;
background-position: 50% 100%

`
export const Ul = styled.ul`
width:37vw;
height:9vh;
list-style:none;
position:absolute;
left:55%;
top:4%;
display:flex;
align-items:center;
font-weight:bolder;
justify-content:space-between;
`
export const Logo = styled.div`
width: 6vw;
position:absolute;
left:3%;
top:4%;
background-color:#CFCFCF;
height: 10vh;
display:flex;
font-size:1.7vw;
justify-content:center;
color: #363636;
`
export const Box = styled.div`
border:solid 4px black;
width:10vw;
height:7vh;
display:flex;
justify-content:center;
align-items:center;
:hover{
    cursor: pointer;
    background-color:#FF0000;
    color:white;
    opacity:40%;
}
`

export const Item = styled.div`
font-family: sans-serif;
color: #333;
:hover{
    cursor: pointer;
}
`
export const Title = styled.div`
font-family: 'Roboto Mono', monospace;
color: #333;
position:absolute;
left:38%;
top:29%;
font-size:4vw;
`