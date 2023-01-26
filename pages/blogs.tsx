// npm
import { useQuery } from "@apollo/client";
import BlogCard from "../components/BlogCard";

// files
import { GET_BLOGS } from "../lib/services";

export default function blogs() {
  // properties
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="max-w-[1200px] mx-auto px-5 py-8">
      <div className="grid grid-cols-1 p-5 gap-12 md:grid-cols-2 lg:grid-cols-3 ">
        {data?.posts.map((post: Base) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
