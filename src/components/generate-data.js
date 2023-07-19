import { fakerEN as faker } from '@faker-js/faker';

export default function generatePosts() {
    let posts = [];
    for (let i = 0; i < 16; i++) {
        posts.push({
            "title": faker.word.words(7),
            "image": faker.image.urlPicsumPhotos(),
            "upvotes": faker.number.int({min: 0, max: 2000000}),
            "number_of_comments": faker.number.int({min: 0, max: 2000000}),
            "date": faker.date.between({from: '2020-01-01T00:00:00.000Z', to: '2023-07-19T00:00:00.000Z'}),
            "views": faker.number.int({min: 0, max: 2000000})
        });
    }
    return posts;
}
