'use strict';

const create = function (context) {
  return {
    RestElement(node) {
      if (node.parent.type === 'ArrayPattern') {
        return;
      }
      context.report({
        node,
        message: 'Unallowed use of rest parameters. Use regular function arguments instead'
      });
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbid the use of rest parameters.',
      recommended: 'error'
    }
  }
};
