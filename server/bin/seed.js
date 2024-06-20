require("dotenv").config();

const { DB_NAME } = process.env;

const path = require('path');
const fs = require('fs');
const database = require("../database/client");
// const UserSeeder = require('../database/fixtures/UserSeeder');
// const HoodSeeder = require('../database/fixtures/HoodSeeder');
// const StyleSeeder = require('../database/fixtures/StyleSeeder');
// const ArtSeeder = require('../database/fixtures/ArtSeeder');
// const BadgeSeeder = require('../database/fixtures/BadgeSeeder');

// const fixturesDirectory = [UserSeeder, HoodSeeder, StyleSeeder, ArtSeeder, BadgeSeeder];

const fixturesDirectory = path.join(__dirname, '../database/fixtures');

fs.readdirSync(fixturesDirectory).forEach(file => {
  // Skip .DS_Store files
  if (file === '.DS_Store') {
    return null;
  }
  // Rest of your code...
  return undefined; // Add return statement to avoid ESLint error
});

const seed = async () => {
  try {
    const dependencyMap = {};

    // Construct each seeder
    fs.readdirSync(fixturesDirectory)
        .filter((filePath) => !filePath.startsWith("Abstract"))
        .forEach((filePath) => {
          // eslint-disable-next-line import/no-dynamic-require, global-require
          const SeederClass = require(path.join(fixturesDirectory, filePath));

          const seeder = new SeederClass();

          dependencyMap[SeederClass] = seeder;
        });

    const sortedSeeders = [];

    // The recursive solver
    const solveDependencies = (n) => {
      n.dependencies.forEach((DependencyClass) => {
        const dependency = dependencyMap[DependencyClass];

        if (!sortedSeeders.includes(dependency)) {
          solveDependencies(dependency);
        }
      });

      if (!sortedSeeders.includes(n)) {
        sortedSeeders.push(n);
      }
    };

    // Solve dependencies for each seeder
    Object.values(dependencyMap).forEach((seeder) => {
      solveDependencies(seeder);
    });

    // Truncate tables (starting from the depending ones)

    // The truncate solver
    const doTruncate = async (stack) => {
      if (stack.length === 0) {
        return;
      }

      const firstOut = stack.pop();

      // Use delete instead of truncate to bypass foreign key constraint
      // Wait for the delete promise to complete
      await database.query(`delete from ${firstOut.table}`);

      await doTruncate(stack);
    };

    await doTruncate([...sortedSeeders]);

    // Run each seeder

    // The run solver
    const doRun = async (queue) => {
      if (queue.length === 0) {
        return;
      }

      const firstOut = queue.shift();

      // Use delete instead of truncate to bypass foreign key constraint
      // Wait for the delete promise to complete
      firstOut.run();

      // Wait for all the insertion promises to complete
      // We do want to wait in a loop to satisfy dependencies
      await Promise.all(firstOut.promises);

      await doRun(queue);
    };

    await doRun(sortedSeeders);

    // Close the database connection
    database.end();

    console.info(`${DB_NAME} updated from '${path.normalize(fixturesDirectory)}' 🆙`);
  } catch (err) {
    console.error("Error filling the database:", err.message, err.stack);
  }
};



// Run the seed function
seed();
