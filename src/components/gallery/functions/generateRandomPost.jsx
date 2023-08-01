import { fakerEN as faker } from '@faker-js/faker';

function generateRandomPosts() {
  let randomPosts = [];
  for (let i = 1; i <= 5; i++) {
    randomPosts.push({
      url: faker.image.url(),
      text: faker.word.words({ count: { min: 3, max: 9 } })
    });
  }
  return randomPosts;
}

export default generateRandomPosts;
