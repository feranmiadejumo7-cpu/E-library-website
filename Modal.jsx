

import React from "react"; 


const Modal = ( { show, item, onClose })  => {
    if(!show){
        return null;

    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

return(
    <>
    <div className="overlay">
        <div className="overlay-inner">
            <button className="close" onClick={onClose}>  <i class="fas fa-times"> </i> </button>
            <div className="inner-box">
                <img  src={thumbnail}  alt="" height={100} width={100}/>
                <div className="info">
                    <h1> {item.volumeInfo.title}</h1>
                    <a href={item.volumeInfo.previewLink}> <button> More </button>          </a>

                      
                </div>

            </div>

<h4 className="description"> {item.volumeInfo.description}
     </h4>
        </div>


    </div>
</>
)

}

export default Modal;