import Link from "next/link";

const ContactButton = () => {

  return (
    <Link
      className="p-4 border bg-[#E1F0C4] rounded-tr-lg rounded-br-3xl rounded-bl-lg rounded-tl-3xl"
      href={"/contact"}
    >
      Contact
    </Link>
  );
};

export { ContactButton };