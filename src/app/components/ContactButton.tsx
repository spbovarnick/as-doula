import Link from "next/link";

const ContactButton = () => {

  return (
    <div className="w-full flex justify-center">
      <Link
        className=""
        href={"/contact"}
      >
        Contact
      </Link>
    </div>
  );
};

export { ContactButton };