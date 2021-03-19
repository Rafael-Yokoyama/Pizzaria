import styled from 'styled-components';

import img from "../../img/pizza.png";
const Container = styled.div`
overflow: hidden;
  display: flex;
  flex-direction: row;
  width:100%;

 
  
@keyframes zoomIn{
    0%,100%{
        transform:scale(1)
      
    }
    50%{
        transform:scale(1.1);
        
    }

}

.min-vh-100{
    flex-direction:column;
    padding:240px 0px;
    

}
.home-bg{
width:100%;
background-image:url(${img});
background-attachment:fixed;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height:100%;
animation: zoomIn 7s ease infinite;
overflow: hidden ;

 
}
.home-bg::before{
    content: "";
    opacity:0.7;
    position:absolute;
    top:0;
    left:0;
    background-color:#000;
    width:100%;
    height:100%;
}

.home-text{
    text-align:center;
    max-width:700px;
    width:100%;
    padding: 0 20px;
    margin:auto;
    z-index:2;
}
.home-text p{
   
    color:var(--white-light)
}
h1{
    font-family:var(--cursive-font);
    font-size:60px;
}
.btn{

  text-align:center;
 
    width: 80%;
    display: inline-block;
  background: transparent;
 color:var(--main-color);
  border: 1px solid var(--main-color);
  border-radius: 50px;
  max-width: 350px;
  min-width: 140px;
 padding:10px 20px; 
  margin: 0.4rem 0;
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






 
`;


const Home = ()  => {
    return (
     <Container  id="home">
         <div className="home-bg">
         <div className="container ">
             
             <div className="row min-vh-100 alc ">
                 <div className="home-text">
                     <h1> PizzariaYo Restaurant</h1>
                     <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                         unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                         
                 </div>
                 <div>  <a href="#" className="btn"> Our Menu</a></div>
               
                 </div>
             </div>

         </div>

     </Container>
    )
  }
  
  export default Home