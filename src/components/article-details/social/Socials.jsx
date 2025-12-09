import { Heart } from "lucide-react";
import useArticleLikes from "../../../hooks/useArticleLikes.js";

export default function Socials({ articleId }) {
    const { likesCount, hasLiked, likeHandler } = useArticleLikes(articleId);

    return (
        <div className="flex items-center gap-4 text-gray-400">
            <button
                onClick={likeHandler}
                className={`
                    flex items-center gap-1.5 font-bold transition-all 
                    ${hasLiked
                        ? 'text-[#e10600] transform scale-110' // Active/Liked state classes
                        : 'text-gray-400 hover:text-[#e10600]'}`}>
                <Heart
                    size={20}
                    // Fill the heart icon solid red when hasLiked
                    fill={hasLiked ? '#e10600' : 'none'}
                />
                {likesCount}
            </button>
        </div>
    );
}