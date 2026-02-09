import React from "react";

const InputComponent = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  error,
  min,
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none
                     peer-disabled:cursor-not-allowed
                     peer-disabled:opacity-70"
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        min={min}
        className={`
          flex h-10 w-full rounded-md
          border px-3 py-2 text-sm
          placeholder:text-slate-400
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#3796a3]
          focus-visible:ring-offset-2
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${
            error
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-slate-200"
          }
        `}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputComponent;
