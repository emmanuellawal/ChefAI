import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { X } from 'lucide-react';
import { Input } from '@/components/ui/Input'; // Assuming Input component is in this path

interface TagInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
  placeholder?: string;
  id?: string;
  className?: string;
  inputClassName?: string;
  tagClassName?: string;
  tagRemoveClassName?: string;
  maxTags?: number;
  disabled?: boolean;
}

const TagInput: React.FC<TagInputProps> = ({
  tags,
  setTags,
  placeholder = 'Add a tag...',
  id,
  className,
  inputClassName,
  tagClassName,
  tagRemoveClassName,
  maxTags,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addTag = (tagValue: string) => {
    const newTag = tagValue.trim();
    if (newTag && !tags.includes(newTag) && (!maxTags || tags.length < maxTags)) {
      setTags([...tags, newTag]);
    }
    setInputValue('');
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      addTag(inputValue);
    }
    if (event.key === 'Backspace' && inputValue === '' && tags.length > 0) {
      event.preventDefault();
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (tagToRemove: string) => {
    if (disabled) return;
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div id={id} className={`flex flex-wrap items-center gap-2 p-2 border border-gray-300 dark:border-gray-700 rounded-md ${disabled ? 'bg-gray-100 dark:bg-gray-800 cursor-not-allowed' : 'bg-white dark:bg-gray-900'} ${className || ''}`}>
      {tags.map(tag => (
        <span
          key={tag}
          className={`flex items-center bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-200 text-sm font-medium px-2.5 py-1 rounded-full ${tagClassName || ''}`}
        >
          {tag}
          {!disabled && (
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className={`ml-1.5 -mr-0.5 p-0.5 rounded-full hover:bg-sky-200 dark:hover:bg-sky-700 focus:outline-none focus:ring-1 focus:ring-sky-500 ${tagRemoveClassName || ''}`}
              aria-label={`Remove ${tag}`}
            >
              <X size={14} className="text-sky-600 dark:text-sky-300" />
            </button>
          )}
        </span>
      ))}
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder={(!maxTags || tags.length < maxTags) ? placeholder : `Maximum ${maxTags} tags reached`}
        className={`flex-grow border-none focus:ring-0 focus:outline-none p-0 h-auto bg-transparent disabled:bg-transparent ${inputClassName || ''}`}
        disabled={disabled || (maxTags !== undefined && tags.length >= maxTags)}
      />
    </div>
  );
};

export { TagInput };
export type { TagInputProps }; 