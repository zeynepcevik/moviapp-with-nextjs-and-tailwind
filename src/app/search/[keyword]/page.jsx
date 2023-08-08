import React from "react";
import Movies from "@/components/Movies";
const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=db35d9bfe3952107b2746952cfc5893c&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();

  console.log(data?.results, "data");
  return (
    <div>
      {!data?.results ? (
        <div className="flex items-center justify-center">
          Aranılan film bulunamadı.
        </div>
      ) : (
        <div className="flex items-center flex-wrap gap-3">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;