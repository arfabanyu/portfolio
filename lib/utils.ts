import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function displayText() {
  return cn('text-primary font-display');
}

export function accentText() {
  return cn('text-primary font-accent');
}
