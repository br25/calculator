import React from "react";
import download from "../image/download.png";


const List = ({people}) => {

	return(
    
    <div className="bg-white">
        {people.map((person)=> {
        	const { id, name, age } = person;

        	return(

	        		
			            
				            <div className="d-flex" key={id}>
				              <img src={download} className="d-flex card-img-right m-4" style={{width: "100px"}} alt="person" />
				              <div className="m-4">
				                <h1 className="mt-4">{name}</h1>
				                <p>{age} years</p>
				              </div>
				            </div>
			            
			                		)


        })}

            
    </div>
      
    );
};


export default List;