let args = process.argv.splice(2)

// for (let item of args) {
//   if (item === '') {

//   } else if (item > 0 && Number.isInteger(item)) {

//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, Number(item) * 1000);
//   }
// };

// for (let item of args) {
//   if (item > 0 && Number.isInteger(item)) {
//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, Number(item) * 1000);
//   }
// };

for (let item of args) {

  if (item !== '') {

    if (item > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(item) * 1000);
    }
  }
};
