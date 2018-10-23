const a = x => import(/* webpackChunkName: "my-b" */ "./b")
  .then(({ square }) => `square(${x}) = ${square(x)}`);

const JavaScript = "JavaScript";
const root = document.querySelector("#root");

a(3).then(x => {
  const node = document.createTextNode(x);
  console.log(JavaScript);
  root.appendChild(node);
});
