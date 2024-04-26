import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export default function RequestLoader({ className }: Props) {
  return (
    <div
      className={
        className
          ? className
          : "bg-blue-500 px-5 py-2 flex justify-center disabled w-full rounded cursor-not-allowed mb-4 opacity-50"
      }
    >
      <Loader className="animate-spin" />
    </div>
  );
}
