"use client";
export default function ClearButton({ onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 rounded-md bg-white border border-slate-800 text-slate-800 dark:bg-gray-800 dark:text-gray-100 ml-2 w-auto max-w-[5.5rem] ${className}`}
      aria-label="Clear text"
      title="Clear text"
    >
      Clear
    </button>
  );
}
