const faker = require('faker');
const fs = require('fs');

// const writeUsers = fs.createWriteStream('photos.csv');
// writeUsers.write('id\n', 'utf8');

// function writeTenMillionUsers(writer, encoding, callback) {
//     let i = 10000000;
//     let id = 0;
//     function write() {
//       let ok = true;
//       do {
//         i -= 1;
//         id += 1;
//         const data = `${id}\n`;
//         if (i === 0) {
//           writer.write(data, encoding, callback);
//         } else {
//   // see if we should continue, or wait
//   // don't pass the callback, because we're not done yet.
//           ok = writer.write(data, encoding);
//         }
//       } while (i > 0 && ok);
//       if (i > 0) {
//   // had to stop early!
//   // write some more once it drains
//         writer.once('drain', write);
//       }
//     }
//   write()
//   }

//   writeTenMillionUsers(writeUsers, 'utf-8', () => {
//     writeUsers.end();
//   });

//   const writeUsers = fs.createWriteStream('reviews.csv');
// writeUsers.write('fk_id,id,review_date,summary,recommend,response,body,reviewer_name,helpfulness,rating,reported\n', 'utf8');

// function writeTenMillionUsers(writer, encoding, callback) {
//     let i = 10000000;
//     let id = 0;
//     function write() {
//       let ok = true;
//       do {
//         i -= 1;
//         id += 1;
//         const fk_id = id
//         const review_date = faker.date.past();
//         const summary = faker.lorem.sentence(4);
//         const recommend = faker.random.number(100000)
//         const response = faker.lorem.sentences();
//         const body = faker.lorem.sentences(4);
//         const reviewer_name = faker.name.firstName();
//         const helpfulness = faker.random.number(100000)
//         const rating= Math.floor(Math.random() * 5) + 1
//         const reported = 1
//         const data = `${id},${fk_id},${review_date},${summary},${recommend},${response},${body},${reviewer_name},${helpfulness},${rating},${reported}\n`;
//         if (i === 0) {
//           writer.write(data, encoding, callback);
//         } else {
//   // see if we should continue, or wait
//   // don't pass the callback, because we're not done yet.
//           ok = writer.write(data, encoding);
//         }
//       } while (i > 0 && ok);
//       if (i > 0) {
//   // had to stop early!
//   // write some more once it drains
//         writer.once('drain', write);
//       }
//     }
//   write()
//   }

//   writeTenMillionUsers(writeUsers, 'utf-8', () => {
//     writeUsers.end();
//   });

//   const writeUsers = fs.createWriteStream('photos.csv');
// writeUsers.write('fk_id,id,url\n', 'utf8');

// function writeTenMillionUsers(writer, encoding, callback) {
//     let i = 10000000;
//     let id = 0;
//     function write() {
//       let ok = true;
//       do {
//         i -= 1;
//         id += 1;
//         const fk_id=id;
//         const url = faker.internet.url();
//         const data = `${fk_id},${id},${url}\n`;
//         if (i === 0) {
//           writer.write(data, encoding, callback);
//         } else {
//   // see if we should continue, or wait
//   // don't pass the callback, because we're not done yet.
//           ok = writer.write(data, encoding);
//         }
//       } while (i > 0 && ok);
//       if (i > 0) {
//   // had to stop early!
//   // write some more once it drains
//         writer.once('drain', write);
//       }
//     }
//   write()
//   }

//   writeTenMillionUsers(writeUsers, 'utf-8', () => {
//     writeUsers.end();
//   });

const writeUsers = fs.createWriteStream('characteristics.csv');
writeUsers.write('fk_id,id,name,value\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  let name = '';
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const num = Math.floor(Math.random() * 6) + 1;
      if (num === 1) {
        name = 'size';
      } else if (num === 2) {
        name = 'width';
      } else if (num === 3) {
        name = 'comfort';
      } else if (num === 4) {
        name = 'quality';
      } else if (num === 5) {
        name = 'length';
      } else if (num === 6) {
        name = 'fit';
      }
      const value = Math.floor(Math.random() * 5) + 1;
      const data = `${id},${id},${name},${value}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
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
