"use client"
import React from 'react';
import Image from 'next/image';
import { BiStar } from 'react-icons/bi';
import { useRouter } from 'next/navigation';


const Movies = ({ dt }) => {
  const router = useRouter();
  console.log(dt, "dt");
  return (
    <div onClick={() => router.push(`/movie/${dt?.id}`)}
    className='min-w-[400px] h-[300px] relative imgContainer cursor-pointer'>
      <Image style={{objectFit : 'cover'}}
        src={`https://image.tmdb.org/t/p/original${dt?.backdrop_path || dt?.poster_path}`}
        alt={dt?.title}
        width={400}
        height={300}
      />
      <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
        <div className='text-xl font-bold'>{dt?.title}</div>
        <div className='flex items-center'>
          <div>{dt?.release_date}</div>
          <div className='ml-2 flex items-center'>
            <BiStar size={20} className='text-yellow-500' />
            <div className='ml-1'>{dt?.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;