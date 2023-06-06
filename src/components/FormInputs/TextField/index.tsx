import React, { ChangeEvent } from "react";
import styles from "./TextField.module.scss";

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  id: string;
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const { value, onChange, id, label, placeholder, type } = props;

  const [inputValue, setInputValue] = React.useState<
    string | number | undefined
  >(undefined);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    if (type === "number") {
      const regex = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;

      if (regex.test(event.target.value)) {
        setInputValue(event.target.value);
        onChange(event.target.value);
      }
    } else {
      setInputValue(event.target.value);
      onChange(event.target.value);
    }
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        <label htmlFor={id}>{label}</label>
      </legend>
      <input
        className={styles.input}
        id={id}
        placeholder={placeholder}
        type={type || "text"}
        value={value || inputValue}
        onChange={handleChange}
      />
    </fieldset>
  );
};

export default TextField;
