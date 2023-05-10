import React from "react";
import { pathExists, readFile } from "fs-extra/esm";
import { join } from "path";

const Dipo = ({ data }) => {
  console.log(data, "vvvvv");
  return <div>dipo</div>;
};

// export async function getStaticProps() {
//   const fs = require("fs/promises");
//   const path = require("path");
//   const filePath = path.join(process.cwd(), "/data", "/data.json");

//   let data = await fs.readFileSync("/data/data.json");
//   data = JSON.parse(data);
//   console.log(dataJson, "eeee");

//   return {
//     props: {
//       data: data.data,
//     },
//   };
// }

export async function getStaticProps() {
  // const fs = require("fs");
  // const path = require("path");
  const filePath = join(process.cwd(), "../../public/data/data.json");

  let data = await readFile("../../public/data/data.json");
  // const dataJson = JSON.parse(data);
  // console.log(dataJson);
  console.log("data");

  return {
    props: {
      data: data,
    },
  };
}

export default Dipo;
