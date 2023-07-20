// react
import React from "react";


// icons
import { FaPlus } from "react-icons/fa";


// validador de props
import PropTypes from 'prop-types';


// css
import './form.css'


export default function Form({ handleSubmit, handleInput, newTask }){
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleInput}
        type="text"
        value={newTask}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// validando props
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
}
