const { createFeatureX } = require("@goalconnect/feature-x");
const { createFeatureY } = require("@goalconnect/feature-y");

function assembleSystem() {
  return {
    x: createFeatureX("player profile"),
    y: createFeatureY({ title: "match report" })
  };
}

console.log(assembleSystem());
