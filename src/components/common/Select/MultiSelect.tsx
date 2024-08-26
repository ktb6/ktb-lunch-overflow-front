"use client";
import React, { useEffect, useState } from "react";
import Select from "./Select";

interface Option {
  name: string;
  value: string;
}

interface MultiSelectProps {
  options: Option[];
  onSubmit?: (selectedValues: string[]) => void;
  onChange?: (selectedValues: string[]) => void;
  hideSubmitButton?: boolean;
  initOptions?: string[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onSubmit,
  onChange,
  hideSubmitButton = false,
  initOptions,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [initLoaded, setInitLoaded] = useState(false);

  const handleCheckboxChange = (value: string) => {
    setSelectedValues(
      (prevSelectedValues) =>
        prevSelectedValues.includes(value)
          ? prevSelectedValues.filter((v) => v !== value) // 이미 선택된 경우 제거
          : [...prevSelectedValues, value] // 선택되지 않은 경우 추가
    );
  };

  useEffect(() => {
    if (!initLoaded && initOptions !== undefined && initOptions !== null) {
      setSelectedValues(initOptions);
      setInitLoaded(true); // 초기화가 완료되었음을 표시
    }
  }, [initOptions, initLoaded]);

  useEffect(() => {
    if (onChange) {
      onChange(selectedValues);
    }
  }, [selectedValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(selectedValues);
    }
  };

  const divideOptionsIntoThree = (options: Option[]) => {
    const partSize = Math.ceil(options.length / 3);
    const part1 = options.slice(0, partSize);
    const part2 = options.slice(partSize, partSize * 2);
    const part3 = options.slice(partSize * 2);
    return [part1, part2, part3];
  };

  const [part1, part2, part3] = divideOptionsIntoThree(options);

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1vmin",
        }}
      >
        <div>
          {part1.map((option) => (
            <Select
              key={option.value}
              name={option.name}
              value={option.value}
              isSelected={selectedValues.includes(option.value)}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>
        <div>
          {part2.map((option) => (
            <Select
              key={option.value}
              name={option.name}
              value={option.value}
              isSelected={selectedValues.includes(option.value)}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>
        <div>
          {part3.map((option) => (
            <Select
              key={option.value}
              name={option.name}
              value={option.value}
              isSelected={selectedValues.includes(option.value)}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
      {!hideSubmitButton && <button type="submit">Submit</button>}
    </form>
  );
};

export default MultiSelect;
