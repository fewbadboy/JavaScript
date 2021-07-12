## 介绍
发行家族(主要版本):
- Debian(Ubuntu， Linux Mint)
- Fedora(RHEL, CentOS, Oracle Linux)
- SUSE(SLES, openSUSE)
- ...

## Linux 关机
不管是重启系统还是关闭系统，首先要运行 sync 命令，把内存中的数据写到磁盘中

## 目录结构
  - bin 存放最经常使用的命令
  - boot 启动Linux时的核心文件
  - dev Linux外部设备，存放方式和访问文件的方式是一样的
  - etc  系统管理所需要的配置文件和子目录
  - home 用户的主目录
  - root 系统管理员的用户目录
  - run 临时文件系统，存储系统启动以来的信息
  - sbin 系统管理员使用的系统文件程序
  - tmp 临时文件
  - usr unix shared resources（共享资源）
  - var 放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下
  - opt 给主机额外安装软件的目录
  - proc (不在硬盘而是在内存，存储当前内核运行状态的一系列特殊文件，目录是个虚拟的)

## 重置root密码
进入单用户模式，修改密码
- 重启
- 进入menu
- 输入 e
- 第二行 kernel开头， 输入e 在右边输入 空格 single,然后回车
- 按 b 启动
- 更改密码的命令为 passwd

## 文件属性
 - chown [-R] 属主名：属组名 文件名 change ownerp 修改所属用户和组 -R 递归操作
 - chmod change mode 修改用户权限
 - chgrp [-R] 属组名 文件名 change group 修改分组
ls -l 显示文件所属用户和组的属性
d：目录  -：文件  l：连接文档  b：装置文件里面的可供储存的接口设备 c：装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)
rwx 读4、写2、可执行1 三个一组，没响应的权限会出现-
|文件属性|属主权限|属组权限|其他用户权限|

## 文件和目录管理
常用命令,man 命令 来查看详细的内容
- ls list files
- cd change directory
- pwd print word directory
- mkdir make directory
- rmdir remove directory
- cp copy file
- rm [-fir] 文件或目录 remove 
- mv move file

`cd ~` 回到自己用户目录即 /home/xxxx

查看文件内容
- cat [-AbEnTv] 从一行开始显示
- tac 从最后一行开始显示
- nl [-bnw] 显示的时候显示行号
- more 一页一页的显示，space 下一页，Enter 下翻一行，/字符 往下搜索'字符',:f 立刻显示当前行数，q 离开，b 往回翻页
- less 比more更好可以往前翻页，space/pagedown 向下翻页，/字符 向下搜索，?字符 向上搜索， n 重复前一个搜索， N 反向重复， q 离开
- head [-n number] 取出文件前几行
- tail [-n number] 取出文件后几行

## 用户和分组管理
- useradd [-cdgGsu] `useradd –d  /home/sam -m sam` 为登录名sam产生一个主目录 /home/sam（/home为默认的用户主目录所在的父目录）
- userdel
- usermod
- passwd [-dflu] l 禁用，u 口令解锁， d 使账号无口令， -f 强迫下次登录修改口令
- groupadd
- groupdel
- groupmod
- newgrp

和用户账号相关的系统文件`/etc/passwd`

## 磁盘管理
- df [-ahikHTm] [目录或文件名] 列出文件系统的整体磁盘使用量，k/m KBytes/MBytes 的容量显示各文件系统, h 易读的方式
- du [-ahskm] 文件或目录名称 检查磁盘空间使用量
- fdisk [-l] 装置名称 用于磁盘分区
- mkfs [-t 文件系统格式] 装置文件名 磁盘格式化
- mount [-t 文件系统] [-L Label名] [-o 额外选项] [-n]  装置文件名  挂载点  磁盘挂载
- umount [-fn] 装置文件名或挂载点

`df -h /etc` 具体目录下磁盘的容量

## vim
- 命令模式
- 输入模式
- 底线命令模式 命令模式 按 :

Esc 进入命令模式 i 编辑模式 

常用：
- ctrl f 向下一页，d 半页
- ctrl b 向上一页，u 半页
- /word 光标之下搜索word字符串
- gg 移动到文档的第一行
- G 移动到文档最好一行
- 0 移动到光标行的第一个字符
- G 移动到光标行的最后一个字符
- n Enter 光标移动n行
- :1,$s/word1/word2/g 第一行到最后一行，word1替换成word2
- dd 删除鼠标所在的哪行
- ndd n数字 删除光标下n行
- yy 赋值游标所在的那一行
- nyy
- u 复原前一个动作
- ctrl r 重复上一个动作
- . 重复前一个动作

## yum/apt RPM包管理
yum: 红帽系列
- yum check-update
- yum update
- yum install package_name
- yum update package_name
- yum list
- yum remove package_name
- yum clean packages/headers/oldheaders

apt: Debian系列
- sudo apt update package_name ...
- sudo apt upgrade
- sudo apt list 
- sudo apt full-upgrade
- sudo apt install package_name ...
- sudo apt show package_name
- sudo apt remove package_name
- sudo apt search package_name
- sudo apt
- sudo apt
- sudo apt
- sudo apt
- sudo apt
