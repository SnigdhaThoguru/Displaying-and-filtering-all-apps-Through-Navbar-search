import React, {useState} from "react";
import './App.css';
import data from "./db.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <><nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src="https://unifiedaccess.mphasis.com/images/mp1.png" alt=""  width="90px" height="60px"></img></a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
          <button className="btn btn-outline-light" type="submit">Search</button>
         
        </form>
      </div>
    </nav> 
   
      <div className="dataContainer"> 
        <div className="row row-cols-3 row-cols-md-6 g-2">
           {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="data" >
                      <center><a className="image" href="/"><img src={val.image} alt=""  width="80px" height="100px"/></a><br/>
                      <a className="img_title" href="/">{val.title}</a></center>
                  </div> 
                )
              })
              }
         </div>
      </div>
    </>
  )
}

export default App;