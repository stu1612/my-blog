// npm
import Image from "next/image";
import Link from "next/link";

// files
import Button from "./Button";

export default function BlogCard({ post }: Blog) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="cursor-pointer group  pb-4 border-b-2 border-gray md:pb-0 md:border-b-0"
    >
      <div className="relative h-[200px]">
        <Image
          src={post.image.url}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="object-contain"
          placeholder="blur"
          blurDataURL={post.image.url}
        />
      </div>
      <small className="uppercase font-light tracking-widest">
        {post.categories[0].name}
      </small>
      <h1 className="my-4 transition ease-linear text-2xl font-semibold group-hover:text-blue dark:group-hover:text-red">
        {post.title}
      </h1>
      <Button title="Read more" />
    </Link>
  );
}
