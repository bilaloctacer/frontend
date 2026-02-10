const TextareaComponent = ({
  label,
  id,
  name,
  placeholder,
  required = false,
  minLength,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      {/* Label */}
      <label htmlFor={id} className="text-sm font-medium leading-none">
        {label}
        {required && <span className="text-red-500"> *</span>}
        {minLength && (
          <span className="text-muted-foreground text-xs ml-2">
            (min {minLength} characters)
          </span>
        )}
      </label>

      {/* Textarea */}
      <textarea
        id={id}
        name={name || id}
        rows={4}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          flex min-h-[80px] w-full
          rounded-md border border-slate-200
          bg-slate-100 px-3 py-2 text-sm
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#3796a3]
          focus-visible:ring-offset-2
        "
      />

      {/* Character Counter */}
      {minLength && (
        <p className="text-xs text-muted-foreground">
          {value?.length || 0}/{minLength} characters
        </p>
      )}
    </div>
  );
};

export default TextareaComponent;
