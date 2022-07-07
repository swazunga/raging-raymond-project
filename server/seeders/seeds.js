const faker = require('faker');

const db = require('../config/connection');
const { FishTale, VampChat, User } = require('../models');

db.once('open', async () => {
    await FishTale.deleteMany({});
    await VampChat.deleteMany({});
    await User.deleteMany({});

    // create user data
    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    const createdUsers = await User.collection.insertMany(userData);



    // create FishTales
    let createdFishTales = [];
    for (let i = 0; i < 100; i += 1) {
        const fishTaleText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { username, _id: userId } = createdUsers.ops[randomUserIndex];

        const createdFishTale = await FishTale.create({ fishTaleText, username });

        const updatedUser = await User.updateOne(
            { _id: userId },
            { $push: { fishTales: createdFishTales._id } }
        );

        createdFishTales.push(createdFishTale);
    }

    // create FishTaleReactions
    for (let i = 0; i < 100; i += 1) {
        const fishTaleReactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { username } = createdUsers.ops[randomUserIndex];

        const randomFishTaleIndex = Math.floor(Math.random() * createdFishTales.length);
        const { _id: FishTaleId } = createdFishTales[randomFishTaleIndex];

        await FishTale.updateOne(
            { _id: FishTaleId },
            { $push: { fishTaleReactions: { fishTaleReactionBody, username } } },
            { runValidators: true }
        );
    }

    // create VampChats
    let createdVampChats = [];
    for (let i = 0; i < 100; i += 1) {
        const vampChatText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { username, _id: userId } = createdUsers.ops[randomUserIndex];

        const createdVampChat = await VampChat.create({ vampChatText, username });

        const updatedUser = await User.updateOne(
            { _id: userId },
            { $push: { vampChats: createdVampChats._id } }
        );

        createdVampChats.push(createdVampChat);
    }

    // create VampChatReactions
    for (let i = 0; i < 100; i += 1) {
        const vampChatReactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { username } = createdUsers.ops[randomUserIndex];

        const randomVampChatIndex = Math.floor(Math.random() * createdVampChats.length);
        const { _id: vampChatId } = createdVampChats[randomVampChatIndex];

        await VampChat.updateOne(
            { _id: vampChatId },
            { $push: { vampChatReactions: { vampChatReactionBody, username } } },
            { runValidators: true }
        );
    }

    console.log('all done!');
    process.exit(0);
});
