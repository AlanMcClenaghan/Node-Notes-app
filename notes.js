console.log('Starting notes.js');

let addNote = (title, body) => {
  console.log('Adding note', title, body)
};

let readNote = (title) => {
  console.log('Reading note', title)
};

let removeNote = (title) => {
  console.log('Removing note', title)
};

let getAll = () => {
  console.log('Getting all notes')
};

module.exports = {
  addNote,
  readNote,
  removeNote,
  getAll
}








/*********************************************************

module.exports.age = 46;

module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
}

module.exports.add = (a, b) => {
  console.log('add');
  return a + b;
}

*********************************************************/