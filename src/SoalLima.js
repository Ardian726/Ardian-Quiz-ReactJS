import React, { useState } from "react";

function SoalLima() {
  const [type, setType] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setType([...type, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="SoalLima">
      <h1 className="text-center my-5">You Can Type Anything</h1>
      <div className="container">
        <div className="col-4 mx-auto">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              class="btn btn-primary"
              type="button"
              onClick={handleAddTodo}
            >
            Hai
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-4 mx-auto">
          <div class="card">
            {type.map((todo, index) => (
              <div key={index}>
                <p class="list-group-item">{todo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoalLima;
