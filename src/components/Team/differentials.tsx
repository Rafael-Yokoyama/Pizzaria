import React from 'react';
import styled from 'styled-components';
import AllTeam from './alllTeam';



const Container = styled.div`

background:var(--main-color);
height:500px;
.title {
    width:100%;
    text-align: center;
    padding: 0 15px;
    font-size:34px;
}
.title::before{
    content: attr(data-title);
    padding:40px;
    display:block;
    font-size:38px;
  
    font-weight:400px;
    color:var(--dark);
    font-family:var(--cursive-font);
}
.top-differentials{
    display:flex;
  text-align:center;
    align-items: center;

    justify-content:center;
    width:90%;

}

.wifi,.car,.tv{
    margin: 0 auto;
    height:300px;
   
    width:30%;
    text-align:center;

}
.bloquinho {

object-fit: cover;
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}


.bloquinho  img {
    background:black;
padding:10px;
max-width:350px;

height:100%;
width:100%;


}


a.bloquinho {
padding:200px 30px;
margin-top:-20px ;
display: flex;

display: block;
position: relative;

padding-bottom: 60px;
text-align: center;


}

figcaption{
position:relative;
bottom:100px;
font-size: 28px;
margin: 0 20px;
color:var(--white);


}


.bloquinho span {
text-align: center;
display: block;
position: absolute;
top: 0;
left: 0;
color:black;
width:100%;
height:100%;
-webkit-transition: height .5s;
transition: height .5s;
z-index: 10;
overflow:hidden;

}

.bloquinho:hover span {
    z-index:20;

cursor:pointer;
height: 0;
}

.divimg{


padding: 20px;
margin: 0 auto;

}



 
`;


const Differentials = ()  => {
    return (
      <>
     <Container  id="home">
    
         <div className="container ">
             
             <div className="row top-differentials' ">
              
             <div  data-title= ' Differentials' className="title">
                 
              </div>
               <div className="wifi"> 
               <div className="divimg">
              <a className="bloquinho" target="_blank">
                <span>
                <img src=""/>
                </span> 
                <figcaption> Free wifi </figcaption>
              
              </a>
              </div>
                   
                   
                   </div>
               <div className="car">
               <div className="divida">
              <a className="bloquinho" target="_blank">
                <span>
                <img src=""/>
                </span> 
                <figcaption> Free Parking </figcaption>
              
              </a>
              </div>
               </div>
                <div className="tv">
                
                  <div className="divimg">
              <a className="bloquinho" target="_blank">
                <span>
                <img src=""/>
                </span> 
                <figcaption>Tv </figcaption>
              
              </a>
              </div>
                </div>

               
                 </div>
             </div>

   

     </Container>
     < AllTeam/>
    </>
    )
  }
  
  export default Differentials