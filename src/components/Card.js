import React, {useState, useContext} from "react"
import PropTypes from "prop-types"

import {Context} from "../Context"

function Card({ card }) {
    const [hovered, setHovered] = useState(false)

  return (
  <div 
    className = {`cardHoverino`}
    onMouseEnter = {() => setHovered(true)}
    onMouseLeave = {() => setHovered(false)}>

    <img src={card.image} alt={card.code} />

  </div>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;