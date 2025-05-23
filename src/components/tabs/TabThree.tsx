import { useState } from 'react';

const TabThree = () => {
  const [num, setNum] = useState(0);
  const [output, setOutput] = useState<string[]>([]);

  const printTask = (n: number) => {
    const result: string[] = [];
    const recur = (count: number) => {
      if (count > 0) {
        result.push("Hello Task");
        recur(count - 1);
      } else {
        result.push("STOP");
      }
    };
    recur(n);
    setOutput(result);
  };

  return (
    <div>
      <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
      <button onClick={() => printTask(num)}>Print</button>
      <ul>
        {output.map((msg, i) => <li key={i}>{msg}</li>)}
      </ul>
    </div>
  );
};

export default TabThree;
