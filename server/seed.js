/* eslint-disable no-console */
const faker = require('faker');
const db = require('./database');

// some helpful constants to generate data
const NOW = new Date();
const YEAR = 3.154e+10; // year in milliseconds
const WEEK = 6.048e+8; // week in milliseconds
const previousTo = (date) => new Date(date.valueOf() - Math.floor(YEAR * Math.random()));
const after = (date) => new Date(date.valueOf() + Math.floor(WEEK * Math.random()));

// the name of the author
const author = `${faker.name.firstName()} ${faker.name.lastName()}`;
const authorAvatar = faker.image.avatar();

// collection to be inserted into the database
const documents = [];

for (let i = 0; i < 100; i += 1) {
  // review dates will be generated randomly within the last year, one tenth of the reviews will
  // have a modified date. the review has not been modified if it has the same date.
  const documentCreatedDate = previousTo(NOW);
  const documentModifiedDate = Math.random() > 0.90
    ? after(documentCreatedDate) : documentCreatedDate;

  const document = {
    content: faker.lorem.paragraph(),
    rating: Math.ceil(Math.random() * 5),
    created: documentCreatedDate,
    modified: documentModifiedDate,
    user: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
  };

  // not all reviews will have replies from the author
  if (Math.random() > 0.75) {
    const responseCreatedDate = after(documentCreatedDate);
    const responseModifiedDate = Math.random() > 0.90
      ? after(responseCreatedDate) : responseCreatedDate;

    document.response = {
      content: faker.lorem.paragraph(),
      created: responseCreatedDate,
      modified: responseModifiedDate,
      user: author,
      avatar: authorAvatar,
    };
  }

  documents.push(document);
}

db.Review.deleteMany({}, (deleteError) => {
  if (deleteError) {
    console.error(deleteError);
  } else {
    console.log('Removed all documents from collection\n\nStarting to seed the database...\n');

    db.Review.insertMany(documents, (insertError) => {
      if (insertError) {
        console.error(insertError);
      } else {
        console.log('Database seeded, ending connection.');
        db.mongoose.disconnect();
      }
    });
  }
});
