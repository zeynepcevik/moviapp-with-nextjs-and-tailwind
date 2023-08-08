import React from "react";
import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=db35d9bfe3952107b2746952cfc5893c`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  console.log(id, "id");
  console.log(movieDetail);

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
        alt={movieDetail?.title}
      />
      <div className="absolute">
        <div className="text-3xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2 ">{movieDetail?.overview}</div>
        <div className="my-2 border w-24 p-1 hover:bg-white hover:text-black rounded-md text-center text-sm cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
