import { formatTextToCapitalized } from "@/utils/util-functions";
import { MinusCircle, PlusCircle } from "lucide-react";

type Props = {
  tag: string;
  onCheck: (tagName: string) => void;
  onUncheck: (tagName: string) => void;
  isChecked: boolean;
  index: string;
};

export default function Tag({
  tag,
  onCheck,
  onUncheck,
  isChecked,
  index,
}: Props) {
  return (
    <div
      className={
        isChecked
          ? "flex items-center p-1 rounded hover:cursor-pointer bg-black text-white"
          : "flex items-center p-1 rounded hover:cursor-pointer bg-gray-200"
      }
      onClick={() => (isChecked ? onUncheck(tag) : onCheck(tag))}
      key={index}
    >
      <span className="mr-2">{formatTextToCapitalized(tag)}</span>
      {isChecked ? (
        <MinusCircle
          onClick={(e) => {
            e.preventDefault();
            onUncheck(tag);
          }}
        />
      ) : (
        <PlusCircle
          onClick={(e) => {
            e.preventDefault();
            onCheck(tag);
          }}
        />
      )}
    </div>
  );
}
