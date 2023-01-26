// npm
import { useQuery } from "@apollo/client";
import Image from "next/image";

// files
import { GET_AUTHOR } from "../lib/services";

export default function about() {
  // properties
  const { loading, error, data } = useQuery(GET_AUTHOR);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const bio = data?.authors[0];

  return (
    <div className="max-w-[1020px] mx-auto px-5 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="relative">
          <Image
            src={bio.displayImage.url}
            alt="Midjourney AI generated image of Stuart Bolderson"
            priority
            width="0"
            height="0"
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-full p-5"
          />
        </div>
        <div>
          <p className="text">{bio.aboutBio}</p>
          <h2 className="uppercase py-4 active-link">{bio.availability}</h2>
        </div>
      </div>
    </div>
  );
}
