import { useState, useEffect, useRef } from "react";

const MultiSelectCheckbox = ({ options = [], onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionChange = (option) => {
    const updatedOptions = selectedOptions.some(
      (item) => item.value === option.value,
    )
      ? selectedOptions.filter((item) => item.value !== option.value)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    if (onChange) onChange(updatedOptions);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative w-full"
      ref={dropdownRef}
    >
      <div
        className="border px-3 py-1 w-full rounded cursor-pointer bg-white flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span>
          {selectedOptions.length > 0
            ? selectedOptions.map((item) => item.label).join(", ")
            : "Selecione"}
        </span>
        <span className="ml-2 pb-2">⌄</span>
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full border rounded bg-white shadow-lg z-10 max-h-48 overflow-y-auto">
          {options.map((option) => (
            <label
              key={JSON.stringify(option)}
              className="flex items-center p-2 hover:bg-gray-100"
            >
              <input
                type="checkbox"
                checked={selectedOptions.some(
                  (item) => item.value === option.value,
                )}
                onChange={() => handleOptionChange(option)}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectCheckbox;
