import React from "react";

const FilterCastControls = (props) => {
  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value);
  };

  try {
    return (
      <div className="row bg-warning">
        <div className="col-md-12">
          <h4>
            <span>List Filtering:</span>
            <input
              type="text"
              placeholder="Actor/Actress Search"
              onChange={handleTextChange}
            />
          </h4>
        </div>
      </div>
    );
  } catch (e) {
    console.log("error with filter cast controls: ", e);
    return (
      <div className="error-msg">
        <p>Error with the filter</p>
      </div>
    );
  }
};
export default FilterCastControls;
