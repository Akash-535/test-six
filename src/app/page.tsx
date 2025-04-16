import Hero from "@/components/Hero";
import LogicProgram from "@/components/LogicProgram";
import LogicProgramTwo from "@/components/LogicProgramTwo";
import { Suspense } from "react";

async function getData() {
  try {
    const response = await fetch(
      "http://universities.hipolabs.com/search?name=middle",
      { method: "GET" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
}

export default async function Home() {
  // Fetch 3 times and flatten into one array
  const results = await Promise.all([
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
  ]);
  const combinedData = results.flat();

  return (
    <>
      <Suspense>
        <Hero heroContent={combinedData} />
      </Suspense>
      <LogicProgram />
      <LogicProgramTwo />
    </>
  );
}
