// npm
import { useQuery } from "@apollo/client";

// files
import { GET_COMMENTS } from "../lib/services";

type CommentProp = {
  comment: string;
  idx: number;
  name: string;
};

export default function Comments({ slug }: any) {
  const { loading, error, data } = useQuery(GET_COMMENTS, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const emptyList = data?.comments.length === 0 && "* Comments list is empty *";

  return (
    <div className="py-8">
      <p>{emptyList}</p>
      <div>
        {data?.comments.map((comment: CommentProp, idx: number) => (
          <div
            key={idx}
            className="bg-gray layout-width my-4 p-4 flex flex-col justify-between rounded-sm text-black"
          >
            <p className="text-start">{comment.comment}</p>
            <small className="text-end font-light italic">{comment.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
