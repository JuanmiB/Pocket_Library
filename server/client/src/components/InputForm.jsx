// InputForm.jsx
import React from "react";

const TextAreaForm = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
};

const SelectForm = ({ options, label, value, onChange, multiple }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} multiple>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const InputFormulario = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const InputCheckbox = ({ label, value, onChange }) => {
    return (
        <div>
        <label>{label}</label>
        <input
            type="checkbox"
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
        />
        </div>
    );
    };

const InputForm = ({ label, value, type, placeholder, textarea, select, options, onChange }) => {
  return (
    <>
        {textarea ? (
            <TextAreaForm
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
        ) : select ? (
            <SelectForm
            options={options}
            label={label}
            value={value}
            onChange={onChange}
            />
        ) : type === "checkbox" ? (
            <InputCheckbox
            label={label}
            value={value}
            onChange={onChange}
            />
        ) : (
            <InputFormulario
            label={label}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
        )}
    </>
  );
};

export default InputForm;
