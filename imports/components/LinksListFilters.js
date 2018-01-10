import React from 'react';

export default ({ onCheck }) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={(e) => onCheck()} />
        Show hidden links
      </label>
    </div>
  );
};
