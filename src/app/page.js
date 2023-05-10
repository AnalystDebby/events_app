import { Main } from "./components/main";
import { Nav } from "./components/nav";
import Head from "next/head";
import icon from "/src/app/favicon.ico";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Events App</title>
        <meta name="description" content="An Events App" />
        <link rel="icon" href={icon} />
      </Head>
      <Nav />
      <Main />
    </div>
  );
}

// export async function getStaticProps() {
//   const fs = require("fs/promises");
//   const path = require("path");
//   const filePath = path.join(process.cwd(), "/data", "/data.json");

//   let data = await fs.readFile(filePath);
//   data = JSON.parse(data);
//   console.log(dataJson, "eeee");

//   return {
//     props: {
//       data: data.data,
//     },
//   };
// }
