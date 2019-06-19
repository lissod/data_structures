// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let widths = [];
  let nodes = [{ level: 0, node: root }];
  while(nodes.length ){
    const { level, node } = nodes.shift();
    node.children.forEach((child) => nodes.push({ level: level + 1, node: child }));
    widths[level] = widths[level] ?  widths[level] + 1 : 1;
  }

  return widths;
}

module.exports = levelWidth;
