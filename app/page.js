import Slider from "./components/slider/slider";
import CategoryBtns from "./components/categoryBtns/categoryBtns";
import Card from "./components/card/card";

export default function Home() {
  return (
    <main className="mx-auto overflow-x-hidden">
      <Slider />
      <CategoryBtns />
      <Card />
    </main>
  );
}
