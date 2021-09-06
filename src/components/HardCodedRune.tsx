import React from "react"

const styles = `
      @keyframes offset {
        to {
          stroke-dashoffset: 0;
        }
      }
      .line {
        stroke-dasharray: 2583;
        stroke-dashoffset: 2583;
        animation-delay: 2s;
        animation: offset 8s ease-in-out forwards;
      }
`

export const HardCodedRune: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500px">
      <style dangerouslySetInnerHTML={{ __html: styles}} />
      <g id="background">
        <rect width="500" height="500" fill="#000000"/>
      </g>
      <g id="circle">
        <circle cx="250.1" cy="252" r="184.1" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
      </g>
      <g id="dots">
        <circle cx="250.1" cy="67.9" r="4.7" fill="#fff"/>
        <circle cx="325" cy="83.8" r="4.7" fill="#fff"/>
        <circle cx="386.9" cy="128.9" r="4.7" fill="#fff"/>
        <circle cx="425.2" cy="195.3" r="4.7" fill="#fff"/>
        <circle cx="433.1" cy="271.5" r="4.7" fill="#fff"/>
        <circle cx="409.3" cy="344.3" r="4.7" fill="#fff"/>
        <circle cx="357.9" cy="401.1" r="4.7" fill="#fff"/>
        <circle cx="287.8" cy="432.1" r="4.7" fill="#fff"/>
        <circle cx="211.2" cy="431.9" r="4.7" fill="#fff"/>
        <circle cx="141.4" cy="400.5" r="4.7" fill="#fff"/>
        <circle cx="90.3" cy="343.4" r="4.7" fill="#fff"/>
        <circle cx="66.9" cy="270.4" r="4.7" fill="#fff"/>
        <circle cx="75.3" cy="194.3" r="4.7" fill="#fff"/>
        <circle cx="113.9" cy="128.1" r="4.7" fill="#fff"/>
        <circle cx="176.1" cy="83.4" r="4.7" fill="#fff"/>
      </g>
      <g id="path">
        <polyline className="line"
                  points="433.1 271.5 287.8 432.1 90.3 343.4 325 83.8 287.8 432.1 141.4 400.5 113.9 128.1 409.3 344.3"
                  fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  )
}
