type Props = {
  src: string;
  width: number;
};

export function imageLoader({ src, width }: Props) {
  const relativeSrc = (src: string) => src.split("/").pop();
  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
}
