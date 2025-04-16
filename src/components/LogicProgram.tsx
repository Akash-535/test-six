"use client";

import React, { useState } from "react";

const LogicProgram = () => {
  const [angle1, setAngle1] = useState("");
  const [angle2, setAngle2] = useState("");
  const [angle3, setAngle3] = useState("");
  const [result, setResult] = useState("");

  const checkTriangle = () => {
    const angleOne = parseFloat(angle1.trim());
    const angleTwo = parseFloat(angle2.trim());
    const angleThree = parseFloat(angle3.trim());

    if (isNaN(angleOne) || isNaN(angleTwo) || isNaN(angleThree)) {
      setResult("Please enter valid numbers for all angles.");
      return;
    }

    if (angleOne <= 0 || angleTwo <= 0 || angleThree <= 0) {
      setResult("All angles must be greater than 0.");
      return;
    }

    const sum = angleOne + angleTwo + angleThree;

    if (sum === 180) {
      setResult("The angles form a valid triangle!");
    } else {
      setResult("The angles do not form a valid triangle.");
    }
  };

  const resetFields = () => {
    setAngle1("");
    setAngle2("");
    setAngle3("");
    setResult("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          🔺 Triangle Validator
        </h1>
        {[angle1, angle2, angle3].map((angle, i) => (
          <div className="mb-4" key={i}>
            <label className="block mb-1 font-medium">Angle {i + 1} (°)</label>
            <input
              type="number"
              value={angle}
              onChange={(e) => {
                if (i === 0) setAngle1(e.target.value);
                else if (i === 1) setAngle2(e.target.value);
                else setAngle3(e.target.value);
              }}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder={`Enter angle ${i + 1}`}
            />
          </div>
        ))}
        <div className="flex gap-3">
          <button
            onClick={checkTriangle}
            className="flex-1 bg-blue-500 border border-transparent text-white py-2 rounded hover:bg-transparent hover:text-blue-500 hover:border-blue-500 transition-all duration-300 cursor-pointer"
          >
            Check Triangle
          </button>

          <button
            onClick={resetFields}
            className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition-all ease-linear duration-300 cursor-pointer"
          >
            Reset
          </button>
        </div>
        {result && (
          <div className="mt-4 text-center font-semibold text-lg text-gray-800">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default LogicProgram;
