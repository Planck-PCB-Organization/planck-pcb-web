import React, { ChangeEvent } from "react";
import styles from "./TextField.module.scss";
import clsx from "clsx";

interface TextFieldProps {
  value: string | number | undefined;
  onChange: (value: string | number) => void;
  id: string;
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  error?: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const { value, onChange, id, label, placeholder, type, error } = props;

  const [inputValue, setInputValue] = React.useState<
    string | number | undefined
  >(undefined);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      const regex = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;

      if (regex.test(event.target.value)) {
        // only positive numbers
        setInputValue(event.target.value.replace(/[^0-9]/g, ""));
        onChange(event.target.value.replace(/[^0-9]/g, ""));
      }
    } else {
      setInputValue(event.target.value);
      onChange(event.target.value);
    }
  };

  return (
    <fieldset className={clsx([styles.fieldset, error ? styles.error : null])}>
      <legend className={styles.legend}>
        <label htmlFor={id}>{label}</label>
      </legend>
      <input
        className={clsx([styles.input])}
        id={id}
        placeholder={error ?? placeholder}
        type={type || "text"}
        value={value || inputValue}
        onChange={handleChange}
      />
    </fieldset>
  );
};

export default TextField;
