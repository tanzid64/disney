const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movie }) => {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in cursor-pointer">
      <img
        src={IMG_BASE_URL + movie.backdrop_path}
        alt=""
        className="w-[110px] md:w-[250px] rounded-lg hover:border-[3px] border-gray-400 "
      />
      <h2 className="w-[110px] md:w-[250px] mt-2">{movie.title}</h2>
    </section>
  );
};

export default HrMovieCard;
