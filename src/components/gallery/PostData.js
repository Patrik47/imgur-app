import postsData from "../../posts.json";

export default function PostData(id) {
    return postsData.filter(post => post.id === id);
}