import postsData from '../../../posts.json';

function loadPostData(id) {
  return postsData.filter((post) => post.id === id);
}
export default loadPostData;
