const { Card } = require("@goalconnect/ui-components");
const { formatDate } = require("@goalconnect/utils");

function createFeatureY(meta) {
  return {
    feature: "y",
    ui: Card({ title: meta?.title || "Feature Y" }),
    createdAt: formatDate(meta?.createdAt || Date.now())
  };
}

if (require.main === module) {
  console.log(createFeatureY({ title: "Scouting View" }));
}

module.exports = { createFeatureY };
