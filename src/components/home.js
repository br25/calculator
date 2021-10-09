import React, { useState } from "react";
import Data from "./data";

import List from "./list";



const Home= () => {
    const [people, setPeople] = useState(Data);


    const handleClick = () => {
      setPeople([]);
      alert("Delete Everybody");
      console.log("click");
    };

  return (
    <div className="bg-info">
      <div className="d-flex justify-content-center">
        <div className="card col-md-4 border my-5 py-4 text-center bg-light">
          <h4><spam className="text-primary fs-3">{people.length}</spam> People's Birthday Today</h4>
          <List people={people} />
          <button onClick={handleClick} className="btn btn-primary py-3 px-5 fs-4">Remove Every Person</button>
        </div>
      </div>
    </div>
    );
    
};



export default Home;