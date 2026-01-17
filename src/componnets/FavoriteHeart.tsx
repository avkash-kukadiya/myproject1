import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

interface FavoriteHeartProps {
  fav: boolean;
  onClick: () => void;
  size?: number;
}

const FavoriteHeart = ({ fav, onClick, size = 22 }: FavoriteHeartProps) => {
  return (
    <span onClick={onClick} style={{ cursor: "pointer" }}>
      {fav ? (
        <FaHeart color="red" size={size} />
      ) : (
        <FiHeart size={size} className="text-pink-500" />
      )}
    </span>
  );
};

export default FavoriteHeart;
