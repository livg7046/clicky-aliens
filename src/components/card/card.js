import React from 'react';
import "./card.css";

const Card = props => (
    
    <div className="card col-sm-3">
        <div onClick={() => props.action(props.clicked)} className="img container">
            <img className="card-img-top" alt={props.url} src={props.url}/>
        </div>
        
    </div>
);




        
//             <div className="card col-sm-3" onClick={props.handleImageClick}>
//                 <div className="img-container">
//                 <img  className="card-img-top"
//                     alt="dumb"
//                     src={props.url}
//                 />
//                 </div>
//             </div>
        

// );

    
    
export default Card;
