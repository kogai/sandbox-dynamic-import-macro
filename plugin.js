module.exports = function ({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name.split("").reverse().join("");
      },
      Import(path) {
        console.log(path.type);
        console.log(path.node);
        console.log(path.addComment);
        // path.addComment("leading", "THIS IS MY COMMENT")
        console.log("------");
      }
    }
  };
}
