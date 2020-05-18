import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

import Rows from '../../Constants/rows';

// import './styles.scss';

const Row = ( props ) => (
  <div className=".row">
    <span>{props.range}</span>
    {props.cards.map(card => {
      return <Card {...card} />;
    })}
  </div>
);

Row.propTypes = {
  range: PropTypes.oneOf(Object.keys(Rows)),
  cards: PropTypes.arrayOf(PropTypes.object), //todo more specific
}

export default Row;
