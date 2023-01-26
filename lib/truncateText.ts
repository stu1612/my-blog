export default function truncateText(text: string, length: number) {
  return `${text.slice(0, length)} ...`;
}
