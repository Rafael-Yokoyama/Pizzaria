import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color:var(--dark-light);
padding:40px;
.padding{
    padding:80px 0;
}
.title {
    width:100%;
    text-align: center;
    padding: 0 15px;
    font-size:30px;
}
.title::before{
    content: attr(data-title);
    display:block;
    font-size:28px;
    font-weight:400px;
    color:var(--main-color);
    font-family:var(--cursive-font);
    
}
.text-about,.img-about{
    width:50%;
    padding: 0 30px;
 

}
@media (max-width: 900px){
        .text-about,.img-about{
    width:100%;
    padding: 0 30px}

    }
p{ 
    color:var(--white-light);
    text-align:center;
    font-size:16px;
    margin: 0 0 15px;
  
}
h3{ 
   
    text-align:center;
    font-size:30px;
    text-transform:capitalize;
    margin: 0 0 25px;
}
.bloquinho {

    object-fit: cover;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
}


.bloquinho  img {
  padding:10px;
    max-width:350px;

height:100%;
  width:100%;

  
}


 a.bloquinho {
   padding:200px 30px;
   margin-top:-20px ;

  opacity: 0.8;  
  display: flex;


  display: block;
  position: relative;

 
 
  padding-bottom: 60px;
  text-align: center;

  
}





figcaption{
  position:relative;
  bottom:100px;
  font-size: 20px;
  margin: 0 20px;
  color:white;
  
}

figcaption p {
  font-size: 15px;

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
  -webkit-transition: width .5s;
  transition: width .5s;
  z-index: 10;
  overflow:hidden;
  
}

.bloquinho:hover span {
    cursor:pointer;
  width: 0;
}
 
.divimg{
 

 padding: 20px;
 margin: 0 auto;

}




`;

const About = ()  => {
    return (
     <Container  id="about">
      <div className="container">
          <div className="row padding">
              <div  data-title= 'our story' className="title">
                  <h2>
                      About 
                  </h2>
              </div>
          </div>
          <div className="row">
             <div className="text-about">
       <h3> our story </h3>
       <p>Lorem Ipsum has been the industry's standard dummy 
           text ever since the 1500s, when an unknown printer took 
           a galley of type and scrambled it to make a type specimen book</p>
           <p>Lorem Ipsum has been the industry's standard dummy 
           text ever since the 1500s, when an unknown printer took 
           a galley of type and scrambled it to make a type specimen book</p>
           <p>Lorem Ipsum has been the industry's standard dummy 
           text ever since the 1500s, when an unknown printer took 
           a galley of type and scrambled it to make a type specimen book</p>
           <div className="divimg">
              <a className="bloquinho" target="_blank">
                <span>
                <img src="https://images.unsplash.com/photo-1601233242964-9909c5237aaf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"/>
                </span> 
                <figcaption> 10 years experience </figcaption>
              
              </a>
              </div>
        
             </div>
             <div className="img-about ">
             <div className="divimg">
              <a className="bloquinho" target="_blank">
                <span>
                <img src="https://cdn.pixabay.com/photo/2020/10/26/20/00/chef-5688759_960_720.png"/>
                </span> 
                <figcaption>  about the chef </figcaption>
              
              </a>
       
       
              </div>
              <div >
     
       <p>Lorem Ipsum has been the industry's standard dummy 
           text ever since the 1500s, when an unknown printer took 
           a galley of type and scrambled it to make a type specimen book</p>
           <p>Lorem Ipsum has been the industry's standard dummy 
           text ever since the 1500s, when an unknown printer took 
           a galley of type and scrambled it to make a type specimen book</p>
           <p>Lorem Ipsum has been the industry's standard dummy 
           text ever since the 1500s, when an unknown printer took 
           a galley of type and scrambled it to make a type specimen book</p>
         
        
             </div>
        
               
               
            
             </div>
           
          </div>
      </div>


     </Container>
    )
  }
  
  export default About