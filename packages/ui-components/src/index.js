function Button(props) {
  return {
    type: "button",
    label: props?.label || "Button"
  };
}

function Card(props) {
  return {
    type: "card",
    title: props?.title || ""
  };
}

module.exports = {
  Button,
  Card
};
