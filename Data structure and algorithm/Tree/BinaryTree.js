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
    const res = []
    const inorder = (root) => {
        if (!root) {
            return res
        }
        res.push(root.val)
        inorder(root.left)
        inorder(root.right)
    }
    inorder(root)
    return res
}
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

// 中序遍历--递归
var inorderTraversal = function(root) {
    const res = []
    const inorder = (root) => {
        if (!root) {
            return res
        }
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return res
}
// 中序遍历--迭代
var inorderTraversal = function(root) {
    const res = []
    const arr = []
    while (root || arr.length) {
        while (root) {
            arr.push(root)
            root = root.left
        }
        root = arr.pop()
        res.push(root.val)
        root = root.right
    }
    return res
}
// 后序遍历--递归
var postorderTraversal = function(root) {
    const res = []
    const inorder = (root) => {
        if (!root) {
            return res
        }
        inorder(root.left)
        inorder(root.right)
        res.push(root.val)
    }
    inorder(root)
    return res
}
// 后序遍历--迭代
var postorderTraversal = function(root) {
    const res = []
    const arr = []
    let prev
    while (root || arr.length) {
        while (root) {
            arr.push(root)
            root = root.left
        }
        root = arr.pop()
        if (root.right  === null || root.right === prev) {
            res.push(root.val)
            prev = root
            root = null
        } else {
            arr.push(root)
            root = root.right
        }
    }
    return res
}

// 广度优先
var levelOrder = function(root) {
    const ret = [];
    if (!root) {
        return ret
    }

    const q = []
    q.push(root)
    while (q.length !== 0) {
        const currentLevelSize = q.length
        ret.push([])
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift()
            ret[ret.length - 1].push(node.val)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
    }
    return ret
}
