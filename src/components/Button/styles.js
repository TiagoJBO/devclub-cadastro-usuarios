import styled from "styled-components"

export const Button = styled.button`
border:${props => props.theme === 'primary' ? 'none' : '#fff 1px solid '};
background:${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'} ;
font-size: 16px;
color: #fff ;
padding: 16px 32px;
width: fit-content;
border-radius: 30px;
cursor: pointer;

&:hover{
    ${props => props.theme === 'primary' ? 'opacity: 0.8' : 'color:#000'}
    
}
&:active{

    ${props => props.theme === 'primary' ? 'opacity: 0.5' : "background:#fff"}
}
`