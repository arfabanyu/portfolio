import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function accentText(type: string = 'italic') {
  if (type === 'mono') return cn('text-primary italic font-mono');
  return cn('text-primary italic font-serif');
}
