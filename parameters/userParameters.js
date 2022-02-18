const inquirer = require("inquirer");

const getUserChoices = () =>
  new Promise((resolve) => {
    inquirer
      .prompt([
        {
          name: "userPort",
          message: "Which port do you want to use?",
          type: "integer",
          default: 4000,
        },
        {
          name: "dataBaseOption",
          type: "list",
          choices: ["Development", "Production"],
        },
        {
          name: "editable",
          message: "Do you want to edit the database?",
          type: "confirm",
        },
      ])
      .then(({ userPort, dataBaseOption, editable }) => {
        resolve({
          userPort,
          dataBaseOption,
          editable,
        });
      });
  });

module.exports = getUserChoices;
