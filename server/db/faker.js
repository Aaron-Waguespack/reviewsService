const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('reviews.csv');
writeUsers.write('product_id|review_id|rating|summary|recommend|response|body|review_date|reviewer_name|helpfulness|reported|photos|characteristics\n', 'utf8');
function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      if (id % 190 === 0) {
        const product_id = id;
        for (let j = 1; j < Math.floor(Math.random() * 1000) + 500; j++) {
          const review_id = j;
          const rating = Math.floor(Math.random() * 5) + 1;
          const summary = faker.lorem.sentence(4);
          const recommend = Math.floor(Math.random() * 2);
          const response = faker.lorem.sentences(2);
          const body = faker.lorem.sentences(4);
          const review_date = faker.date.past();
          const reviewer_name = faker.name.firstName();
          const helpfulness = Math.floor(Math.random() * 2);
          const reported = 0;
          const photos = `{${faker.internet.url()},${faker.internet.url()},${faker.internet.url()},${faker.internet.url()},${faker.internet.url()}}`;
          const characteristics = `{{0,size},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,width},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,comfort},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,quality},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,size},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,length},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,fit},{id,1},{value,${Math.floor(Math.random() * 5) + 1}}}`;
          const data = `${product_id}|${review_id}|${rating}|${summary}|${recommend}|${response}|${body}|${review_date}|${reviewer_name}|${helpfulness}|${reported}|${photos}|${characteristics}\n`;
          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            // see if we should continue, or wait
            // don't pass the callback, because we're not done yet.
            ok = writer.write(data, encoding);
          }
        }
      }
      if (id % 47 === 0) {
        const product_id = id;
        for (let j = 1; j < Math.floor(Math.random() * 500) + 200; j++) {
          const review_id = j;
          const rating = Math.floor(Math.random() * 5) + 1;
          const summary = faker.lorem.sentence(4);
          const recommend = Math.floor(Math.random() * 2);
          const response = faker.lorem.sentences(2);
          const body = faker.lorem.sentences(4);
          const review_date = faker.date.past();
          const reviewer_name = faker.name.firstName();
          const helpfulness = Math.floor(Math.random() * 2);
          const reported = 0;
          const photos = `{${faker.internet.url()},${faker.internet.url()},${faker.internet.url()},${faker.internet.url()},${faker.internet.url()}}`;
          const characteristics = `{{0,size},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,width},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,comfort},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,quality},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,size},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,length},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,fit},{id,1},{value,${Math.floor(Math.random() * 5) + 1}}}`;
          const data = `${product_id}|${review_id}|${rating}|${summary}|${recommend}|${response}|${body}|${review_date}|${reviewer_name}|${helpfulness}|${reported}|${photos}|${characteristics}\n`;
          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            // see if we should continue, or wait
            // don't pass the callback, because we're not done yet.
            ok = writer.write(data, encoding);
          }
        }
      }
      if (id % 9 === 0) {
        const product_id = id;
        for (let j = 1; j < Math.floor(Math.random() * 200) + 75; j++) {
          const review_id = j;
          const rating = Math.floor(Math.random() * 5) + 1;
          const summary = faker.lorem.sentence(4);
          const recommend = Math.floor(Math.random() * 2);
          const response = faker.lorem.sentences(2);
          const body = faker.lorem.sentences(4);
          const review_date = faker.date.past();
          const reviewer_name = faker.name.firstName();
          const helpfulness = Math.floor(Math.random() * 2);
          const reported = 0;
          const photos = `{${faker.internet.url()},${faker.internet.url()},${faker.internet.url()},${faker.internet.url()},${faker.internet.url()}}`;
          const characteristics = `{{0,size},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,width},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,comfort},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,quality},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,size},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,length},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,fit},{id,1},{value,${Math.floor(Math.random() * 5) + 1}}}`;
          const data = `${product_id}|${review_id}|${rating}|${summary}|${recommend}|${response}|${body}|${review_date}|${reviewer_name}|${helpfulness}|${reported}|${photos}|${characteristics}\n`;
          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            // see if we should continue, or wait
            // don't pass the callback, because we're not done yet.
            ok = writer.write(data, encoding);
          }
        }
      } else {
        const product_id = id;
        for (let j = 1; j < Math.floor(Math.random() * 75) + 2; j++) {
          const review_id = j;
          const rating = Math.floor(Math.random() * 5) + 1;
          const summary = faker.lorem.sentence(4);
          const recommend = Math.floor(Math.random() * 2);
          const response = faker.lorem.sentences(2);
          const body = faker.lorem.sentences(4);
          const review_date = faker.date.past();
          const reviewer_name = faker.name.firstName();
          const helpfulness = Math.floor(Math.random() * 2);
          const reported = 0;
          const photos = `{${faker.internet.url()},${faker.internet.url()},${faker.internet.url()},${faker.internet.url()},${faker.internet.url()}}`;
          const characteristics = `{{0,size},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,width},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,comfort},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,quality},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,size},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,length},{id,1},{value,${Math.floor(Math.random() * 5) + 1}},{0,fit},{id,1},{value,${Math.floor(Math.random() * 5) + 1}}}`;
          const data = `${product_id}|${review_id}|${rating}|${summary}|${recommend}|${response}|${body}|${review_date}|${reviewer_name}|${helpfulness}|${reported}|${photos}|${characteristics}\n`;
          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            // see if we should continue, or wait
            // don't pass the callback, because we're not done yet.
            ok = writer.write(data, encoding);
          }
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
    // had to stop early!
    // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
