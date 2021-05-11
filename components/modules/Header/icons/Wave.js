import React from "react";

export default function Wave() {
  return (
    <div className='absolute bottom-0 w-full h-24'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        width='100%'
        height='96'
        viewBox='0 0 1440 320'>
        <path
          fill='#0d141c'
          fillOpacity='1'
          d='M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,176C672,149,768,75,864,69.3C960,64,1056,128,1152,144C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
      </svg>
    </div>
  );
}
