import { fakerEN as faker } from '@faker-js/faker';

function generatePosts() {
  let posts = [];
  let comments = [];
  let replies = [];
  let commentID = 0;
  let replyID = 0;
  for (let i = 0; i < 100; i++) {
    const numberOfComments = faker.number.int({ min: 0, max: 51 });
    const numberOfMainComments = faker.number.int({ min: 0, max: 8 });
    posts.push({
      id: i,
      title: faker.word.words(Math.floor(Math.random() * 3) + 5),
      author: faker.person.fullName(),
      device: faker.helpers.arrayElement(['Android', 'iPhone', 'Web']),
      long_description: faker.word.words(Math.floor(Math.random() * 50) + 10),
      user_submitted: faker.datatype.boolean(),
      upvotes: faker.number.int({ min: -10, max: 150000 }),
      number_of_comments: numberOfComments,
      date: faker.date.between({
        from: '2020-01-01T00:00:00.000Z',
        to: '2023-08-02T00:00:00.000Z'
      }),
      views: faker.number.int({ min: 0, max: 150000 })
    });
    for (let j = 0; j < numberOfMainComments; j++) {
      const repliesNumber = faker.number.int({ min: 0, max: 7 });
      comments.push({
        post_id: i,
        comment_id: commentID++,
        author: faker.person.fullName(),
        device: faker.helpers.arrayElement(['Android', 'iPhone', 'Web']),
        date_published: faker.date.between({
          from: '2020-01-01T00:00:00.000Z',
          to: '2023-07-27T00:00:00.000Z'
        }),
        comment: faker.word.words(Math.floor(Math.random() * 10) + 5),
        upvotes: faker.number.int({ min: -10, max: 10000 })
      });
      for (let k = 0; k < repliesNumber; k++) {
        replies.push({
          comment_id: commentID,
          reply_id: replyID++,
          author: faker.person.fullName(),
          device: faker.helpers.arrayElement(['Android', 'iPhone', 'Web']),
          date_published: faker.date.between({
            from: '2020-01-01T00:00:00.000Z',
            to: '2023-07-27T00:00:00.000Z'
          }),
          comment: faker.word.words(Math.floor(Math.random() * 10) + 5),
          upvotes: faker.number.int({ min: -10, max: 10000 })
        });
      }
    }
  }
  // console.log(posts);
  // console.log(comments);
  // console.log(replies);
}
export default generatePosts;
