import React from "react";

const GradientIcon = (props) => {
  const { children } = props;
  return (
    <>
      <svg width={0} height={0} style={{suppressHydrationWarning: true}}>
        <linearGradient style={{suppressHydrationWarning: true}} id="linearColors" gradientTransform="rotate(90)">
          <stop style={{suppressHydrationWarning: true}} offset={0} stopColor="#4299E1" />
          <stop style={{suppressHydrationWarning: true}} offset={1} stopColor="#9F7AEA" />
        </linearGradient>
      </svg>
      {children}
    </>
  );
};

export default GradientIcon;
