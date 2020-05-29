const faker = require('faker');

const database = { posts: []};

for (let i = 1; i<= 20; i++) {
  database.posts.push({
    id: i,
    name: faker.name.firstName(),
    title: faker.lorem.word(),
    subtitles: faker.lorem.words(),
    content: faker.lorem.paragraph(),
    imageUrl: faker.image.image(),
  });
}

console.log(JSON.stringify(database));