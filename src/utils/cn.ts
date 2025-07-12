import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines clsx and tailwind-merge to create a utility function
 * for merging Tailwind CSS classes with conditional logic
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
