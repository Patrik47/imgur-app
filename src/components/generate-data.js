import { fakerEN as faker } from '@faker-js/faker';

export default function generatePosts() {
    let posts = [];
    for (let i = 0; i < 320; i++) {
        const commentsNumber = faker.number.int({ min: 0, max: 150 });
        let comments = [];
        for (let j = 0; j < commentsNumber; j++) {
            const repliesNumber = faker.number.int({min: 0, max: 7});
            let replies = [];
            for (let k = 0; k < repliesNumber; k++) {
                replies.push({
                    "author": faker.person.fullName(),
                    "device": faker.helpers.arrayElement(['Android', 'iPhone', 'Web']),
                    "date_published": faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2023-07-27T00:00:00.000Z' }),
                    "comment": faker.word.words(Math.floor(Math.random() * 10) + 5),
                    "upvotes": faker.number.int({ min: -10, max: 10000 }),
                });
            }
            comments.push({
                "author": faker.person.fullName(),
                "device": faker.helpers.arrayElement(['Android', 'iPhone', 'Web']),
                "date_published": faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2023-07-27T00:00:00.000Z' }),
                "comment": faker.word.words(Math.floor(Math.random() * 10) + 5),
                "upvotes": faker.number.int({ min: -10, max: 10000 }),
                "replies": replies
            });
        }
        posts.push({
            "id": i,
            "title": faker.word.words(Math.floor(Math.random() * 3) + 5),
            "author": faker.person.fullName(),
            "device": faker.helpers.arrayElement(['Android', 'iPhone', 'Web']),
            "long_description": faker.word.words(Math.floor(Math.random() * 50) + 10),
            "user_submitted": faker.datatype.boolean(),
            "image": faker.image.urlPicsumPhotos(),
            "image_height": faker.number.int({min: 150, max: 550}),
            "upvotes": faker.number.int({ min: -10, max: 150000 }),
            "number_of_comments": commentsNumber,
            "date": faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2023-07-27T00:00:00.000Z' }),
            "views": faker.number.int({ min: 0, max: 150000 }),
            "comments": comments,
        });
    }
    console.log(posts);
}
