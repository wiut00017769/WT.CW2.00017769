const fs = require('fs');
const path = require('path');
const flashcardsDataPath = path.join(__dirname, '../data/flashcards.json');

let flashcards = [];
try {
  const data = fs.readFileSync(flashcardsDataPath, 'utf8');
  flashcards = JSON.parse(data);
} catch (error) {
  flashcards = [];
}//load existing flashcards from fike or initialize as empty array

const flashcardService = {
  get() {
    return flashcards;
  },//get all flashcards
  getById(id) {
    return flashcards.find(card => card.id === id);
  },//get flashcard by id
  insert(data) {
    const newId = generateId(4);
    const newCard = { id: newId, term: data.term, definition: data.definition };
    flashcards.push(newCard);
    saveData();
    return newCard;
  },//insert a new flashcard
  update(id, data) {
    const index = flashcards.findIndex(card => card.id === id);
    if (index === -1) return null;
    flashcards[index].term = data.term;
    flashcards[index].definition = data.definition;
    saveData();
    return flashcards[index];
  },//update flashcard by id
  delete(id) {
    const index = flashcards.findIndex(card => card.id === id);
    if (index === -1) return false;
    flashcards.splice(index, 1);
    saveData();
    return true;
  }// delete a flashcard by id
};

function saveData() {
  fs.writeFileSync(flashcardsDataPath, JSON.stringify(flashcards, null, 4), 'utf8');
}//helper functions

function generateId(length) {
  let result = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

module.exports = flashcardService;
