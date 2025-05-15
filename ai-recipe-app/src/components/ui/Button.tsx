import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  // onClick?: () => void; // onClick is part of ButtonHTMLAttributes
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variantStyles = {
      primary:
        'bg-sky-600 text-white hover:bg-sky-700/90',
      secondary:
        'bg-gray-200 text-gray-900 hover:bg-gray-300/80 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600/80',
      outline:
        'border border-sky-600 text-sky-600 hover:bg-sky-100/80 dark:text-sky-400 dark:border-sky-500 dark:hover:bg-sky-900/30',
      ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100',
      link: 'text-sky-600 dark:text-sky-400 underline-offset-4 hover:underline',
    };

    const sizeStyles = {
      sm: 'h-9 px-3',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8 text-base',
      icon: 'h-10 w-10',
    };

    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className || ''}
    `.trim().replace(/\s+/g, ' ');

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps }; 