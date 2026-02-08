"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mb-4">
        <Input value={input} readOnly className="mb-2 w-64 text-right" />
        <Input value={result} readOnly className="w-64 text-right bg-gray-200" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>{value}</Button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>{value}</Button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>{value}</Button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <Button key={value} onClick={value === '=' ? handleCalculate : () => handleButtonClick(value)}>{value}</Button>
        ))}
        <Button onClick={handleClear} className="col-span-4">Clear</Button>
      </div>
    </div>
  );
};

export default Calculator;
