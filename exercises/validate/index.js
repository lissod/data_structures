// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

  let validLeft = !node.left ||
    node.left.data < max && validate(node.left, min, node.data);

  let validRight = !node.right ||
    node.right.data > min && validate(node.right, node.data, max);

  return validLeft && validRight;
}

module.exports = validate;
