/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

function Item({
  date,
  km,
  onDeleteNote,
  id,
}) {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const fullDate = `${day}.${month}.${year}`;

  return (
    <div className="item">
      <div className="item-date">{fullDate}</div>
      <div className="item-km">{km}</div>
      <div className="item-buttons-block">
        <div className="item-del material-icons" onClick={() => onDeleteNote(id)}>delete_outline</div>
      </div>
    </div>
  );
}

Item.propTypes = {
  date: PropTypes.string.isRequired,
  km: PropTypes.number.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;
