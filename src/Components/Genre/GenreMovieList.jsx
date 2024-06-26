import MovieList from "./MovieList";
import { genere } from "./data";

const GenreMovieList = () => {
  return (
    <div className="">
      {genere.map((item, index) => (
        <div key={item.id} className="p-8 md:px-16">
          <h2 className="text-[20px] font-bold">{item.name}</h2>
          <MovieList key={item.id} genereId={item.id} index_={index} />
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;
