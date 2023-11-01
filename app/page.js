import {Slider}  from "./components/slider/slider";
import CategoryBtns from "./components/categoryBtns/categoryBtns";
import Card from "./components/card/card";
import SideCard from "./components/sideCard/sideCard";

const getData = async () => {
  
  try {
    const res = await fetch(`${process.env.POST_URL}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const posts = await res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

 export default async function Home() {
  const posts = await getData();

  return (
    <main className="mx-auto overflow-x-hidden ">
      <Slider />
      <CategoryBtns />
      <section className="w-full  flex justify-between  max-w-6xl mx-auto mmd:items-center  ">
        <div className="w-full max-w-6xl p-6 flex flex-col justify-center  ">
         
          {posts?.slice(0, 4).map((post) => {
            return <Card post={post} key={post.id} />;
          })}
        </div>
        <SideCard />
      </section>
    </main>
  );
}


