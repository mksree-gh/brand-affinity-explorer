import React from 'react';

const AnimatedBubble = ({ bubble }) => {
  return (
    <>
      <circle
        cx={bubble.x}
        cy={bubble.y}
        r={bubble.size / 2}
        fill={bubble.color}
        opacity="0.7"
        className="hover:opacity-90 cursor-pointer"
      />
      <text
        x={bubble.x}
        y={bubble.y}
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-xs font-medium fill-white pointer-events-none"
        style={{ fontSize: Math.max(10, bubble.size / 8) }}
      >
        {bubble.brand}
      </text>
    </>
  );
};

export default AnimatedBubble;
