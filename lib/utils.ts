import { rejects } from 'assert';
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

export function getRepos() {
  return new Promise(async (resolve, rejects) => {
    const res = await fetch(
      'https://api.github.com/users/arfabanyu/repos?per_page=100&sort=pushed&visibility=public',
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
      },
    );
    resolve(await res.json());
  });
}

export const formatDate = (date: Date) =>
  Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    month: 'short',
    year: 'numeric',
  }).format(date);
