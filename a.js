const root = document.querySelector("#root");

const a = x => {
  return import(/* webpackChunkName: "my-b" */ "./b").then(({ square }) => {
    return `square(${x}) = ${square(x)}`;
  });
};

const JavaScript = "JavaScript";

a(3).then(x => {
  const node = document.createTextNode(x);
  console.log(JavaScript);
  root.appendChild(node);
});
