import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="absolute left-2/4 mt-4">
      <Circles
        height="60"
        width="60"
        color="#57dcbe"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
