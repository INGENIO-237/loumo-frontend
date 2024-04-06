import { Heart, ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { toggleUserMenu } from "@/redux/slices/userDropdownSlice";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Header() {
  const showUserDropdownMenu = useSelector(
    (state: RootState) => state.userDropdown.show
  );
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        dispatch(toggleUserMenu(false))
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
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
        <div className="relative" ref={dropdownRef}>
          <MenuItem
            icon={<User onClick={() => dispatch(toggleUserMenu(!showUserDropdownMenu))} />}
            link="#"
          />
          {showUserDropdownMenu ? (
            isAuthenticated ? (
              <div className="absolute shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in mt-5 bg-gray-200 p-2 rounded w-[180px]">
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
              <div className="absolute shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in mt-5 bg-gray-200 p-2 rounded w-[180px]">
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
