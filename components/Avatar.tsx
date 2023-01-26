import Image from "next/image";

type Props = {
  img: string;
};

export default function Avatar({ img }: Props) {
  return (
    <div className="relative h-12 w-12 lg:h-14 lg:w-14 mr-12">
      <Image
        src={img}
        alt="Stu Bolderson profile"
        className="rounded-full object-cover"
        priority
        fill
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
      />
    </div>
  );
}
