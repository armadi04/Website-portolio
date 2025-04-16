import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.menuOpen);

  const handleToggleMenu = () => {
    if (isMenuOpen) {
      dispatch(closeMenu());
    } else {
      dispatch(toggleMenu());
    }
  };

  return (
    <button
      className="text-2xl p-2 border border-orange rounded-full transition-all duration-300 hover:scale-110"
      onClick={handleToggleMenu}
    >
      {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
    </button>
  );
};

export default NavbarToggler;
