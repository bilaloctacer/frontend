import { X, Upload } from "lucide-react";

const MainModal = ({
  open,
  title = "Upload File",
  description = "Upload a file to continue",
  accept = ".docx",
  inputId = "file-upload",

  // Button texts
  cancelText = "Cancel",
  submitText = "Submit",

  // Handlers
  onClose,
  onFileChange,
  onSubmit,

  // Disable submit
  submitDisabled = false,

  // Additional classNames
  containerClass = "",
  titleClass = "",
  descriptionClass = "",
  uploadBoxClass = "",
  cancelBtnClass = "",
  submitBtnClass = "",
}) => {
  if (!open) return null;

  return (
    <div
      role="dialog"
      className={`fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2
        rounded-lg border bg-white p-6 shadow-lg ${containerClass}`}
    >
      {/* Header */}
      <div className="flex flex-col space-y-1.5 text-center sm:text-left">
        <h2 className={`text-lg font-semibold ${titleClass}`}>
          {title}
        </h2>
        <p className={`text-sm text-slate-500 ${descriptionClass}`}>
          {description}
        </p>
      </div>

      {/* Upload Area */}
      <div className="py-4">
        <input
          type="file"
          accept={accept}
          id={inputId}
          className="hidden"
          onChange={onFileChange}
        />

        <label
          htmlFor={inputId}
          className={`flex h-32 cursor-pointer flex-col items-center justify-center
            rounded-lg border-2 border-dashed border-slate-200
            transition hover:border-cyan-500 hover:bg-slate-50
            ${uploadBoxClass}`}
        >
          <Upload className="h-8 w-8 text-slate-400" />
          <span className="mt-2 text-sm text-slate-500">
            Click to select a file
          </span>
        </label>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button
          onClick={onClose}
          className={`h-10 rounded-md border border-slate-200 px-4 text-sm
            hover:bg-slate-100 transition ${cancelBtnClass}`}
        >
          {cancelText}
        </button>

        <button
          onClick={onSubmit}
          disabled={submitDisabled}
          className={`h-10 rounded-md bg-cyan-600 px-4 text-sm text-white
            hover:bg-cyan-700 disabled:opacity-50 transition
            ${submitBtnClass}`}
        >
          {submitText}
        </button>
      </div>

      {/* Close Icon */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default MainModal;
