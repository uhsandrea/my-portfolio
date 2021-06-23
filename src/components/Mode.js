import React, { useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

const Mode = () => {
  const [dark, setMode] = useState(true);

  const handleMode = () => {
    if (dark) {
      setMode(false);
    } else {
      setMode(true);
    }
  }

  return (
    <div className="mode" onClick={handleMode}>
      {dark ? <BiMoon /> : <BiSun />}
    </div>
  );
}

export default Mode;