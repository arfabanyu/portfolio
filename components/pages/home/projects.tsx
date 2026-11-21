'use client';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  has_pages: boolean;
  homepage: string;
  language: string[];
  stargazers_count: number;
  updated_at: string;
} & ModifiedRepo;

type ModifiedRepo = {
  displayName: string;
  category: string;
  videoSrc: string;
  isOnGoing: boolean;
  date: {
    // MM-DD-YYYY
    started: string;
    ended: string;
  };
};

const selectedRepos: Record<number, ModifiedRepo> = {
  1015474777: {
    displayName: 'Studemon',
    category: 'Web app',
    videoSrc: '',
    isOnGoing: true,
    date: {
      started: '07-07-2025',
      ended: '',
    },
  },
  1457621743: {
    displayName: 'Re:lele',
    category: 'Game web',
    videoSrc: '',
    isOnGoing: false,
    date: {
      started: '11-14-2026',
      ended: '11-15-2026',
    },
  },
};

const Projects = () => {
  return (
    <div className='50 text-sky-100' id='about'>
      <div className='grid items-center w-full bg-slate-950 px-6 pt-2 pb-8 gap-24'>
        <p className='uppercase font-body mx-auto text-sm font-bold'>
          Explore my project <br />
          <ChevronDown className='mx-auto' />
        </p>
        <h2 className='text-[9rem] leading-none font-display text-center'>
          selected works
        </h2>
      </div>
      <div className='grid gap-8 bg-slate-950'>
        <Repos />
      </div>
    </div>
  );
};

const Repos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  console.log(repos);

  useEffect(() => {
    const controller = new AbortController();
    async function getRepos() {
      const headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
        Accept: 'application/vnd.github+json',
      };
      try {
        setLoading(true);

        // 1. Fetch halaman pertama
        const firstRes = await fetch(
          `${process.env.NEXT_PUBLIC_GITBUB_API_BASE_URL}/user/repos?per_page=100&sort=pushed&affiliation=owner,collaborator&page=1`,
          {
            headers,
            signal: controller.signal,
          },
        );
        if (!firstRes.ok) throw new Error(`Error ${firstRes.status}`);

        const firstPageData = await firstRes.json();

        // 2. Cek total halaman dari header Link
        const linkHeader = firstRes.headers.get('link');
        const lastPageMatch =
          linkHeader && linkHeader.match(/page=(\d+)>; rel="last"/);

        if (!lastPageMatch) {
          setRepos(firstPageData);
          return;
        }

        const lastPage = parseInt(lastPageMatch[1], 10);

        // 3. Fetch sisa halaman (page 2 s/d terakhir) secara paralel
        const pagePromises = [];
        for (let page = 2; page <= lastPage; page++) {
          pagePromises.push(
            fetch(
              `${process.env.NEXT_PUBLIC_GITBUB_API_BASE_URL}/user/repos?per_page=100&sort=pushed&affiliation=owner,collaborator&page=${page}`,
              {
                headers,
                signal: controller.signal,
              },
            ).then((res) => {
              if (!res.ok) throw new Error(`Error pada page ${page}`);
              return res.json();
            }),
          );
        }

        const remainingPages = await Promise.all(pagePromises);

        // 4. Gabungkan semuanya jadi 1 array di state
        setRepos([firstPageData, ...remainingPages].flat());
      } catch (err) {
        if (err instanceof Error) {
          if (err.name !== 'AbortError') {
            setError(err.message);
          }
        }
      } finally {
        setLoading(false);
      }
    }

    getRepos();
    return () => controller.abort();
  }, []);

  const selectedProjects: Repo[] = repos
    .filter((repo) => repo.id in selectedRepos)
    .map((repo) => ({ ...repo, ...selectedRepos[repo.id] }));

  const formatDate = (date: Date) =>
    Intl.DateTimeFormat('id-ID', {
      timeZone: 'Asia/Jakarta',
      month: 'short',
      year: 'numeric',
    }).format(date);

  return loading
    ? null
    : error
      ? 'Error'
      : selectedProjects.map((project, i: number) => {
          const projectStarted = formatDate(new Date(project.date.started));
          const projectEnded = project.isOnGoing
            ? 'Present'
            : formatDate(new Date(project.date.ended));
          return (
            <div key={i} className=' px-8 relative bg-slate-950'>
              <div className='grid grid-cols-3 gap-8 max-w-7xl px-8 mx-auto'>
                <div className='text-right'>
                  <h3 className='text-lg font-semibold'>
                    {project.displayName}
                  </h3>
                  <p className='text-gray-400 max-w-xl'>
                    {project.category},{' '}
                    {projectStarted === projectEnded
                      ? projectStarted
                      : `${projectStarted} - ${projectEnded}`}
                  </p>
                </div>
                <div>
                  <div className='aspect-video bg-white' />
                </div>
                <div>
                  <p>
                    {project.description ??
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores vel, inventore eum assumenda, optio eius, voluptatum debitis quo minus dignissimos dolore! Et nesciunt mollitia, quidem impedit quisquam assumenda ex.'}
                  </p>
                </div>
              </div>
            </div>
          );
        });
};

export default Projects;
