const fs = require('fs');
const path = require('path');
const dataFile = path.join(__dirname, '../data/flashcards.json');
let flashcards = [];
try {
  const data = fs.readFileSync(dataFile, 'utf8');
  flashcards = JSON.parse(data);
} catch (error) {
  flashcards = [];
}
const writeDataToFile = (data) => {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 4), 'utf8');
};
const flashcardsService = {
  get: () => flashcards,
  getById: (id) => flashcards.find(card => card.id === id),
  insert: (data) => {
    const id = generateId(4);
    const flashcard = { id, term: data.term, definition: data.definition };
    flashcards.push(flashcard);
    writeDataToFile(flashcards);
    return flashcard;
  },
  update: (id, data) => {
    const index = flashcards.findIndex(card => card.id === id);
    if (index === -1) return null;
    flashcards[index].term = data.term;
    flashcards[index].definition = data.definition;
    writeDataToFile(flashcards);
    return flashcards[index];
  },
  delete: (id) => {
    const index = flashcards.findIndex(card => card.id === id);
    if (index === -1) return false;
    flashcards.splice(index, 1);
    writeDataToFile(flashcards);
    return true;
  }
};
function generateId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
module.exports = flashcardsService;
