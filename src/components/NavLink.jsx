import Link from "next/link";

export default function NavLink({ children, ...props }) {
  return (
    <Link
      {...props}
      className="text-white hover:text-offWhite ease-linear cursor-pointer duration-300 max-tablet:block max-tablet:p-2"
    >
      {children}
    </Link>
  );
}
