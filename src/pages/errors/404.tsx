import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/404.png";
import { ArrowLeftIcon } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="bg-orange-400 h-[100vh] w-[100%] flex items-center">
      <div className="flex flex-col w-[100%] justify-center items-center">
        <img src={NotFoundImage} className="w-[30%]" alt="Not Found Image" />
        <Link to="/" className="flex text-white hover:underline">
          <ArrowLeftIcon className="mr-3" /> Return to the homepage
        </Link>
      </div>
    </div>
  );
}
