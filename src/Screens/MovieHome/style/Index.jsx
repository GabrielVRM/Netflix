import styled from "@emotion/styled";

export const FaeturedStyle = styled.div`
  height: 100vh;
  
  
  h2{
    margin: 0px 0px 0px 30px;
}
`;

export const Section = styled.div`
height: 100%;
background-size: cover;
background-position: center;
margin-bottom: 0px;
padding: 0px;

div{
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);     

  div{
    background: linear-gradient(to right, #111 30%, transparent 70%);     
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;

    section{
      font-size: 18px;
      font-weight: bold;
      margin-top: 20px;
 
      .featured-name{
        font-size: 60px;
        font-weight: bold;
      }

      .featured-points,.featured-years,.featured-seassons{
        display: inline-block;
        margin: 10px;
            }
      .featured-points{
        display: inline-block;
        color: #46d369 ;
      }
     
      
      
    }
    .featured-overview-buttons{
      max-width: 50%;


      .featured-description{
        max-height: auto;

        margin-top: 15px;
        font-size: 20px;
        color: #999;
      }
   .featured-button-watch, .featured-button-List{
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2;

    &:hover{
      opacity: 0.7;
    }
  }
  
   .featured-button-watch{
     background-color: #fff;
     color: #000;
     
    }
    
    .featured-button-List{
      background-color: #333;
      color: #fff;
    }
  .featured-Generes{
    margin-top: 15px;
    font-size: 18px;
    color: #999;
  }
  }
    h3{
    }
  }
  }

`;