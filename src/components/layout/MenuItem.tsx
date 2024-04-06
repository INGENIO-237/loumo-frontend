import { Link } from "react-router-dom";

type Props = {
  icon: React.ReactElement;
  counter?: number;
  link: string;
};

export default function MenuItem({ icon, counter, link }: Props) {
  return (
    <Link to={link} className="flex gap-1">
      {icon}
      {counter && <span>{counter}</span>}
    </Link>
  );
}
