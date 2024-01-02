import Content from '@/components/Home/Content'
import FilterBar from '@/components/Home/FilterBar'
import Header from '@/components/Home/Header'
import HonorableMention from '@/components/Home/HonorableMention'
import { User, getAlbumById, getArtistById, songsWithAlbumAndArtist } from '@/types'
import Image from 'next/image'


const loggedInUser: User = {
  id: '0',
  username: 'JohnDoe',
  email: 'john@mail.com',
  image: 'https://avatars.githubusercontent.com/u/56843051?v=4',
  uri: '',
  karma: 9999,
}

type Song = {
  title: string;
  album: {
    title: string;
    albumArt: string;
    artist: {
      name: string;
    }
  }
}

export default function Home() {
  // Limit to 5 songs
  // const honorableMentions = songsWithAlbumAndArtist.slice(0, 2);
  const songs = songsWithAlbumAndArtist.map((song) => song as Song);
  const honorableMentions: Song[] = songs.slice(0, 1);

  return (
    <main className="flex flex-col justify-start min-h-screen">
      <Header user={loggedInUser} />

      <div className='grid grid-cols-3 border-cyan-100 border-2 gap-2 gap-x-6 self-center'>
        <div className='col-span-3 md:col-span-2'>
          <FilterBar />
        </div>

        <div className='row-start-2 col-start-1 col-span-2'>
          <Content />
        </div>

        {honorableMentions && (
          <div className='row-start-2 col-start-3 gap-3 hidden md:block'>
            <h1 className='text-white text-2xl font-bold'>Honorable Mentions</h1>
            {honorableMentions.map((song) => (
              <HonorableMention
                key={song.title}
                image={song.album.albumArt}
                title={song.title}
                artist={song.album.artist.name}
              />
            ))}
          </div>
        )}
      </div>

    </main >
  )
}
