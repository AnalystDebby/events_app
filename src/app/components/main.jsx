import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Main = ({ data }) => {
  return (
    <main className="flex flex-col mb-[50px] ">
      {data?.map((ev) => (
        <div key={ev.id}>
          <Link
            href={`/events/${ev.id}`}
            className="flex flex-row gap-8 justify-center content-center items-center"
          >
            <div className="w-2/5">
              <Image src={ev.image} alt={ev.title} width={600} height={400} />
            </div>
            <div className="w-1/2">
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
};
