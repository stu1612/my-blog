// npm
import { useRef, useState } from "react";

// files
import { submitComment } from "../lib/services";

type Props = {
  slug: undefined | string | string[];
};

export default function CommentsForm({ slug }: Props) {
  // state
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef<HTMLTextAreaElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const emailEl = useRef<HTMLInputElement>(null);

  // methods
  const handleSubmit = () => {
    setError(false);

    const { value: comment } = commentEl.current as HTMLTextAreaElement;
    const { value: name } = nameEl.current as HTMLInputElement;
    const { value: email } = emailEl.current as HTMLInputElement;

    if (!comment || !name) {
      setError(error);
      return;
    }

    const commentObj = {
      name,
      comment,
      email,
      slug,
    };

    submitComment(commentObj).then(() => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-green dark:bg-darkOrange text-black shadow-lg rounded-sm p-8 pb-12 w-full justify-center items-center my-10 ">
      <p className="text mb-8  text-start">
        If you wish to leave a suggestion / tips / thoughts or anything else
        please add a comment for it to be reviewed and published !
      </p>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="baseInput textfield"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type={"text"}
          ref={nameEl}
          className="baseInput input"
          placeholder="Name"
          name="name"
        />
        <input
          type={"email"}
          ref={emailEl}
          className="baseInput input"
          placeholder="Email"
          name="email"
        />
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button onClick={handleSubmit}>Submit</button>

        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comment Submitted for review
          </span>
        )}
      </div>
    </div>
  );
}
