import { Link } from "react-router-dom";

export default function Button({ link, label, color, handleClick }) {
  return (
    <Link
      to={link}
      className={
        "font-poppins font-semibold px-4 py-2 rounded-md border-2 " + color
      }
    onClick={handleClick}
    >
      {label}
    </Link>
  );
}
