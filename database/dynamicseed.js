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
  const reviews = Math.floor(Math.random() * (3000 - 300)) + 300;
  const confirm = () => {
    if (rate % 2 === 0) {
      return true;
    }
    return false;
  };

  const entry = {
    id: index,
    category: descriptionSeed.generateWords(2),
    subtitle: descriptionSeed.generateWords(4),
    image: `${index}.jpg`,
    description: descriptionSeed.generateParagraphs(1),
    rating: rate,
    review_count: reviews,
    cost_unit: { cost: costs, unit: 'adult' },
    link: '',
    popularity: popular,
    quickview: {
      category: descriptionSeed.generateWords(2),
      subtitle: descriptionSeed.generateWords(2),
      overview: overviewSeed.generateParagraphs(2),
      supplier: descriptionSeed.generateWords(1),
      map_address: {
        lat: 37.0902405,
        lng: -95.7128906,
      },
      details: {
        languages: [descriptionSeed.generateWords(1)],
        vouchers_allowed: [confirm(), !confirm()],
        cancellations: confirm(),
        tour_time: {
          time: rate,
          unit: 'hours',
        },
        instant_confirmation: confirm(),
      },
    },
  };
  return entry;
};
const insertSampleExperience = function (entry) { // eslint-disable-line
   return experienceModel.create(entry)
   .catch((error) => {
     console.log('catch');
     return error;
   });
};

const insertDestination = function (entry) { // eslint-disable-line
    return destinationModel.create(entry)
    .catch((error) => {
      console.log('catch');
      return error;
    } );
};

const seed = (qty, insert, entryFunc) => {
  for(let i = 0; i < qty ; i+=1) {
    insert(entryFunc(i))
    .catch(() => {
      console.log('error inserting #', i);
    });
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
