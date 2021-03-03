## 堆
1. 一个完全二叉树的数组对象
2. 堆中某个节点的值总是不大于或不小于父节点的值

![heap](../image/heap-01.png)
![heap](../image/heap-02.png)

索引位置i，得到规律
parent(i) = ~~(i/2)
left child(i) = 2*i
right child(i) = 2*i + 1