import React from "react";

const GradientIcon = (props) => {
  const { children } = props;
  return (
    <>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" gradientTransform="rotate(90)">
          <stop offset={0} stopColor="#4299E1" />
          <stop offset={1} stopColor="#9F7AEA" />
        </linearGradient>
      </svg>
      {children}
    </>
  );
};

export default GradientIcon;
