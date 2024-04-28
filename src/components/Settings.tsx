import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useDeleteAccount } from "@/data/services/auth.services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logout } from "@/redux/slices/authSlice";
import RequestLoader from "./ui/request-loader";

export default function Settings() {
  const [showDelete, setShowDelete] = useState(false);
  const { deleteAccount, isLoading, isSuccess, error } = useDeleteAccount();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account deleted");
      dispatch(logout());
      return navigate("/");
    }

    if (error) toast.error("Something went wrong. Retry.");
  }, [isSuccess, error]);

  return (
    <div>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">
            Password Reset
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:no-underline">
            Advanced
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo laboriosam optio, obcaecati error molestiae quidem natus
              similique ipsa delectus. Temporibus tenetur deleniti distinctio
              asperiores minus.
            </p>

            <div className="mt-5 flex justify-end">
              <Dialog
                open={showDelete}
                onOpenChange={(isOpen) => setShowDelete(isOpen)}
              >
                <DialogTrigger>
                  <button
                    type="button"
                    className="bg-red-500 p-2 rounded text-white"
                  >
                    Delete account
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Soluta deserunt sint, corporis quos quod id aut eaque
                      praesentium fuga eos.
                    </p>
                    <div className="flex justify-end mt-5">
                      {!isLoading && (
                        <button
                          type="button"
                          className="p-2 rounded border mr-5"
                          onClick={() => setShowDelete(false)}
                        >
                          Cancel
                        </button>
                      )}
                      {isLoading ? (
                        <RequestLoader className="bg-red-500 p-2 rounded flex justify-center opacity-60 text-white w-[17%] cursor-not-allowed" />
                      ) : (
                        <button
                          type="button"
                          className="bg-red-500 p-2 rounded text-white"
                          onClick={async () => await deleteAccount()}
                        >
                          Proceed
                        </button>
                      )}
                    </div>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
