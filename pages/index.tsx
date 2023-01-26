// npm
import type { NextPage } from "next";
import { useQuery } from "@apollo/client";

// files
import { GET_AUTHOR } from "../lib/services";
import Button from "../components/Button";
import Image from "next/image";
import Loader from "../components/Loader";

const Home: NextPage = () => {
  // properties
  const { loading, error, data } = useQuery(GET_AUTHOR);

  const bio = data?.authors[0];

  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="max-w-[960px] mx-auto px-5 py-12">
      <p className="text">{bio.bio}</p>
      <div className="relative h-[500px] w-full md:w-8/12 mx-auto object-cover my-12 shadow-xl">
        <Image
          src="/images/coding_future.png"
          alt="Midjourney AI generated image of a developer in the future coding"
          priority
          fill
          className="object-cover shadow-xl"
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
      </div>
      <p className="text">{bio.secondBio}</p>
      <div className="mt-8 text-center">
        <Button title="contact me" />
      </div>
    </div>
  );
};

export default Home;
