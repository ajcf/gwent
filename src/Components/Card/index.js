import React from 'react';
import PropTypes from 'prop-types';

import Rows from '../../Constants/rows';

const Card = ( props ) => (
  <div>
    {props.name}
    {props.range}
  </div>
);

Card.propTypes = {
  name: PropTypes.string,
  range: PropTypes.oneOf(Object.keys(Rows)),
};

export default Card;
