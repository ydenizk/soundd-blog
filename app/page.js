import Slider from "./components/slider/slider";
import CategoryBtns from "./components/categoryBtns/categoryBtns";
import Card from "./components/card/card";
import data from "./maninData";
import SideCard from "./components/sideCard/sideCard";

export default function Home() {
  return (
    <main className="mx-auto overflow-x-hidden">
      <Slider />
      <CategoryBtns />
      <section className="w-full  flex justify-between max-w-6xl mx-auto ">
        <div className="w-full max-w-6xl p-6 flex flex-col justify-center  ">
          {data.map((dt) => {
            return <Card dt={dt} key={dt.id} />;
          })}
        </div>
        <SideCard />
      </section>
    </main>
  );
}
