const Seeder = require('lorem-ipsum');

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
    max: 20,
    min: 10,
  },
});

module.exports.generateExperienceEntry = function (index) {
  let rate = Math.floor(Math.random()*(5-1)) + 1;
  let costs = Math.floor(Math.random()*(250-80)) + 80;
  let popular = Math.floor(Math.random()*(35000-1000)) + 1000;
  let quick = () => Math.floor(Math.random()*(400-1)) + 1;
  let entry = {
    id: index,
    heart: false,
    image: `${index}.jpg`,
    description: overviewSeed.generateParagraphs(1),
    rating: rate,
    cost_unit: {cost: costs, unit: 'adult'},
    link: '',
    popularity: popular,
    quickviews: [],
  };
  for ( let i = 0; i <= rate; i++) {
    entry.quickviews.push(quick());
  }
  return entry;
};

module.exports.generateQuickViewEntry = function (index) {
  let rate = Math.floor(Math.random()*(5-1)) + 1;
  let costs = Math.floor(Math.random()*(250-80)) + 80;
  let popular = Math.floor(Math.random()*(35000-1000)) + 1000;
  let quick = () => Math.floor(Math.random()*(400-1)) + 1;
  let entry = {
    id: index,
    heart: false,
    image: `${index}.jpg`,
    description: overviewSeed.generateParagraphs(1),
    rating: rate,
    cost_unit: {cost: costs, unit: 'adult'},
    link: '',
    popularity: popular,
    quickviews: [],
  };
  for ( let i = 0; i <= rate; i++) {
    entry.quickviews.push(quick());
  }
  return entry;
};

