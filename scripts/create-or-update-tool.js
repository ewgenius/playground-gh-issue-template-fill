const yaml = require("node-yaml");

async function main() {
  const submission = JSON.parse(process.argv[2]);

  console.log(submission);
}

main();