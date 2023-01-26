export default function Button({ title, clickhandler }: Button) {
  return (
    <button
      type="button"
      className="font-light border-2 transition uppercase ease-linear rounded-sm focus:outline-none text-sm p-4 text-center hover:bg-blue hover:border-blue hover:text-white dark:hover:text-black dark:hover:bg-red dark:hover:border-red"
      onClick={clickhandler}
    >
      {title}
    </button>
  );
}
