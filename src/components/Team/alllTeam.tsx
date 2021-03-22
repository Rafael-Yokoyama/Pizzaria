import React from 'react';
import styled from 'styled-components';
import chef from '../../img/chef.png'



const Container = styled.div`

background:var(--dark-light);
padding:80px 0;

.title {
    width:100%;
    text-align: center;
    padding: 0 15px;
    font-size:34px;
}
.title::before{
    content: attr(data-title);
    padding-top:40px;
    display:block;
    font-size:22px;
  
    font-weight:400px;
    color:var(--main-color);
    font-family:var(--cursive-font);
}
img{
    
    max-width:300px;
}
.team-all{
    border:1px solid #fff7;
    background-color: var(--white-light);
    text-align:center;
 margin-left: 20px;
    margin :  20px auto;
    border-radius:0 20px;
}
.text-team{
    transition: all .5s ease;
    cursor:pointer;
    background:var(--dark);
    border-radius:0 20px;
}
.text-team:hover{
    transform:translatey(20px);
    background-color:var(--main-color);


}
.text-team:hover p{
    color:black;
    font-weight:bold;

}
.text-team p {
    color:var(--main-color)
}


 
`;


const AllTeam = ()  => {
    return (
     <Container  id="team">
    
         <div className="container ">
             
             <div className="row ">
              
             <div  data-title= '   Ours Chefs ' className="title">
             <h2>
                  Team
                  </h2>
              </div>
           
         

               
                 </div>
                 <div className="row">
                     <div className="team-all">
                         <img src={chef}  />
                             <div className="text-team">
                                 <h2>Lorem Ipsum</h2>
                                 <p>ipsum chef</p>
                             </div>


                     </div>
                     <div className="team-all">
                         <img src={chef}  />
                             <div className="text-team">
                                 <h2>Lorem Ipsum</h2>
                                 <p>ipsum chef</p>
                             </div>


                     </div> <div className="team-all">
                         <img src={chef}  />
                             <div className="text-team">
                                 <h2>Lorem Ipsum</h2>
                                 <p>ipsum chef</p>
                             </div>


                     </div>
                     
                 </div>
             </div>

   

     </Container>
    )
  }
  
  export default AllTeam