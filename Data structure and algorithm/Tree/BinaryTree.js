/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 前序遍历--递归
var preorderTraversal = function(root) {
    return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : []
};
// 前序遍历--迭代
var preorderTraversal = function(root) {
    let arr = [], res = []
    root && arr.push(root)

    while(arr.length > 0) {
        let cur = arr.pop()
        res.push(cur.val)

        cur.right && arr.push(cur.right)
        cur.left && arr.push(cur.left)
    }
    return res
};