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
  return (
    <div className="flex justify-center items-center w-full gap-2 mb-10">
      <ArrowLeftSquare
        onClick={() => handlePrev()}
        className="hover:cursor-pointer"
      />
      <span>
        {page} of {Math.round(total / perPage)}
      </span>
      <ArrowRightSquare
        onClick={() => handleNext()}
        className="hover:cursor-pointer"
      />
    </div>
  );
}
