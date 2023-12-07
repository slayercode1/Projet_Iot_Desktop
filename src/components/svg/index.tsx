import { FC } from 'react'

interface ISvg {
  value: number
  height?: number
}
const SvgCircle: FC<ISvg> = ({ value, height }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={height || 150}
      xmlns="http://www.w3.org/2000/svg"
      filter="drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.57))"
    >
      <defs>
        <mask id="mask01">
          <circle
            id="c1"
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="white"
            strokeWidth="10"
            strokeDasharray="18 18"
            pathLength="1000"
          />
        </mask>
      </defs>
      <g transform="rotate(-90 50 50)">
        <circle
          mask="url(#mask01)"
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#E0FCCF"
          strokeWidth="10"
        />
        <circle
          id="c2"
          mask="url(#mask01)"
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#18C31F"
          strokeWidth="10"
          strokeDasharray={`${value} 1000`}
          pathLength="1000"
        />
      </g>
      <text
        id="t1"
        x="50"
        y="50"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="sans-serif"
        fill="Black"
      >
        50%
      </text>
    </svg>
  )
}

export default SvgCircle
