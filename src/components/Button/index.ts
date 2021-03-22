import styled from 'styled-components';




export const  Button = styled.div `
.btn{
  padding:40px;
display: flex;
text-align:center;
justify-content:center;
margin: 30px auto;
  width: 100%;

background: transparent;
color:var(--main-color);
border: 1px solid var(--main-color);
border-radius: 50px;
max-width: 200px;
min-width: 140px;
padding:10px 20px; 

position: relative;
overflow: hidden;
z-index: 700;
font-weight: 600;
cursor: pointer;
&::after {
  
  content: "";
  position: absolute;
  display: block;
  bottom: 0;
  
  left: -5px;
  background: var(--main-color);
  width: 110%;
  height: 0%;
  z-index: -1;
  transition: 0.8s ease;
  
  
}
&:hover{
    color:var(--white);
}

&:hover::after {
 
  height: 120%;
}
}
`