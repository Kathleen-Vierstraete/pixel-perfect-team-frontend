import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarCount = ({count}) => {
  return (
    <div className="flex items-center text-secondary">
      {[...Array(5)].map((x, i) =>
                  i + 1 <= count ? (
                    <FaStar key={i} />
                  ) : i + 0.5 <= count ? (
                    <FaStarHalfAlt key={i} />
                  ) : (
                    <FaRegStar key={i} />
                  )
                )}
    </div>
  )
}

export default StarCount
