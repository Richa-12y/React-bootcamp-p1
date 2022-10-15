import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CardStore from "../card/CardStore";
import LogoImage from "../lib/assets/___-removebg-preview.png";

const NavBar = () => {
  return (
    <>
      <style type="text/css">
        {`
    .navbar-title{
      color: white;
      padding: 1rem 1.5rem;
      font-size: 2rem;
      font-weight:bold;
    }
    .logo-img{
       object-fit:cover;
        background-color:teal;
        width:60px;
        height:60px;
        border-radius:50%;
    }
    .button-container{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        padding:0.8rem 1rem 1rem 0.8rem;
       
        
    }
    .Card-Container{
       display: grid;
       grid-template-columns: auto auto auto auto;
       margin-top:1rem;
       margin-left:4rem;
       gap:10px;
       position: relative;
       height:300px;
       font-size:0.7rem;
      height:200px;
    }
   
    .img{
        margin:auto;
        width:200px;
        height:200px;
        margin-top:1rem;
    }
    .Badge-container{
      position: fixed;
      right:2%;
     
      
    }
    .Badge{
       position: absolute;
       top:0%;
       right:0.5%;

       
    }
    
    
    `}
      </style>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="rmart"
              src={LogoImage}
              className=" logo-img d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar className="navbar-title"> RCarT</Navbar>
        </Container>
      </Navbar>
      <CardStore />
    </>
  );
};

export default NavBar;
