import GenreMovieList from "./Components/Genre/GenreMovieList";
import Header from "./Components/Header/Header";
import ProductionHouse from "./Components/ProductionHouse/ProductionHouse";
import Slider from "./Components/Slider";

export default function App() {
  return <div className="bg-black text-white">
    <Header />
    <Slider />
    <ProductionHouse />
    <GenreMovieList/>
  </div>
}
