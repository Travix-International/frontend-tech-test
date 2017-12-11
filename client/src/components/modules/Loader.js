import React from 'react';

function Loader() {
  return (
    <div className="loader">
      <svg
      version="1.1"
      id="dc-spinner"
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      preserveAspectRatio="xMinYMin meet"
      >

      <path fill="#999" stroke="#999" strokeWidth="0.6027" strokeMiterlimit="10" d="M5.203,20c0-8.159,6.638-14.797,14.797-14.797V5C11.729,5,5,11.729,5,20s6.729,15,15,15v-0.203C11.841,34.797,5.203,28.159,5.203,20z">
      <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            calcMode="spline"
            keySplines="0.4, 0, 0.2, 1"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite" />
       </path>

      <path fill="#ccc" stroke="#ccc" strokeWidth="0.2027" strokeMiterlimit="10" d="M7.078,20c0-7.125,5.797-12.922,12.922-12.922V6.875C12.763,6.875,6.875,12.763,6.875,20S12.763,33.125,20,33.125v-0.203C12.875,32.922,7.078,27.125,7.078,20z">
       <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="0.8s"
          repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  )
}

export default Loader
