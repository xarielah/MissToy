import { storageService } from "./async-storage.service";
import { utilService } from "./util.service";

const STORAGE_KEY = 'toyDB'

export const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered'];

export const toyService = {
    query,
    save,
    remove,
    getEmptyToy
}

_createToys();

// CRUDL functions

async function query(filterBy = {}) {
    try {
        const toys = await storageService.query(STORAGE_KEY) || await _createToys();

        // TODO: Create filter here

        return toys;
    } catch (error) {
        throw error;
    }
}

async function save(toy) {
    try {
        if (toy._id) {
            return storageService.put(STORAGE_KEY, toy);
        } else {
            toy._id = makeId();
            return storageService.post(STORAGE_KEY, toy);
        }
    } catch (error) {
        throw error;
    }
}

async function remove(toyId) {
    try {
        return storageService.remove(STORAGE_KEY, toyId);
    } catch (error) {
        throw error;
    }
}

function getEmptyToy() {
    return {
        name: '',
        price: '',
        labels: [],
        inStock: false
    }
}

// Private functions

function _createRandomToy(toy) {
    toy._id = utilService.makeId();
    toy.name = _generateToyName();
    toy.labels = _getRandomLabels(labels);
    toy.inStock = Math.random() >= 0.5;
    toy.price = Math.round(Math.random() * 300);
    return toy;
}

async function _createToys() {
    const toys = [];
    for (let i = 0; i < 20; i++) {
        const toy = getEmptyToy();
        toys.push(_createRandomToy(toy));
    }
    return storageService._save(STORAGE_KEY, toys);
}

function _generateToyName() {
    const adjectives = ['Happy', 'Magic', 'Super', 'Bouncy', 'Sparkly', 'Dancing', 'Flying', 'Rainbow', 'Talking', 'Musical'];
    const nouns = ['Bear', 'Robot', 'Doll', 'Unicorn', 'Puppy', 'Dinosaur', 'Dragon', 'Pony', 'Train', 'Car'];
    const suffixes = ['Bot', 'Friend', 'Pal', 'Buddy', 'Toy', 'Wonder', 'Star', 'Hero', 'Master', 'Joy'];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    return `${randomAdjective} ${randomNoun} ${randomSuffix}`;
}

function _getRandomLabels(labels) {
    // Get a random number between 1 and the length of the labels array
    const numberOfLabels = Math.floor(Math.random() * labels.length) + 1;

    // Create a copy of the original array to avoid modifying it
    const shuffledLabels = [...labels];

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = shuffledLabels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledLabels[i], shuffledLabels[j]] = [shuffledLabels[j], shuffledLabels[i]];
    }

    // Return only the first 'numberOfLabels' elements
    return shuffledLabels.slice(0, numberOfLabels);
}