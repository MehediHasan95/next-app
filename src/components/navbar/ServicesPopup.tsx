import Image from "next/image";
import Link from "next/link";

const serviceItems = [
  {
    name: "Bike",
    path: "/",
  },
  {
    name: "Car",
    path: "/",
  },
  {
    name: "Food",
    path: "/",
  },
  {
    name: "Parcel",
    path: "/",
  },
];

function ServicesPopup({ service }: any) {
  return (
    <>
      <ul
        className={`${
          service === "Services" ? "block" : "hidden"
        } absolute top-8 left-20 p-3 space-y-2 rounded-lg service-box-shadow`}
      >
        {serviceItems.map(({ name, path }, index) => (
          <li
            key={index}
            className="hover:text-red-500 block border border-transparent p-1 hover:border-dashed hover:border-red-500 hover:scale-105 duration-300 hover:duration-300 rounded-lg"
          >
            <Link href="/">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10">
                  <Image
                    src="https://i.pinimg.com/564x/8e/7c/f8/8e7cf820d304a8720afc8981c5043e3f.jpg"
                    width={100}
                    height={100}
                    alt="abcd"
                  />
                </div>
                <div>
                  <p>{name}</p>
                  <p className="text-xs">Lorem ipsum dolor sit</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ServicesPopup;
