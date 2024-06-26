import { Heart, ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";
import MenuItem from "./MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { logout } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    toast.success("Logout successfully!");
    navigate("/");
  }

  return (
    <div className="w-full flex justify-evenly items-center bg-[#FEFEFE] p-5">
      <div className="w-full flex justify-left pl-3">
        <Link className="flex-1" to="/">
          <h1 className="text-3xl font-bold text-orange-500">Loumo</h1>
        </Link>
      </div>
      <div className="w-full flex justify-center mx-2">
        <SearchBar />
      </div>
      <div className="flex gap-x-4  w-full justify-end pr-3">
        <MenuItem icon={<Heart />} counter={0} link="#" />
        <MenuItem icon={<ShoppingCart />} counter={0} link="#" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuItem icon={<User />} link="#" />
          </DropdownMenuTrigger>
          {isAuthenticated ? (
            <DropdownMenuContent className="mr-3 bg-white">
              <DropdownMenuItem>
                <Link className="flex-1" to="/profile">
                  <h1>Profile</h1>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="flex-1" to="#">
                  <h1>Orders</h1>
                </Link>
              </DropdownMenuItem>
              {!user?.isMerchant && (
                <DropdownMenuItem>
                  <Link className="flex-1" to="/become-merchant">
                    <h1>Become a merchant</h1>
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator className="bg-gray-100" />
              <DropdownMenuItem onClick={() => handleLogout()}>
                <Link className="flex-1" to="#">
                  <h1>Logout</h1>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          ) : (
            <DropdownMenuContent className="mr-3 bg-white">
              <DropdownMenuItem>
                <Link className="flex-1" to="/login">
                  <h1>Login</h1>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>
    </div>
  );
}
