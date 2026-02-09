import React, { useState } from "react";

const TextareaComponent = ({
  label,
  id,
  placeholder,
  required = false,
  minLength,
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-2">
      {/* Label */}
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none"
      >
        {label}
        {required && <span className="text-destructive text-red-500"> *</span>}
        {minLength && (
          <span className="text-muted-foreground text-xs ml-2">
            (min {minLength} characters)
          </span>
        )}
      </label>

      {/* Textarea */}
      <textarea
        id={id}
        rows={4}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="
          flex min-h-[80px] w-full
          rounded-md border border-input border-slate-200
          bg-background px-3 py-2 text-sm
          ring-offset-background
          placeholder:text-muted-foreground
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#3796a3]
          focus-visible:ring-offset-2
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      />

      {/* Character Counter */}
      {minLength && (
        <p className="text-xs text-muted-foreground">
          {value.length}/{minLength} characters
        </p>
      )}
    </div>
  );
};

export default TextareaComponent;
