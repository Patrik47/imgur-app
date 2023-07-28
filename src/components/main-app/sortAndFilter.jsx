import postsData from '../../posts.json';

function sortAndFilter(mainSelectedOption, alternativeSelectedOption) {
  if (mainSelectedOption === 'USER SUBMITTED' && alternativeSelectedOption === 'POPULAR') {
    // must be user sumbitted and are sorted by views in ascending order
    return postsData
      .filter((post) => post.user_submitted === true)
      .sort((a, b) => (a.views > b.views ? -1 : 1));
  } else if (mainSelectedOption === 'USER SUBMITTED' && alternativeSelectedOption === 'RISING') {
    // must be user sumbitted and are sorted by upvotes in ascending order
    return postsData
      .filter((post) => post.user_submitted === true)
      .sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1));
  } else if (mainSelectedOption === 'USER SUBMITTED' && alternativeSelectedOption === 'NEWEST') {
    // must be user sumbitted and are sorted by date submitted from latest to oldest
    return postsData
      .filter((post) => post.user_submitted === true)
      .sort((a, b) =>
        new Date(a.date).toISOString().split('T')[0] < new Date(b.date).toISOString().split('T')[0]
          ? 1
          : -1
      );
  } else if (mainSelectedOption === 'HIGHEST SCORING' && alternativeSelectedOption === 'TODAY') {
    return postsData
      .filter(
        (post) =>
          new Date(post.date).toISOString().split('T')[0] === new Date().toISOString().split('T')[0]
      )
      .sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1));
    // posts posted today and sorted by upvotes from highest to lowest
  } else if (mainSelectedOption === 'HIGHEST SCORING' && alternativeSelectedOption === 'WEEK') {
    // posts posted within 7 days and sorted by upvotes from highest to lowest
    return postsData
      .filter(
        (post) =>
          new Date(post.date).getFullYear() === new Date().getFullYear() &&
          new Date(post.date).getMonth() === new Date().getMonth() &&
          new Date().getDate() - new Date(post.date).getDate() >= 0 &&
          new Date().getDate() - new Date(post.date).getDate() < 7
      )
      .sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1));
  } else if (mainSelectedOption === 'HIGHEST SCORING' && alternativeSelectedOption === 'MONTH') {
    // posts posted within the current month and year and sorted by upvotes from highest to lowest
    return postsData
      .filter(
        (post) =>
          new Date(post.date).getFullYear() === new Date().getFullYear() &&
          new Date(post.date).getMonth() === new Date().getMonth()
      )
      .sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1));
  } else if (mainSelectedOption === 'HIGHEST SCORING' && alternativeSelectedOption === 'YEAR') {
    // posts posted within the same year and sorted by upvotes from highest to lowest
    return postsData
      .filter((post) => new Date(post.date).getFullYear() === new Date().getFullYear())
      .sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1));
  } else if (mainSelectedOption === 'HIGHEST SCORING' && alternativeSelectedOption === 'ALL TIME') {
    // all posts sorted by upvotes from highest to lowest
    return postsData.sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1));
  } else if (mainSelectedOption === 'MOST VIRAL' && alternativeSelectedOption === 'POPULAR') {
    // posts with upvotes higher than 1000 and comments higher than 100, sorted by upvotes in desceding order
    return postsData
      .filter((post) => post.upvotes > 1000 && post.number_of_comments > 100)
      .sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1));
  } else if (mainSelectedOption === 'MOST VIRAL' && alternativeSelectedOption === 'NEWEST') {
    // posts with upvotes higher than 1000 and comments higher than 100, sorted by date from latest to oldest
    return postsData
      .filter((post) => post.upvotes > 1000 && post.number_of_comments > 100)
      .sort((a, b) =>
        new Date(a.date).toISOString().split('T')[0] < new Date(b.date).toISOString().split('T')[0]
          ? 1
          : -1
      );
  } else if (mainSelectedOption === 'MOST VIRAL' && alternativeSelectedOption === 'BEST') {
    // posts with upvotes higher than 1000 and comments higher than 100, sorted sum of upvotes and comments in descending order
    return postsData
      .filter((post) => post.upvotes > 1000 && post.number_of_comments > 100)
      .sort((a, b) =>
        a.upvotes + a.number_of_comments > b.upvotes + b.number_of_comments ? -1 : 1
      );
  } else if (mainSelectedOption === 'MOST VIRAL' && alternativeSelectedOption === 'RANDOM') {
    // posts with upvotes higher than 1000 and comments higher than 100, picked randomly
    return postsData
      .slice(0, Math.floor(Math.random() * (postsData.length - 1) + 1))
      .filter((post) => post.upvotes > 1000 && post.number_of_comments > 100);
  } else {
    return postsData;
  }
}
export default sortAndFilter;
