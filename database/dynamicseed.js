const Seeder = require('lorem-ipsum').LoremIpsum;
const { experienceModel } = require('./experiencesDB.js');
const { destinationModel } = require('./destinationDB.js');
const { db } = require('./index.js'); // eslint-disable-line

const overviewSeed = new Seeder({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const descriptionSeed = new Seeder({
  sentencesPerParagraph: {
    max: 1,
    min: 1,
  },
  wordsPerSentence: {
    max: 10,
    min: 3,
  },
});

const generateExperienceEntry = function (index) { // eslint-disable-line
  const rate = Math.floor(Math.random() * (5 - 1)) + 1;
  const costs = Math.floor(Math.random() * (250 - 80)) + 80;
  const popular = Math.floor(Math.random() * (35000 - 1000)) + 1000;
  const reviews = Math.floor(Math.random() * (3000 -300) + 300);
  const confirm = () => {
    if (rate % 2 === 0) {
      return true;
    }
    return false;
  };

  const entry = {
    id: index,
    heart: false,
    image: `${index}.jpg`,
    description: descriptionSeed.generateParagraphs(1),
    rating: rate,
    review_count: reviews,
    cost_unit: { cost: costs, unit: 'adult' },
    link: '',
    popularity: popular,
    quickview: {
      category: descriptionSeed.generateWords(2),
      overview: overviewSeed.generateParagraphs(2),
      languages: [descriptionSeed.generateWords(1)],
      vouchers_allowed: [confirm(), !confirm()],
      canecellations: confirm(),
      supplier: descriptionSeed.generateWords(1),
      tour_time: {
        time: rate,
        unit: 'hours',
      },
      instant_confirmation: confirm(),
      map_address: {
        lat: 37.0902405,
        lng: -95.7128906,
      },
    },
  };
  return entry;
};
const insertSampleExperience = function (entry) { // eslint-disable-line
  experienceModel.create(entry)
    .catch((error) => console.log('error: ', error));  // eslint-disable-line
};

const insertDestination = function (entry) { // eslint-disable-line
  destinationModel.create(entry)
    .catch(() => console.log('error:')); // eslint-disable-line
};

const seed = (qty, insert, entryFunc) => {
  for (let i = 0; i < qty + 1; i += 1) {
    const entry = entryFunc(i);
    insert(entry);
  }
};

seed(500, insertSampleExperience, generateExperienceEntry);
seed(100, insertDestination, (index) => {
  const experiences = [];
  let randomNumber;
  for (let j = 0; j < 5; j += 1) {
    randomNumber = Math.floor(Math.random() * (500 - 1) + 1);
    experiences.push(randomNumber);
  }
  return {
    id: index.toString().padStart(3, 0),
    experiences,
  };
});
