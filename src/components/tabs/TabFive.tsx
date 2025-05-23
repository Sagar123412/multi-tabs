import { useState } from 'react';

const TabFive = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <button onClick={() => setA(a + 1)}>Button A: {a}</button>
      <button onClick={() => setB(b + 1)}>Button B: {b}</button>
    </div>
  );
};

export default TabFive;
