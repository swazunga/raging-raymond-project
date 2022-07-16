const faker = require("faker");

const db = require("../config/connection");
const { FishTopic, VampTopic, User, Registrant } = require("../models");

db.once("open", async () => {
  await FishTopic.deleteMany({});
  await VampTopic.deleteMany({});
  await User.deleteMany({});
  await Registrant.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create FishTopics
  let createdFishTopics = [];
  for (let i = 0; i < 100; i += 1) {
    const fishTopicText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdFishTopic = await FishTopic.create({
      fishTopicText,
      username,
    });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { fishTopics: createdFishTopics._id } }
    );

    createdFishTopics.push(createdFishTopic);
  }

  // create FishTopicReactions
  for (let i = 0; i < 100; i += 1) {
    const fishTopicReactionBody = faker.lorem.words(
      Math.round(Math.random() * 20) + 1
    );

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomFishTopicIndex = Math.floor(
      Math.random() * createdFishTopics.length
    );
    const { _id: fishTopicId } = createdFishTopics[randomFishTopicIndex];

    await FishTopic.updateOne(
      { _id: fishTopicId },
      { $push: { fishTopicReactions: { fishTopicReactionBody, username } } },
      { runValidators: true }
    );
  }

  // create VampTopics
  let createdVampTopics = [];
  for (let i = 0; i < 100; i += 1) {
    const vampTopicText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdVampTopic = await VampTopic.create({
      vampTopicText,
      username,
    });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { vampTopics: createdVampTopics._id } }
    );

    createdVampTopics.push(createdVampTopic);
  }

  // create VampTopicReactions
  for (let i = 0; i < 100; i += 1) {
    const vampTopicReactionBody = faker.lorem.words(
      Math.round(Math.random() * 20) + 1
    );

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomVampTopicIndex = Math.floor(
      Math.random() * createdVampTopics.length
    );
    const { _id: vampTopicId } = createdVampTopics[randomVampTopicIndex];

    await VampTopic.updateOne(
      { _id: vampTopicId },
      { $push: { vampTopicReactions: { vampTopicReactionBody, username } } },
      { runValidators: true }
    );
  }

  //   let registrantData = [];

  //   const name = "Michael";
  //   const message = "Test@test.com";
  //   const participants = 3;

  //   registrantData.push({ name, message, participants });

  //   const createdRegistrants = await Registrant.collection.insertMany(
  //     registrantData
  //   );

  console.log("all done!");
  process.exit(0);
});
