import React, { useState, useEffect } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

const Theme = () => {
  const [dark, setTheme] = useState(true);

  useEffect(() => {
    if (dark) {
      document.querySelector(".App").classList.remove("light");
    } else {
      document.querySelector(".App").classList.add("light");
    }
  }, [dark]);


  return (
    <div className="theme" onClick={() => setTheme(!dark)}>
      {dark ? <BiSun /> : <BiMoon />}
    </div>
  );
}

export default Theme;