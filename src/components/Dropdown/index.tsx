import React, { useState } from "react";
import styles from "./style.module.scss";
import Chevron from "../svgs/Chevron";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (selectedValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option.value);
  };

  return (
    <div className={styles["dropdown-container"]}>
      <button
        className={styles["dropdown-toggle"]}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {selectedOption ? selectedOption.label : "Select an option"}
        <Chevron height={16} width={16} />
      </button>
      {isOpen && (
        <ul className={styles["dropdown-menu"]}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
