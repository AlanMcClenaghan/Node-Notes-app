console.log('Starting notes.js');

module.exports.age = 46;

module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
}

module.exports.add = (a, b) => {
  console.log('add');
  return a + b;
}