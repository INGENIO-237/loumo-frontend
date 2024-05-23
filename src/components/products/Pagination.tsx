import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";

type Props = {
  total: number;
  page: number;
  perPage: number;
  handleNext: () => void;
  handlePrev: () => void;
};

export default function Pagination({
  total,
  page,
  perPage,
  handleNext,
  handlePrev,
}: Props) {
  const pages = Math.round(total / perPage);
  return (
    <div className="flex justify-center items-center w-full gap-2 mb-10">
      {page !== 1 && (
        <ArrowLeftSquare
          onClick={() => handlePrev()}
          className="hover:cursor-pointer hover:scale-[120%] ease-in-out transform transition duration-500"
        />
      )}
      <span>
        {page} of {pages}
      </span>
      {pages !== 1 && (
        <ArrowRightSquare
          onClick={() => handleNext()}
          className="hover:cursor-pointer hover:scale-[120%] ease-in-out transform transition duration-500"
        />
      )}
    </div>
  );
}
