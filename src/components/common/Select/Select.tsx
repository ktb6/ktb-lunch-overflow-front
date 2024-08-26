import React from "react";

interface SelectProps {
  name: string;
  value: string;
  isSelected: boolean;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  name,
  value,
  isSelected,
  onChange,
}) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={value}
          checked={isSelected}
          onChange={() => onChange(value)}
        />
        {name}
      </label>
    </div>
  );
};

export default Select;
