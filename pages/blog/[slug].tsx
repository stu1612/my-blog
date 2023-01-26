// npm
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

// files
import { GET_BLOG_DETAIL } from "../../lib/services";
import Button from "../../components/Button";
import CMSRichText from "../../components/CMSRichText";
import Comments from "../../components/Comments";
import CommentsForm from "../../components/CommentsForm";

export default function BlogDetail() {
  // properties
  const router = useRouter();
  const { slug } = router.query;

  const { loading, error, data } = useQuery(GET_BLOG_DETAIL, {
    variables: { slug },
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const post = data?.post;

  return (
    <div className="max-w-[960px] mx-auto px-5 py-12">
      <div className="text-center layout-width mx-auto">
        <div className="mt-4">
          <div className="w-full px-4 mx-auto text-justify">
            {/* <small>{post.createdAt}</small> */}
            <div className="my-8 text-right">
              <small className="text font-light active-link">
                {new Date(post.createdAt).toLocaleString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </small>
            </div>

            <CMSRichText data={data} />
          </div>
        </div>
        <CommentsForm slug={slug} />
        <Comments slug={slug} />
        <Button title="Go back" clickhandler={() => router.back()} />
      </div>
    </div>
  );
}
