const babel = require("@babel/core");
const {parse} = require("@babel/parser");

module.exports = function ({ types: t }) {
  return {
    visitor: {
      Import(path, state) {
        path.parentPath.traverse({
          StringLiteral(path) {
            console.log(path.node.value);
            path.addComment("leading", ` webpackChunkName: "${path.node.value}" `)
          },
        });
      }
    }
  };
}
