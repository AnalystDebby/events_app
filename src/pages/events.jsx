import Image from "next/image";
import Link from "next/link";
import React from "react";

// import { events_categories } from "../../public/data/data.json";

export default function EventsPage() {
  // const events = events?.map((ev) => {
  //   return (
  //     <div key={ev.id} className=" mb-10">
  //       <Link href={`/events/${ev.id}`}>
  //         <Image src={ev.image} alt={ev.city} width={300} height={400} />
  //         <h2 className="font-extrabold">{ev.title}</h2>
  //       </Link>
  //     </div>
  //   );
  // });

  return (
    <div className="">
      <h1 className="font-bold mb-5">Events Page</h1>
      {events_categories}
    </div>
  );
}

// export default function EventsPage() {
//   const events = Data?.map((ev) => {
//     return (
//       <div key={ev.id} className="relative ">
//         <Link href={`/events/${ev.id}`}>
//           <Image src={ev.image} alt={ev.city} width={500} height={500} />
//           <h2 className="absolute w-full top-1/2 text-center text-[38px] text-white uppercase shadow-lg">
//             {ev.title}
//           </h2>
//         </Link>
//       </div>
//     );
//   });

//   return <div className="flex flex-row">{events}</div>;
// }

// .events_page {
//   display: flex;
//   flex-direction: row;
//   gap: 20px;

//   .card {

//     position: relative;

//     h2 {
//       position: absolute;
//       width: 100%;
//       top: 50%;
//       text-align: center;
//       font-size: 38px;
//       color: white;
//       text-transform: uppercase;
//       text-shadow: 1px 1px 20px black;
//     }
//   }
// }
