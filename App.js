 import './App.css';
 import React ,{useState,useEffect} from 'react'
 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
 import {faFacebook ,faLinkedin,faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons"

 import image1 from './images/pexels-aleksejs-bergmanis-681335.png';
import image2 from './images/pexels-maxime-francis-2246476.png';
import image3 from './images2/pexels-quang-nguyen-vinh-2131935.png';
 

function App() {
  
  const [user,setUser] = useState([]);
const[isLoading,setLoading]=useState(false);

  const fetchData =()=>{
      fetch("https://reqres.in/api/users?page=1")
      .then((response) =>{
          return response.json();
      }).then((data)=>{
          let info = data.data
          console.log(info);
          setUser(info)
      })
      setLoading(true);
      fetchData(false)
      setTimeout(()=>{
        fetchData(true)
         setLoading(true)
         
        ; 
      },3000)
       
  }
  useEffect(()=>{
    
  },[])
  useState(()=>{
     
  })
  setTimeout(()=>{
     setLoading(false)
     
    ; 
  }, 5000)
   


  return (
    <div className="App">
      
      <div class="w3-top">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="./tr.html" > <span class="span1">TR</span> Builders</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="vl"></div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./tr.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./tr.html">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./tr.html">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./tr.html">Our products</a>
        </li>
        {isLoading?"":
        ( <button onClick={fetchData} class="btn2">Get Data</button>)}
        {isLoading?   <div> <h3 class="spin">FETCHING</h3>
        
         </div>:''
        }
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

<div id='cards' className="clearfix">

        <div className="row">
          {user.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.avatar}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                  {data.first_name +
                      " " +
                      data.last_name}
                  </h5>
                  <p className="card-text">
                  {data.email}
                    <br />
                     
                  </p>
                </div>
              </div>
             
            
            </div>
            
            
          ))}
        </div>
     
   
       
      
      
      </div>
      
   
         
      <div class="footer2">
        <br /><br /><br /><br /><br /><br /><br /> <br />
     <div class="flinks">
       
       <FontAwesomeIcon icon={faFacebook} color="#067ece" size="2x"  />
       <a class="li" FontAwesomeIcon={faFacebook} href="https://www.facebook.com/tanmesh.sahu.52" >Facebook</a>
       <FontAwesomeIcon icon={faLinkedin} color="#542dbe"  size="2x"  />
       <a  class="li"  href="https://www.linkedin.com/in/tanmesh-chandra-sahu-20309a201/" >LinkedIn</a>
       <FontAwesomeIcon  icon={faInstagram} color="#a03785"   size="2x"  />
       <a class="li"  href="https://www.instagram.com/tanmeshinstas86/" >Instagram</a>
       <FontAwesomeIcon icon={faTwitter}  color="#026fec" size="2x"  />
       <a class="li" href="https://twitter.com/MrTechfreak96"  >Twitter</a>
      </div>
      </div>  
    </div>
  );
}     

export default App;
