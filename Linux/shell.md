## Shell 环境
Bourne Again Shell（/bin/bash）大多数Linux系统默认的Shell
```shell
#!/bin/shell
echo "shell"
```
执行`./shell.sh` 或者 `chmod +x ./shell.sh` 使脚本具有执行权限

## 变量
命名只能是英文字母，数字，下划线
数字不能开头
不能是bash中的关键字

使用变量`$变量` 或者`${变量}` 推荐后者写法
循环出/etc目录下的文件名 `for file in $(ls /etc)` 或者 <code>for file in \`ls /etc\`</code>

只读 `readonly variable_name`
删除变量 `unset variable_name`

*字符串操作*
- 获取长度 `${#variable_name}`
- 截取长度 `${variable_name:1:4}` 第二个字符开始，截取四个字符；第一个字符的索引是0
- 查找字符串位置 `expr index "$variable_name" io` 查找i或者o的位置，那个先出计算那个

## 数组
括号表示数组，元素用空格符号隔开`数组名=(值1 值2 ... 值n)`
- 获取元素 `${数组名[下标]}` ${array_name[@]} 获取数组中的所有元素
- 获取数组长度 `${#array_name[@]}`

## 注释
- 单行 `#`
- 多行
  ```shell
  :<<EOF
  注释内容...
  注释内容...
  EOF
  ```

## 传参
- $# 传递给脚本的参数个数
- $* 单字符显示所有向脚本传递的参数， 返回"1 2 3"
- $$ 当前脚本运行的进程ID
- $! 后台运行的最后一个进程ID
- $@ 单字符显示所有向脚本传递的参数 返回"1" "2" "3"

## 运算符
- eq/ne/gt/lt/ge/le
- !/-o(或)/-a(与)
- ||/&&
- -z 字符串长度是否为0，-n相反; $ 监测字符串是否为空
- 文件测试运算符 -b/-d/.../-r/... 

## echo
- -e 转义输出

## printf

## test
- 监测某个条件是否成立

## 控制流
```shell
# if
if condition1
then
    command1
elif condition2 
then 
    command2
else
    commandN
fi

# for
for var in item1 item2 ... itemN
do
    command1
    command2
    ...
    commandN
done

# while
while condition
do
    command
done

# 无限
while :
do
    command
done

for (( ; ; ))

# until
until condition
do
    command
done

# case...esac
case 值 in
模式1)
    command1
    command2
    ...
    commandN
    ;;
模式2）
    command1
    command2
    ...
    commandN
    ;;
esac

# break 跳出循环
# continue 继续循环
```

## 函数
定义格式
```shell
[ function ] funname [()]
{
    action;
    [return int;]
}
# 调用
funname 1 2 3
```
函数参数 函数内部$1表示第一个参数

## 输入/输出重定向
- command > file	将输出重定向到 file。
- command >> file	将输出以追加的方式重定向到 file。
- command < file	将输入重定向到 file。
- n > file	将文件描述符为 n 的文件重定向到 file。
- n >> file	将文件描述符为 n 的文件以追加的方式重定向到 file。
- n >& m	将输出文件 m 和 n 合并。
- n <& m	将输入文件 m 和 n 合并。
- << tag 将开始标记 tag 和结束标记 tag 之间的内容作为输入。

执行某个命令但是不在屏幕上显示输出结果
`command > /dev/null` 
Shell 也可以包含外部脚本
## 文件包含

```shell
. filename   # 注意点号(.)和文件名中间有一空格
# 或
source filename
```