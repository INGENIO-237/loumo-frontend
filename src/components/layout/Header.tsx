import { Heart, ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { toggleUserMenu } from "@/redux/slices/userDropdownSlice";
import { Link } from "react-router-dom";

export default function Header() {
  const showUserDropdownMenu = useSelector(
    (state: RootState) => state.userDropdown.show
  );
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-evenly items-center bg-[#FEFEFE] p-5">
      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-bold text-orange-500">Loumo</h1>
      </div>
      <div className="w-full flex justify-center mx-2">
        <SearchBar />
      </div>
      <div className="flex gap-x-4  w-full justify-center">
        <MenuItem icon={<Heart />} counter={0} link="#" />
        <MenuItem icon={<ShoppingCart />} counter={0} link="#" />
        <div className="relative">
          <MenuItem
            icon={<User onClick={() => dispatch(toggleUserMenu())} />}
            link="#"
          />
          {showUserDropdownMenu ? (
            isAuthenticated ? (
              <div className="absolute mt-5 bg-gray-200 p-2 rounded">
                <Link to="#">
                  <h1>{user?.email}</h1>
                </Link>
                <Link to="#">
                  <h1>wijdidwijdi</h1>
                </Link>
                <Link to="#">
                  <h1>wijdidwijdi</h1>
                </Link>
              </div>
            ) : (
              <div className="absolute mt-5 bg-gray-200 p-2 rounded">
                <Link to="/login">
                  <h1>Login</h1>
                </Link>
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
