import postsData from "C:/Users/pvdoviak001/Downloads/abc/imgur-app/src/posts.json";

export default function returnPostData(id) {
    return postsData.filter(post => post.id === id);
}