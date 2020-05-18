import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';
import Rows from '../../Constants/rows';

const row1cards = [
  {
    name: "Card 1",
    Range: Rows.Melee,
  }
]

const Board = ( props ) => (
  <div>
    {props.name}
    <Row cards={row1cards} />
    <Row cards={row1cards} />
    <Row cards={row1cards} />
  </div>
);

Board.propTypes = {
  name: PropTypes.string,
};

export default Board;
