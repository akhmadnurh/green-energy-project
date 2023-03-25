import Link from "next/link";

const Content = ({ category, title, link }) => {
  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink  text-white">
      <div className="flex-1 bg-gray-900  rounded-t rounded-b-none overflow-hidden shadow-lg">
        <div className="flex flex-wrap no-underline hover:no-underline">
          <img
            src="https://source.unsplash.com/collection/226/800x600"
            className="h-64 w-full rounded-t pb-6"
          />
          <div className="w-full flex items-center justify-center">
            <p className=" text-black text-xs md:text-sm  text-center rounded-full mt-2 px-2 bg-gradient-to-r from-white to-gray-500">
              {category}
            </p>
          </div>
          <div className="w-full font-bold text-xl mt-6 px-6">{title}</div>
          {/* <p className=" font-serif text-base px-6 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p> */}
        </div>
      </div>
      <div className="bg-gray-900 flex-none mt-auto  rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-end">
          <Link href={link}>
            <p className=" text-xs md:text-sm text-gray-300 hover:text-white">
              READ MORE {">>"}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Content;
