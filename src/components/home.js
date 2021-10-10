import React, { useState } from "react";




const Home = () => {
    const [data, setData] = useState("");
    const [error, setError] = useState("");




    const handleClick = (e) => {
      setData(data.concat(e.target.name));
    };


    const handleClear = () => {
      setData("");
    };


    const handleBackspace = () => {
      setData(data.slice(0, data.length - 1));
    };

    const handleEqual = () => {
      try {
        setData(eval(data).toString())
      }catch(error) {
        setError("Type Mistake");
      }
    };
    

    return(

          <div className="text-center mt-5">
            <div className="text-primary fs-1">
              <p>Calculator</p>
            </div>

            {(error !== "") ? (<div className="text-danger fs-4 fw-bold">{error}</div>) : ""}
            <form>
              <input 
                type="text"
                value={data}
                className="w-50 py-4 bg-white fs-1"
              />
            </form>
            <div className="container w-50">
              <div className="row fs-1">
                <button className="col-6 bg-danger" name="Clear" onClick={handleClear}>Clear</button>
                <button className="col bg-info" name="C" onClick={handleBackspace}>C</button>
                <button className="col bg-warning" name="/" onClick={handleClick}>&divide;</button>
              </div>
              <div className="row fs-1">
                <button className="col bg-light " name="7" onClick={handleClick}>7</button>
                <button className="col bg-light" name="8" onClick={handleClick}>8</button>
                <button className="col bg-light" name="9" onClick={handleClick}>9</button>
                <button className="col bg-warning" name="*" onClick={handleClick}>*</button>
              </div>
              <div className="row fs-1">
                <button className="col bg-light" name="4" onClick={handleClick}>4</button>
                <button className="col bg-light" name="5" onClick={handleClick}>5</button>
                <button className="col bg-light" name="6" onClick={handleClick}>6</button>
                <button className="col bg-warning" name="-" onClick={handleClick}>-</button>
              </div>
              <div className="row fs-1">
                <button className="col bg-light" name="1" onClick={handleClick}>1</button>
                <button className="col bg-light" name="2" onClick={handleClick}>2</button>
                <button className="col bg-light" name="3" onClick={handleClick}>3</button>
                <button className="col bg-warning" name="+" onClick={handleClick}>+</button>
              </div>
              <div className="row fs-1">
                <button className="col-6 bg-light" name="0" onClick={handleClick}>0</button>
                <button className="col bg-light" name="." onClick={handleClick}>.</button>
                <button className="col bg-success" name="=" onClick={handleEqual}>=</button>
              </div>
            </div>
          </div>
      );

};

export default Home;