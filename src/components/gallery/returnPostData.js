import postsData from "../../posts.json";

export default function returnPostData(id) {
    return postsData.filter(post => post.id === id);
}