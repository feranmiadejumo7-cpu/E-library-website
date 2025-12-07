import { useState } from "react";
import Card from "./Card";
import axios from "axios";


const Main = () => {

    const [search, setSearch] =useState();
    const [bookData, setData] = useState([])
    const searchBook=(evt)=> {
        if(evt.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q= ' + search +'  &key=AIzaSyDSkR4xN_V0KGeF0OClLNaKToYEUewFEjY'+'&maxResults=40')
           .then(res=>setData(res.data.items))
           .catch(err=>console.log(err));
        }
    }


return(

    <>
    <div className="header">
        
        <div className="row1">
  <h1> A room without books is like  <br /> a body without a soul </h1>

            </div>

        <div className="row2">
<h2> find your Books </h2>

     

            <div className="search">
                <input  type="text" placeholder="Enter your book Name"
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchBook}
                
                />
          <button> <i class="fas fa-search"> </i> </button>

            </div>
<img src="./images/feranmi.jpeg" alt=""  width={400} height={300} />

    </div>

  </div>

  <div className="container">
   
{
    <Card book={bookData}  />
}

  </div>
    </>
)

}

export default Main;