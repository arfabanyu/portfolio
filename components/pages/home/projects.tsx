'use client';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Repo = {
  name: string;
  description: string;
  html_url: string;
  has_pages: boolean;
  homepage: string;
  language: string[];
  stargazers_count: number;
  updated_at: string;
};

const selectedRepos = ['portfolio', 'arfa-banyu-santoro'];

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function getRepos() {
      const headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
        Accept: 'application/vnd.github+json',
      };
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_GITBUB_API_BASE_URL}`,
          { headers },
        );
        setRepos(await res.json());
      } catch (error) {
        console.log(error);
      }
    }

    getRepos();
  }, []);

  const selectedProjects: Repo[] = repos.filter((repo) =>
    selectedRepos.includes(repo.name),
  );
  // .map((repo) => ({
  //   name: repo.name,
  //   description: repo.description,
  //   language: repo.language,
  //   url: repo.html_url,
  //   stars: repo.stargazers_count,
  //   updatedAt: repo.updated_at,
  // }));
  console.log(repos);
  return (
    <div className='50' id='about'>
      <div className='grid items-center w-full bg-sky-950 px-6 pt-2 pb-8 gap-24'>
        <p className='uppercase font-body mx-auto text-sm font-bold'>
          Explore my project <br />
          <ChevronDown className='mx-auto' />
        </p>
        <h2 className='text-9xl font-display text-center'>Selected Projects.</h2>
      </div>
      <div>
        {' '}
        {selectedProjects.map((repo, i: number) => {
          return (
            <div key={i} className='border-t p-6 relative'>
              <h3 className='text-4xl break-words font-mono md:text-4xl leading-13 md:leading-20 uppercase'>
                {repo.name.replaceAll('-', ' ')}
              </h3>
              <p className='text-sm text-gray-400 max-w-2xl'>
                {repo.description}
              </p>
              <div className='flex pt-4 gap-2 *:p-2 *:first:bg-white *:first:hover:bg-gray-400 *:first:text-black *:last:ring *:last:ring-white *:last:hover:border-none *:last:hover:bg-gray *:last:hover:text-black *:transition-all'>
                <Link href={repo.html_url}>See Repo</Link>
                {repo.has_pages ? (
                  <Link href={repo.homepage}>See Page</Link>
                ) : (
                  <div className='opacity-0'></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
