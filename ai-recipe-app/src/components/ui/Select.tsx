import React from 'react';
import { ChevronDown } from 'lucide-react'; // Using an icon for the dropdown arrow

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  placeholder?: string; // Explicitly add placeholder prop
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, placeholder, ...props }, ref) => {
    const baseStyles =
      'appearance-none flex h-10 w-full items-center justify-between rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

    const combinedClassName = `
      ${baseStyles}
      ${className || ''}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div className="relative w-full">
        <select
          className={combinedClassName}
          ref={ref}
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {children}
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"
          aria-hidden="true"
        />
      </div>
    );
  }
);
Select.displayName = 'Select';

export { Select }; 