const { Button } = require("@goalconnect/ui-components");
const { toTitleCase } = require("@goalconnect/utils");

function createFeatureX(name) {
  return {
    feature: "x",
    ui: Button({ label: `Open ${toTitleCase(name)}` })
  };
}

if (require.main === module) {
  console.log(createFeatureX("academy dashboard"));
}

module.exports = { createFeatureX };
