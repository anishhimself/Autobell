import React from 'react';

const XAutoBell = props => {
    const { height, width} = props;
    return (
        <div className="autox-bell">
            <svg
        width={width}
        height={height}
        viewBox="0 0 444 445"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="7.44952"
          y="105.031"
          width="136"
          height="480"
          transform="rotate(-45 7.44952 105.031)"
          fill="#FFF700"
        />
        <rect
          x="99.6294"
          y="444.207"
          width="136"
          height="480"
          transform="rotate(-137.102 99.6294 444.207)"
          fill="#FFF700"
        />
      </svg>
            </div>
    )
}

    export default XAutoBell;