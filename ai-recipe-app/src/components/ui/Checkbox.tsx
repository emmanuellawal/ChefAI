import React from 'react';
import { Check } from 'lucide-react';

export interface CheckboxProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'checked'> {
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  label?: string;
  id?: string;
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, checked = false, onCheckedChange, label, id: providedId, ...props }, ref) => {
    const generatedId = React.useId();
    const anId = providedId || generatedId;

    const baseStyles =
      'peer h-5 w-5 shrink-0 rounded-sm border border-gray-400 dark:border-gray-600 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
    const checkedStyles =
      checked && checked !== 'indeterminate'
        ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-gray-900 border-sky-600 dark:border-sky-500'
        : 'bg-white dark:bg-gray-800';
    const indeterminateStyles = 
      checked === 'indeterminate' 
        ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-gray-900 border-sky-600 dark:border-sky-500' 
        : '';

    const combinedClassName = `
      ${baseStyles}
      ${checkedStyles}
      ${indeterminateStyles}
      ${className || ''}
    `.trim().replace(/\s+/g, ' ');

    const handleClick = () => {
      if (props.disabled) return;
      if (onCheckedChange) {
        if (checked === 'indeterminate') {
          onCheckedChange(true);
        } else if (checked) {
          onCheckedChange(false);
        } else {
          onCheckedChange(true);
        }
      }
    };

    return (
      <div className="flex items-center space-x-2">
        <button
          type="button"
          role="checkbox"
          aria-checked={checked === 'indeterminate' ? 'mixed' : checked}
          aria-labelledby={label && anId ? `${anId}-label` : undefined}
          ref={ref}
          className={combinedClassName}
          onClick={handleClick}
          {...props}
        >
          {checked && checked !== 'indeterminate' && (
            <Check className="h-4 w-4" strokeWidth={3} />
          )}
          {checked === 'indeterminate' && (
            <div className="h-1 w-2.5 bg-white dark:bg-gray-900 m-auto" />
          )}
        </button>
        {label && (
          <label
            htmlFor={props.name} // Native input would use id, but button role uses aria-labelledby
            id={`${anId}-label`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            onClick={handleClick} // Allow clicking label to toggle
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox }; 