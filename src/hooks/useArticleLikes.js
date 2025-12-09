import { startTransition, useEffect, useOptimistic, useState } from "react";
import useRequest from "./useRequest.js";
import { useUserContext } from "../contexts/userContext.jsx";
import { toast } from "react-toastify";

// const base_url = import.meta.env.VITE_APP_SERVER_URL;

const useArticleLikes = (articleId) => {
    const { isAuthenticated, user } = useUserContext();
    const { request } = useRequest();
    const [likesCount, setLikesCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);


    useEffect(() => {
        // безопасност срещу ранни рендъри
        if (typeof articleId !== "string" || !articleId) return;

        const loadLikes = async () => {
            const res = await request(`/data/likes?where=articleId%3D%22${articleId}%22`);
            setLikesCount(res.length);

            if (isAuthenticated) {
                const userLike = res.find(l => l._ownerId === user._id);
                setHasLiked(Boolean(userLike));
            }
        };

        loadLikes();
    }, [articleId, isAuthenticated, request, user]);

    const likeHandler = async () => {
        if (!isAuthenticated) return alert("Login first.");

        // Ако вече е лайкнал → изтриваме лайка
        if (hasLiked) {
            const res = await request(`/data/likes?where=articleId%3D%22${articleId}%22`, "GET");
            const userLike = res.find(l => l._ownerId === user._id);

            if (userLike) {
                await request(`/data/likes/${userLike._id}`, "DELETE");
                setLikesCount(likesCount - 1);
                setHasLiked(false);
            }

            return;
        }

        // Ако НЕ е лайкнал → създаваме нов лайк
        await request(`/data/likes`, "POST", { articleId });
        setLikesCount(likesCount + 1);
        setHasLiked(true);
    };

    return {
        likesCount,
        hasLiked,
        likeHandler
    }
};

export default useArticleLikes;