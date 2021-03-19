import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul<OpenPropsP>`

  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    text-transform:capitalize;
    padding: 18px 10px;
   
  }
  li a {
    text-transform:capitalize;
    color: var(--white);
  }
  li a:hover{
      color: var(--main-color);

    }
  @media (max-width: 768px) {
    text-align:center;
    z-index: 3;
    flex-flow: column nowrap;
    background-color: var(--dark);
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;

	
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li a {
      color: var(--white);
    }
    li a:hover{
      color: var(--main-color);

    }
   
  }
  .icons{
      display:none;
    }
`;

interface OpenPropsP {
  open?:string
}

const RightNav = ({ open }:any)  => {
  return (
    <Ul open={open}>
      <li> <a href="#home">Home</a></li>
      <li> <a href="#about">About</a> </li>
      <li> <a href="#menu"> Menu</a>  </li>
      <li> <a href="#testimonials"> testimonials</a> </li>
      <li> <a href="#contact"> Contact </a> </li>
      <div className='icons'>Ícones feitos por <a href="http://www.creaticca.com/" title="Creaticca Creative Agency">Creaticca Creative Agency</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>
    </Ul>
  )
}

export default RightNav