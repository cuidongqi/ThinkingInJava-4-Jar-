1.Javascript Math ceil()、floor()、round()三个函数的区别
◎Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数；
◎Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数；
◎Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数(这也是我们在数学课上学到的舍入规则)。

2.解析JavaScript中“&&”和“||”操作符
短路原理
1、只要“||”前面为false,不管“||”后面是true还是false，都返回“||”后面的值。
2、只要“||”前面为true,不管“||”后面是true还是false，都返回“||”前面的值。
我称这种为短路原理： 知道了前面第一个的结果就知道后的输出，如果为第一个为：true，则取第一个的值，如果第一个为false，则取第二个的值。
js必须牢记的6个蛋蛋： 请你一定要记住：在js逻辑运算中，0、”“、null、false、undefined、NaN都会判为false，其他都为true。
短路原理
1、只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值;
2、只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值;
JS强大的表现力吧：
var add_level = (add_step == 5 && 1) || (add_step == 10 && 2) || (add_step == 12 && 3) || (add_step == 15 && 4) || 0;
更强大的，也更优秀：
var add_level = {'5':1,'10':2,'12':3,'15':4}[add_step] || 0;


3.Javascript中的 “&” 和 “|” 详解
&
var num2 = 'string' & 1;
console.log(num2); // 0
// true是布尔类型值，同样使用Number()函数处理，处理后得到数值1，于是表达式就相当于“1 & 1” 进行位运算，当两个数值都为1的时候，结果返回1
var num3 = true & 1;
console.log(num3); // 1
// 23的二进制码是：...10111，5的二进制码是：...00101。然后每一位进行对齐处理，结合上面的规则，可以得出10111&00101的结果是：00101。00101就是5
var num6 = 23 & 5;
|
// 第一个操作符数为undefined，第二个操作符数是false，均不是数值，所以都要先使用Number()函数处理，处理结果都是返回NaN，NaN又会被当成0处理，于是最终结果是0
var num4 = undefined | false;
console.log(num4); // 0
// 第一个操作符数相当于0，第二个操作符数相当于1，结合按位或的规则，最终结果是1
var num5 = undefined | true;
console.log(num5); // 1
// 23的二进制码是：...10111，5的二进制码是：...00101。然后每一位进行对齐处理，结合上面的规则，可以得出10111|00101的结果是：10111。10111就是23
var num7 = 23 | 5;
console.log(num7); // 23

4.浅谈JS中的!=、== 、!==、===的用法和区别
“=”：这个表示赋值，不是表示运算符
“==”：表示等于(值)
“===”：表示全等于（类型和值）
先说 ===，这个比较简单。下面的规则用来判断两个值是否===相等：
1、如果类型不同，就[不相等]
2、如果两个都是数值，并且是同一个值，那么[相等]；(！例外)的是，如果其中至少一个是NaN，那么[不相等]。（判断一个值是否是NaN，只能用isNaN()来判断）
3、如果两个都是字符串，每个位置的字符都一样，那么[相等]；否则[不相等]。
4、如果两个值都是true，或者都是false，那么[相等]。
5、如果两个值都引用同一个对象或函数，那么[相等]；否则[不相等]。
6、如果两个值都是null，或者都是undefined，那么[相等]。
再说 ==，根据以下规则：
1、如果两个值类型相同，进行 === 比较。
2、如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较：
a、如果一个是null、一个是undefined，那么[相等]。
b、如果一个是字符串，一个是数值，把字符串转换成数值再进行比较。
c、如果任一值是 true ，把它转换成 1 再比较；如果任一值是 false，把它转换成 0 再比较。
d、如果一个是对象，另一 个是数值或字符串，把对象转换成基础类型的值再比较。对象转换成基础类型，利用它的toString或者valueOf方法。js核心内置类，会尝试 valueOf先于toString；例外的是Date，Date利用的是toString转换。非js核心的对象，令说（比较麻烦，我也不大懂）
e、任何其他组合，都[不相等]。
var num = 1;  
var str = '1'; 
var test = 1; 
test == num  //true　相同类型　相同值 
test === num //true　相同类型　相同值 
test !== num //false test与num类型相同，其值也相同,　非运算肯定是false  
num == str  //true 　把str转换为数字，检查其是否相等。  
num != str  //false == 的 非运算 
num === str //false 类型不同，直接返回false 
num !== str //true  num 与 str类型不同 意味着其两者不等　非运算自然是true啦

5.nodejs express 启动报错:Error: Cannot find module 'xxx'
npm install
还有一个方法是执行：npm install 模块名称 --save
package.json 文件

6.导航栏链接点击后跳转，新页面相应的链接添加颜色
html：

<div class="nav">
        <ul>
            <li class="active"><a href="a.html">aaa</a></li>
            <li><a href="b.html">bbb</a></li>
            <li><a href="c.html">ccc</a></li>
        </ul>
        
    </div>

jquery：

$(".nav li a").each(function (i) {
        var $me = $(this);

        var lochref = $.trim(window.location.href);
        var mehref = $.trim($me.get(0).href);



        if (lochref.indexOf(mehref) != -1) {
            $me.parent().addClass("active");
        } else {
            $me.parent().removeClass("active");
        }

    });

css:

.active{background-color:#ed0505;}

7.怎么样结束关闭linux/ubuntu系统中的进程
打开终端命令窗口，然后输入以下命令执行：
gnome-system-monitor

8.ubuntu查看文件内容
如果你只是想查看一下文件里的内容（不需要vi，vim），有几个常用的方法。
1. cat 文件名 |　grep 你要查看的部分内容
2. less 文件名
3. more 文件名 Enter（向下翻滚一行），空格（向下滚动一屏），Q（退出命令）

9.基本的使用方法总结：
1 导出所有库
 系统命令行
 mysqldump -uusername -ppassword --all-databases > all.sql
 2 导入所有库
 mysql命令行
 mysql>source all.sql;
 3 导出某些库
 系统命令行
 mysqldump -uusername -ppassword --databases db1 db2 > db1db2.sql
 4 导入某些库
 mysql命令行
 mysql>source db1db2.sql;
 5 导入某个库
 系统命令行
 mysql -uusername -ppassword db1 < db1.sql;
 或mysql命令行
 mysql>source db1.sql;
 6 导出某些数据表
 系统命令行
 mysqldump -uusername -ppassword db1 table1 table2 > tb1tb2.sql
 7 导入某些数据表
 系统命令行
 mysql -uusername -ppassword db1 < tb1tb2.sql
 或mysql命令行
 mysql>
 user db1;
 source tb1tb2.sql;
 Mysql导出(多张表)表结构及表数据 mysqldump用法
  命令行下具体用法如下：  mysqldump -u用戶名 -p密码 -d 數據库名 表名 脚本名;
    1、导出數據库為dbname的表结构（其中用戶名為root,密码為dbpasswd,生成的脚本名為db.sql）
    mysqldump -uroot -pdbpasswd -d dbname >db.sql;
    2、导出數據库為dbname某张表(test)结构
    mysqldump -uroot -pdbpasswd -d dbname test>db.sql;
    3、导出數據库為dbname所有表结构及表數據（不加-d）
    mysqldump -uroot -pdbpasswd  dbname >db.sql;
    4、导出數據库為dbname某张表(test)结构及表數據（不加-d）
    mysqldump -uroot -pdbpasswd dbname test>db.sql;
　 5.导出数据中dbname多张表（test1,test2,test3）结构及表数据用用空格隔开
    mysqldump -uroot -pdbpasswd dbname test1 test2 test3>db.sql;

10.vi vim
vi的使用
基本上vi可以分为三种状态，分别是一般模式、编辑模式和命令行模式，各模式的功能区分如下：
一般模式：
以vi打开一个文件就直接进入一般模式了(这是默认的模式)。在这个模式中， 你可以使用上下左右按键来移动光标，你可以使用删除字符或删除整行来处理文件内容， 也可以使用复制、粘贴来处理你的文件数据。
编辑模式：
在一般模式中可以进行删除、复制、粘贴等的操作，但是却无法编辑文件的内容，只有当到你按下【i, I, o, O, a, A, r, R】等任何一个字母之后才会进入编辑模式。这时候屏幕的左下方会出现【INSERT或 REPLACE】的字样，此时才可以进行编辑。而如果要回到一般模式时， 则必须要按下【Esc】即可退出编辑模式。
命令行模式：
输入【 : / ? 】三个中的任何一个，就可以将光标移动到最底下那一行。在这个模式中， 可以提供查找、读取、存盘、替换字符、离开vi、显示行号等的动作则是在此模式中完成的！
一般模式可用的按钮说明
移动光标
【h、j、k、l】，分别控制光标左、下、上、右移一格
按【ctrl+b】屏幕往"后"移动一页
按【ctrl+f】屏幕往"前"移动一页
【n<space>】光标向右移动n个字符
【Home】移动到这一行的最前面字符处:0数字，但不能用数字小键盘上的数字
【End】 移动到这一行的最后面字符处:$，我测试好像不行
【w】光标跳到下个字的开头
【e】光标跳到下个字的字尾
【H】 光标移动到这个屏幕的最上方那一行的第一个字符
【M】 光标移动到这个屏幕的中间那一行的第一个字符
【L】光标移动到这个屏幕的最下方那一行的第一个字符
【G】 移动到这个文件的最后一行
【nG】移动到这个文件的第n行(可配合:set nu)
【gg】 移动到这个文件的第一行，相当于1G
【n<Enter>】光标向下移动n行
查找与替换
【/word】 向光标向下寻找一个名称为word的字符串
【?word】 向光标向上寻找一个名称为word的字符串
【n】 代表重复前一个查找的动作
【N】 与n刚好相反，为【反向】进行行前一个查找动作
【:n1,n2s/word1/word2/g】  n1与n2为数字，在第n1与n2行之间查找word1 这个字符串，并将该字符串替换为word2
【:1,$s/word1/word2/g】 从第一行到最后一行查找word1字符串，并将该字符串替换为word2
【:1,$s/word1/word2/gc】 从第一行到最后一行查找word1字符串，并将该字符串替换为word2 ，且在替换前提示用户确认是否进行替换
删除、复制与粘贴
【x】 为向后删除一个字符 (相当于【del】键)
【X】 为向前删除一个字符(相当于【backspace】键)
【nx】 连续向后删除n个字符
【dd】 删除光标所在行
【ndd】 删除光标所在的向下n行
【d1G】 删除光标所在行到第一行的所有数据
【dG】 删除光标所在到最后一行的所有数据
【d$】 删除光标所在处，到该行的最后一个字符
【d0】 删除光标所在处，到该行的最前一个字符
【yy】 复制光标所在的那一行
【nyy】 复制光标所在的向下n列
【y1G】 复制光标所在行到第一行的所有数据
【yG】 复制光标所在行到最后一行的所有数据
【y0】 复制光标所在的那个字符到该行行首的所有数据
【y$】 复制光标所在的那个字符到该行行尾的所有数据
【p】将已复制的数据在光标下一行粘贴上
【P】 则为贴在光标的上一行
【u】 恢复前一个操作
【Ctrl+r】重做上一个操作
【.】 是重复前一个操作
一般模式切换到编辑模式的可用的按钮说明
【i, I】 进入编辑模式：
i 为【从目前光标所在处插入】
I 为【在目前所在行的第一个非空格符处开始插入】
【a, A】 进入编辑模式(Insert mode)：
a 为【从目前光标所在的下一个字符处开始插入】
A 为【从光标所在行的最后一个字符处开始插入】
【o, O】 进入编辑模式：
o 为【在目前光标所在的下一行处插入新的一行】
O 为在目前光标所在处的上一行插入新的一行
【r, R】 进入取代模式：
r 只会取代光标所在的那一个字符一次
R会一直取代光标所在的文字，直到按下 ESC 为止；
【Esc】 退出编辑模式，回到一般模式
一般模式切换到命令行模式可用的按钮说明
【:w】 保存编辑的内容
【:w!】强制写入该文件，但跟你对该文件的权限有关
【:q】 离开vi
【:q!】 不想保存修改强制离开
【:wq】 保存后离开
【:x】 保存后离开
【ZZ】 若文件没有更动，则不保存离开，若文件已经被更改过，则保存后离开
【:w filename】 将编辑的数据保存成另一个文件（类似另存）
【:r filename】 在编辑的数据中，读入另一个文件的数据。即将【filename】 这个文件的内容加到光标所在行后面。
【:n1,n2 w filename】 将n1到n2的内容保存成filename这个文件。
【:! command】暂时离开vi 到命令行模式下执行command的显示结果！例如 【:! ls /home】即可在 vi 当中察看/home底下以ls输出的文件信息！
【:set nu】 显示行号
【:set nonu】 与 set nu 相反，为取消行

11.chrome
ctrl+T:打开新标签页
ctrl+W：关闭当前标签页或弹出窗口
ctrl+N：打开新窗口
Alt+F4：关闭窗口
F11：全屏
ctrl+H：打开历史记录
ctrl+Shift+delete：清除浏览数据
ctrl+F5：重新载入当前页的内容，忽略缓存
ctrl+U：打开当前页的源代码
ctrl+shift+j打开开发人员工具

12. sudo apt-get update
用于对当前系统的可用更新列表进行更新。这也是许多 Linux 发行版经常需要执行的操作，目的是随时获得最新的软件版本信息

13.typeof

14.redshift-gtk -l 39.92:116.46 -t 5500:4500

15.
重启命令 ： 
    1、reboot 
    2、shutdown -r now 立刻重启
    3、shutdown -r 10 过10分钟自动重启
    4、shutdown -r 20:35 在时间为20:35时候重启
    如果是通过shutdown命令设置重启的话，可以用shutdown -c命令取消重启 
    关机命令 ： 
    1、halt   立刻关机（一般加-p 关闭电源）
    2、poweroff 立刻关机 
    3、shutdown -h now 立刻关机
    4、shutdown -h 10 10分钟后自动关机 
    如果是通过shutdown命令设置关机的话，可以用shutdown -c命令取消关机

16.js判断是否是数字——isNaN()函数
使用isNaN()函数判断是否是数字时遇到的问题，当变量是空串时，isNaN()的返回值还是false，但空串却不是数据，查了一下，才知道原来isNaN()把空串或空格作0处理的。
isNaN　　返回一个 Boolean 值，指明提供的值是否是保留值 NaN （不是数字）。
　　NaN 即 Not a Number
　　isNaN(numValue)
　必选项 numvalue 参数为要检查是否为 NAN 的值。
　说明假如值是 NaN， 那么 isNaN 函数返回 true ，否则返回 false

17.git
$ mkdir learngit
$ cd learngit
$ pwd
/Users/michael/learngit

$ git init五角星
Initialized empty Git repository in /Users/michael/learngit/.git/

readme.txt
Git is a version control system.
Git is free software.

$ git add readme.txt五角星

$ git commit -m "wrote a readme file"五角星
[master (root-commit) cb926e7] wrote a readme file
 1 file changed, 2 insertions(+)
 create mode 100644 readme.txt

$ git add file1.txt五角星
$ git add file2.txt file3.txt五角星
$ git commit -m "add 3 files."五角星

修改readme.txt文件
Git is a distributed version control system.
Git is free software.

$ git status五角星
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#    modified:   readme.txt
#
no changes added to commit (use "git add" and/or "git commit -a")

$ git diff readme.txt 五角星
diff --git a/readme.txt b/readme.txt
index 46d49bf..9247db6 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1,2 +1,2 @@
-Git is a version control system.
+Git is a distributed version control system.
 Git is free software.

$ git add readme.txt五角星
$ git status五角星
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       modified:   readme.txt
#

$ git commit -m "add distributed"五角星
[master ea34578] add distributed
 1 file changed, 1 insertion(+), 1 deletion(-)

$ git status五角星
# On branch master
nothing to commit (working directory clean)

修改readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.

$ git add readme.txt
$ git commit -m "append GPL"
[master 3628164] append GPL
 1 file changed, 1 insertion(+), 1 deletion(-)

版本1：wrote a readme file
Git is a version control system.
Git is free software.
版本2：add distributed
Git is a distributed version control system.
Git is free software.
版本3：append GPL
Git is a distributed version control system.
Git is free software distributed under the GPL.

$ git log五角星
commit 3628164fb26d48395383f8f31179f24e0882e1e0
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Tue Aug 20 15:11:49 2013 +0800
    append GPL

commit ea34578d5496d7dd233c827ed32a8cd576c5ee85
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Tue Aug 20 14:53:12 2013 +0800
    add distributed

commit cb926e7ea50ad11b8f9e909c05226233bf755030
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Mon Aug 19 17:51:55 2013 +0800
    wrote a readme file

$ git log --pretty=oneline五角星
3628164fb26d48395383f8f31179f24e0882e1e0 append GPL
ea34578d5496d7dd233c827ed32a8cd576c5ee85 add distributed
cb926e7ea50ad11b8f9e909c05226233bf755030 wrote a readme file

$ git reset --hard HEAD^五角星 HEAD~100
HEAD is now at ea34578 add distributed

$ cat readme.txt
Git is a distributed version control system.
Git is free software.

$ git log
commit ea34578d5496d7dd233c827ed32a8cd576c5ee85
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Tue Aug 20 14:53:12 2013 +0800
    add distributed

commit cb926e7ea50ad11b8f9e909c05226233bf755030
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Mon Aug 19 17:51:55 2013 +0800
    wrote a readme file

$ git reset --hard 3628164五角星
HEAD is now at 3628164 append GPL

$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.

$ git reflog五角星
ea34578 HEAD@{0}: reset: moving to HEAD^
3628164 HEAD@{1}: commit: append GPL
ea34578 HEAD@{2}: commit: add distributed
cb926e7 HEAD@{3}: commit (initial): wrote a readme file

对readme.txt做个修改
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
新增一个LICENSE文本文件 内容随便写
$ git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   readme.txt
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#       LICENSE
no changes added to commit (use "git add" and/or "git commit -a")

使用两次命令git add，把readme.txt和LICENSE都添加后，用git status再查看一下：
$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       new file:   LICENSE
#       modified:   readme.txt
#

git add命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行git commit就可以一次性把暂存区的所有修改提交到分支。
$ git commit -m "understand how stage works"
[master 27c9860] understand how stage works
 2 files changed, 675 insertions(+)
 create mode 100644 LICENSE

一旦提交后，如果你又没有对工作区做任何修改，那么工作区就是“干净”的：
$ git status
# On branch master
nothing to commit (working directory clean)

Git跟踪并管理的是修改，而非文件。
你会问，什么是修改？比如你新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。

对readme.txt做一个修改，比如加一行内容：
$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes.

$ git add readme.txt
$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       modified:   readme.txt
#

再修改readme.txt：
$ cat readme.txt 
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.

$ git commit -m "git tracks changes"
[master d4f25b6] git tracks changes
 1 file changed, 1 insertion(+)

$ git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   readme.txt
#
no changes added to commit (use "git add" and/or "git commit -a")

$ git diff HEAD -- readme.txt 五角星
diff --git a/readme.txt b/readme.txt
index 76d770f..a9c5755 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1,4 +1,4 @@
 Git is a distributed version control system.
 Git is free software distributed under the GPL.
 Git has a mutable index called stage.
-Git tracks changes.
+Git tracks changes of files.

可以继续git add再git commit，也可以别着急提交第一次修改，先git add第二次修改，再git commit，就相当于把两次修改合并后一块提交了。

在readme.txt中添加了一行：
$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
My stupid boss still prefers SVN.

$ git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   readme.txt
#
no changes added to commit (use "git add" and/or "git commit -a")

$ git checkout -- readme.txt

$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.

$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
My stupid boss still prefers SVN.

$ git add readme.txt

$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       modified:   readme.txt
#

git reset命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用HEAD时，表示最新的版本。
$ git reset HEAD readme.txt
Unstaged changes after reset:
M       readme.txt

$ git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   readme.txt
#
no changes added to commit (use "git add" and/or "git commit -a")

$ git checkout -- readme.txt

$ git status
# On branch master
nothing to commit (working directory clean)

添加一个新文件test.txt到Git并且提交：
$ git add test.txt
$ git commit -m "add test.txt"
[master 94cdc44] add test.txt
 1 file changed, 1 insertion(+)
 create mode 100644 test.txt

$ rm test.txt 五角星

$ git status
# On branch master
# Changes not staged for commit:
#   (use "git add/rm <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       deleted:    test.txt
#
no changes added to commit (use "git add" and/or "git commit -a")

$ git rm test.txt
rm 'test.txt'

$ git commit -m "remove test.txt"
[master d17efd8] remove test.txt
 1 file changed, 1 deletion(-)
 delete mode 100644 test.txt

另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本：
$ git checkout -- test.txt

Git远程仓库

先有本地库，后有远程库的时候，如何关联远程库。
本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以，需要一点设置：
第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：
$ ssh-keygen -t rsa -C "youremail@example.com"
你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，由于这个Key也不是用于军事目的，所以也无需设置密码。
如果一切顺利的话，可以在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。
第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面：
然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容：
点“Add Key”，你就应该看到已经添加的Key：
为什么GitHub需要SSH Key呢？因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。
当然，GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。
在GitHub上免费托管的Git仓库，任何人都可以看到喔（但只有你自己才能改）。所以，不要把敏感信息放进去。
如果你不想让别人看到Git库，有两个办法，一个是交点保护费，让GitHub把公开的仓库变成私有的，这样别人就看不见了（不可读更不可写）。另一个办法是自己动手，搭一个Git服务器，因为是你自己的Git服务器，所以别人也是看不见的。这个方法我们后面会讲到的，相当简单，公司内部开发必备。

$ git remote add origin git@github.com:michaelliao/learngit.git
把上面的michaelliao替换成你自己的GitHub账户名，否则，你在本地关联的就是我的远程库，关联没有问题，但是你以后推送是推不上去的，因为你的SSH Key公钥不在我的账户列表中。
添加后，远程库的名字就是origin，这是Git默认的叫法，也可以改成别的，但是origin这个名字一看就知道是远程库。

可以把本地库的所有内容推送到远程库上：
$ git push -u origin master
Counting objects: 19, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (19/19), done.
Writing objects: 100% (19/19), 13.73 KiB, done.
Total 23 (delta 6), reused 0 (delta 0)
To git@github.com:michaelliao/learngit.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.
把本地库的内容推送到远程，用git push命令，实际上是把当前分支master推送到远程。
由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。

只要本地作了提交，就可以通过命令：

$ git push origin master
把本地master分支的最新修改推送至GitHub，现在，你就拥有了真正的分布式版本库！

SSH警告
当你第一次使用Git的clone或者push命令连接GitHub时，会得到一个警告：
The authenticity of host 'github.com (xx.xx.xx.xx)' can't be established.
RSA key fingerprint is xx.xx.xx.xx.xx.
Are you sure you want to continue connecting (yes/no)?
这是因为Git使用SSH连接，而SSH连接在第一次验证GitHub服务器的Key时，需要你确认GitHub的Key的指纹信息是否真的来自GitHub的服务器，输入yes回车即可。
Git会输出一个警告，告诉你已经把GitHub的Key添加到本机的一个信任列表里了：
Warning: Permanently added 'github.com' (RSA) to the list of known hosts.
这个警告只会出现一次，后面的操作就不会有任何警告了。
如果你实在担心有人冒充GitHub服务器，输入yes前可以对照GitHub的RSA Key的指纹信息是否与SSH连接给出的一致。

分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而SVN在没有联网的时候是拒绝干活的！当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了！

先创建远程库，然后，从远程库克隆。
登陆GitHub，创建一个新的仓库，名字叫gitskills
勾选Initialize this repository with a README，这样GitHub会自动为我们创建一个README.md文件。创建完毕后，可以看到README.md文件：
现在，远程库已经准备好了，下一步是用命令git clone克隆一个本地库：
$ git clone git@github.com:michaelliao/gitskills.git
Cloning into 'gitskills'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (3/3), done.

$ cd gitskills
$ ls
README.md
注意把Git库的地址换成你自己的，然后进入gitskills目录看看，已经有README.md文件了。
如果有多个人协作开发，那么每个人各自从远程克隆一份就可以了。
你也许还注意到，GitHub给出的地址不止一个，还可以用https://github.com/michaelliao/gitskills.git这样的地址。实际上，Git支持多种协议，默认的git://使用ssh，但也可以使用https等其他协议。
使用https除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放http端口的公司内部就无法使用ssh协议而只能用https。

分支在实际中有什么用呢？假设你准备开发一个新功能，但是需要两周才能完成，第一周你写了50%的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。
其他版本控制系统如SVN等都有分支管理，但是用过之后你会发现，这些版本控制系统创建和切换分支比蜗牛还慢，简直让人无法忍受，结果分支功能成了摆设，大家都不去用。
但Git的分支是与众不同的，无论创建、切换和删除分支，Git在1秒钟之内就能完成！无论你的版本库是1个文件还是1万个文件。

创建dev分支，然后切换到dev分支：
$ git branch dev
$ git checkout dev
Switched to branch 'dev'

git checkout命令加上-b参数表示创建并切换，相当于两条命令
$ git checkout -b dev
Switched to a new branch 'dev'

git branch命令查看当前分支：
$ git branch
* dev
  master
当前分支前面会标一个*号。

在dev分支上正常提交，比如对readme.txt做个修改，加上一行：
Creating a new branch is quick.
然后提交：
$ git add readme.txt 
$ git commit -m "branch test"
[dev fec145a] branch test
 1 file changed, 1 insertion(+)

dev分支的工作完成，我们就可以切换回master分支：
$ git checkout master
Switched to branch 'master'

切换回master分支后，再查看一个readme.txt文件，刚才添加的内容不见了！因为那个提交是在dev分支上，而master分支此刻的提交点并没有变
我们把dev分支的工作成果合并到master分支上：
$ git merge dev
Updating d17efd8..fec145a
Fast-forward
 readme.txt |    1 +
 1 file changed, 1 insertion(+)
Fast-forward信息，Git告诉我们，这次合并是“快进模式”，也就是直接把master指向dev的当前提交，所以合并速度非常快。
git merge命令用于合并指定分支到当前分支。合并后，再查看readme.txt的内容，就可以看到，和dev分支的最新提交是完全一样的。

合并完成后，就可以放心地删除dev分支了：
$ git branch -d dev
Deleted branch dev (was fec145a).
删除后，查看branch，就只剩下master分支了：
$ git branch
* master

因为创建、合并和删除分支非常快，所以Git鼓励你使用分支完成某个任务，合并后再删掉分支，这和直接在master分支上工作效果是一样的，但过程更安全。

新的feature1分支，继续我们的新分支开发：
$ git checkout -b feature1
Switched to a new branch 'feature1'

修改readme.txt最后一行，改为：
Creating a new branch is quick AND simple.

在feature1分支上提交：
$ git add readme.txt 
$ git commit -m "AND simple"
[feature1 75a857c] AND simple
 1 file changed, 1 insertion(+), 1 deletion(-)

切换到master分支：
$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 1 commit.

Git还会自动提示我们当前master分支比远程的master分支要超前1个提交。

在master分支上把readme.txt文件的最后一行改为：
Creating a new branch is quick & simple.
提交：
$ git add readme.txt 
$ git commit -m "& simple"
[master 400b400] & simple
 1 file changed, 1 insertion(+), 1 deletion(-)

master分支和feature1分支各自都分别有新的提交
这种情况下，Git无法执行“快速合并”，只能试图把各自的修改合并起来，但这种合并就可能会有冲突，我们试试看：
$ git merge feature1
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.
Git告诉我们，readme.txt文件存在冲突，必须手动解决冲突后再提交。git status也可以告诉我们冲突的文件：
$ git status
# On branch master
# Your branch is ahead of 'origin/master' by 2 commits.
#
# Unmerged paths:
#   (use "git add/rm <file>..." as appropriate to mark resolution)
#
#       both modified:      readme.txt
#
no changes added to commit (use "git add" and/or "git commit -a")
直接查看readme.txt的内容：
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
<<<<<<< HEAD
Creating a new branch is quick & simple.
=======
Creating a new branch is quick AND simple.
>>>>>>> feature1
Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容，我们修改如下后保存：
Creating a new branch is quick and simple.
再提交：
$ git add readme.txt 
$ git commit -m "conflict fixed"
[master 59bc1cb] conflict fixed

$ git log --graph --pretty=oneline --abbrev-commit
*   59bc1cb conflict fixed
|\
| * 75a857c AND simple
* | 400b400 & simple
|/
* fec145a branch test
...

删除feature1分支：
$ git branch -d feature1
Deleted branch feature1 (was 75a857c).

Git会用Fast forward模式，但这种模式下，删除分支后，会丢掉分支信息。
如果要强制禁用Fast forward模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。
创建并切换dev分支：
$ git checkout -b dev
Switched to a new branch 'dev'

修改readme.txt文件，并提交一个新的commit：
$ git add readme.txt 
$ git commit -m "add merge"
[dev 6224937] add merge
 1 file changed, 1 insertion(+)

现在，我们切换回master：
$ git checkout master
Switched to branch 'master'

准备合并dev分支，请注意--no-ff参数，表示禁用Fast forward：
$ git merge --no-ff -m "merge with no-ff" dev
Merge made by the 'recursive' strategy.
 readme.txt |    1 +
 1 file changed, 1 insertion(+)
因为本次合并要创建一个新的commit，所以加上-m参数，把commit描述写进去。

合并后，我们用git log看看分支历史：
$ git log --graph --pretty=oneline --abbrev-commit
*   7825a50 merge with no-ff
|\
| * 6224937 add merge
|/
*   59bc1cb conflict fixed
...

分支策略
在实际开发中，我们应该按照几个基本原则进行分支管理：
首先，master分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；
那在哪干活呢？干活都在dev分支上，也就是说，dev分支是不稳定的，到某个时候，比如1.0版本发布时，再把dev分支合并到master上，在master分支发布1.0版本；
你和你的小伙伴们每个人都在dev分支上干活，每个人都有自己的分支，时不时地往dev分支上合并就可以了。

Bug分支
软件开发中，bug就像家常便饭一样。有了bug就需要修复，在Git中，由于分支是如此的强大，所以，每个bug都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。

当你接到一个修复一个代号101的bug的任务时，很自然地，你想创建一个分支issue-101来修复它，但是，等等，当前正在dev上进行的工作还没有提交：
$ git status
# On branch dev
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       new file:   hello.py
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   readme.txt
#

并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需1天时间。但是，必须在两个小时内修复该bug，怎么办？
幸好，Git还提供了一个stash功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：
$ git stash
Saved working directory and index state WIP on dev: 6224937 add merge
HEAD is now at 6224937 add merge

现在，用git status查看工作区，就是干净的（除非有没有被Git管理的文件），因此可以放心地创建分支来修复bug。

首先确定要在哪个分支上修复bug，假定需要在master分支上修复，就从master创建临时分支：
$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 6 commits.
$ git checkout -b issue-101
Switched to a new branch 'issue-101'

现在修复bug，需要把“Git is free software ...”改为“Git is a free software ...”，然后提交：
$ git add readme.txt 
$ git commit -m "fix bug 101"
[issue-101 cc17032] fix bug 101
 1 file changed, 1 insertion(+), 1 deletion(-)
修复完成后，切换到master分支，并完成合并，最后删除issue-101分支：
$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 2 commits.
$ git merge --no-ff -m "merged bug fix 101" issue-101
Merge made by the 'recursive' strategy.
 readme.txt |    2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
$ git branch -d issue-101
Deleted branch issue-101 (was cc17032).

太棒了，原计划两个小时的bug修复只花了5分钟！现在，是时候接着回到dev分支干活了！
$ git checkout dev
Switched to branch 'dev'
$ git status
# On branch dev
nothing to commit (working directory clean)
工作区是干净的，刚才的工作现场存到哪去了？用git stash list命令看看：

$ git stash list
stash@{0}: WIP on dev: 6224937 add merge
工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法：
一是用git stash apply恢复，但是恢复后，stash内容并不删除，你需要用git stash drop来删除；
另一种方式是用git stash pop，恢复的同时把stash内容也删了：
$ git stash pop
# On branch dev
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       new file:   hello.py
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   readme.txt
#
Dropped refs/stash@{0} (f624f8e5f082f2df2bed8a4e09c12fd2943bdd40)

再用git stash list查看，就看不到任何stash内容了：
$ git stash list

你可以多次stash，恢复的时候，先用git stash list查看，然后恢复指定的stash，用命令：
$ git stash apply stash@{0}

Feature分支
添加一个新功能时，你肯定不希望因为一些实验性质的代码，把主分支搞乱了，所以，每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支。
$ git checkout -b feature-vulcan
Switched to a new branch 'feature-vulcan'
$ git add vulcan.py
$ git status
# On branch feature-vulcan
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       new file:   vulcan.py
#
$ git commit -m "add feature vulcan"
[feature-vulcan 756d4af] add feature vulcan
 1 file changed, 2 insertions(+)
 create mode 100644 vulcan.py

切回dev，准备合并：
$ git checkout dev

feature分支和bug分支是类似的，合并，然后删除。
但是，就在此时，接到上级命令，因经费不足，新功能必须取消！
虽然白干了，但是这个分支还是必须就地销毁：
$ git branch -d feature-vulcan
error: The branch 'feature-vulcan' is not fully merged.
If you are sure you want to delete it, run 'git branch -D feature-vulcan'.
销毁失败。Git友情提醒，feature-vulcan分支还没有被合并，如果删除，将丢失掉修改，如果要强行删除，需要使用命令git branch -D feature-vulcan。

现在我们强行删除：
$ git branch -D feature-vulcan
Deleted branch feature-vulcan (was 756d4af).
终于删除成功！

多人协作
当你从远程仓库克隆时，实际上Git自动把本地的master分支和远程的master分支对应起来了，并且，远程仓库的默认名称是origin。
要查看远程库的信息，用git remote：
$ git remote
origin

或者，用git remote -v显示更详细的信息：
$ git remote -v
origin  git@github.com:michaelliao/learngit.git (fetch)
origin  git@github.com:michaelliao/learngit.git (push)
上面显示了可以抓取和推送的origin的地址。如果没有推送权限，就看不到push的地址。

推送分支
推送分支，就是把该分支上的所有本地提交推送到远程库。推送时，要指定本地分支，这样，Git就会把该分支推送到远程库对应的远程分支上：
$ git push origin master
如果要推送其他分支，比如dev，就改成：
$ git push origin dev
但是，并不是一定要把本地分支往远程推送，那么，哪些分支需要推送，哪些不需要呢？
master分支是主分支，因此要时刻与远程同步；
dev分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；
bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；
feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。
总之，就是在Git中，分支完全可以在本地自己藏着玩，是否推送，视你的心情而定！

抓取分支
多人协作时，大家都会往master和dev分支上推送各自的修改。
	
一个你的小伙伴，可以在另一台电脑（注意要把SSH Key添加到GitHub）或者同一台电脑的另一个目录下克隆：
$ git clone git@github.com:michaelliao/learngit.git
Cloning into 'learngit'...
remote: Counting objects: 46, done.
remote: Compressing objects: 100% (26/26), done.
remote: Total 46 (delta 16), reused 45 (delta 15)
Receiving objects: 100% (46/46), 15.69 KiB | 6 KiB/s, done.
Resolving deltas: 100% (16/16), done.

当你的小伙伴从远程库clone时，默认情况下，你的小伙伴只能看到本地的master分支。不信可以用git branch命令看看：
$ git branch
* master

现在，你的小伙伴要在dev分支上开发，就必须创建远程origin的dev分支到本地，于是他用这个命令创建本地dev分支：
$ git checkout -b dev origin/dev

现在，他就可以在dev上继续修改，然后，时不时地把dev分支push到远程：
$ git commit -m "add /usr/bin/env"
[dev 291bea8] add /usr/bin/env
 1 file changed, 1 insertion(+)

$ git push origin dev
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 349 bytes, done.
Total 3 (delta 0), reused 0 (delta 0)
To git@github.com:michaelliao/learngit.git
   fc38031..291bea8  dev -> dev

你的小伙伴已经向origin/dev分支推送了他的提交，而碰巧你也对同样的文件作了修改，并试图推送：
$ git add hello.py 
$ git commit -m "add coding: utf-8"
[dev bd6ae48] add coding: utf-8
 1 file changed, 1 insertion(+)
$ git push origin dev
To git@github.com:michaelliao/learngit.git
 ! [rejected]        dev -> dev (non-fast-forward)
error: failed to push some refs to 'git@github.com:michaelliao/learngit.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Merge the remote changes (e.g. 'git pull')
hint: before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

推送失败，因为你的小伙伴的最新提交和你试图推送的提交有冲突，解决办法也很简单，Git已经提示我们，先用git pull把最新的提交从origin/dev抓下来，然后，在本地合并，解决冲突，再推送：
$ git pull
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0)
Unpacking objects: 100% (3/3), done.
From github.com:michaelliao/learngit
   fc38031..291bea8  dev        -> origin/dev
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream dev origin/<branch>

git pull也失败了，原因是没有指定本地dev分支与远程origin/dev分支的链接，根据提示，设置dev和origin/dev的链接：
$ git branch --set-upstream dev origin/dev
Branch dev set up to track remote branch dev from origin.

再pull：
$ git pull
Auto-merging hello.py
CONFLICT (content): Merge conflict in hello.py
Automatic merge failed; fix conflicts and then commit the result.

这回git pull成功，但是合并有冲突，需要手动解决，解决的方法和分支管理中的解决冲突完全一样。解决后，提交，再push：
$ git commit -m "merge & fix hello.py"
[dev adca45d] merge & fix hello.py
$ git push origin dev
Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 747 bytes, done.
Total 6 (delta 0), reused 0 (delta 0)
To git@github.com:michaelliao/learngit.git
   291bea8..adca45d  dev -> dev

发布一个版本时，我们通常先在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。
所以，标签也是版本库的一个快照。
Git的标签虽然是版本库的快照，但其实它就是指向某个commit的指针（跟分支很像对不对？但是分支可以移动，标签不能移动），所以，创建和删除标签都是瞬间完成的。
按照tag v1.2查找commit就行！所以，tag就是一个让人容易记住的有意义的名字，它跟某个commit绑在一起。

切换到需要打标签的分支上：
$ git branch
* dev
  master
$ git checkout master
Switched to branch 'master'

然后，敲命令git tag <name>就可以打一个新标签：
$ git tag v1.0

可以用命令git tag查看所有标签：
$ git tag
v1.0

默认标签是打在最新提交的commit上的。有时候，如果忘了打标签，比如，现在已经是周五了，但应该在周一打的标签没有打，怎么办？
方法是找到历史提交的commit id，然后打上就可以了：
$ git log --pretty=oneline --abbrev-commit
6a5819e merged bug fix 101
cc17032 fix bug 101
7825a50 merge with no-ff
6224937 add merge
59bc1cb conflict fixed
400b400 & simple
75a857c AND simple
fec145a branch test
d17efd8 remove test.txt
...
比方说要对add merge这次提交打标签，它对应的commit id是6224937，敲入命令：
$ git tag v0.9 6224937
再用命令git tag查看标签：
$ git tag
v0.9
v1.0

注意，标签不是按时间顺序列出，而是按字母排序的。可以用git show <tagname>查看标签信息：
$ git show v0.9
commit 622493706ab447b6bb37e4e2a2f276a20fed2ab4
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Thu Aug 22 11:22:08 2013 +0800

    add merge
...
可以看到，v0.9确实打在add merge这次提交上。

还可以创建带有说明的标签，用-a指定标签名，-m指定说明文字：
$ git tag -a v0.1 -m "version 0.1 released" 3628164

用命令git show <tagname>可以看到说明文字：
$ git show v0.1
tag v0.1
Tagger: Michael Liao <askxuefeng@gmail.com>
Date:   Mon Aug 26 07:28:11 2013 +0800

version 0.1 released

commit 3628164fb26d48395383f8f31179f24e0882e1e0
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Tue Aug 20 15:11:49 2013 +0800

    append GPL

还可以通过-s用私钥签名一个标签：
$ git tag -s v0.2 -m "signed version 0.2 released" fec145a
签名采用PGP签名，因此，必须首先安装gpg（GnuPG），如果没有找到gpg，或者没有gpg密钥对，就会报错：
gpg: signing failed: secret key not available
error: gpg failed to sign the data
error: unable to sign the tag
如果报错，请参考GnuPG帮助文档配置Key。
用命令git show <tagname>可以看到PGP签名信息：
$ git show v0.2
tag v0.2
Tagger: Michael Liao <askxuefeng@gmail.com>
Date:   Mon Aug 26 07:28:33 2013 +0800

signed version 0.2 released
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.12 (Darwin)

iQEcBAABAgAGBQJSGpMhAAoJEPUxHyDAhBpT4QQIAKeHfR3bo...
-----END PGP SIGNATURE-----

commit fec145accd63cdc9ed95a2f557ea0658a2a6537f
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Thu Aug 22 10:37:30 2013 +0800

    branch test
用PGP签名的标签是不可伪造的，因为可以验证PGP签名。验证签名的方法比较复杂，这里就不介绍了。

如果标签打错了，也可以删除：
$ git tag -d v0.1
Deleted tag 'v0.1' (was e078af9)
因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。

如果要推送某个标签到远程，使用命令git push origin <tagname>：
$ git push origin v1.0
Total 0 (delta 0), reused 0 (delta 0)
To git@github.com:michaelliao/learngit.git
 * [new tag]         v1.0 -> v1.0
或者，一次性推送全部尚未推送到远程的本地标签：
$ git push origin --tags
Counting objects: 1, done.
Writing objects: 100% (1/1), 554 bytes, done.
Total 1 (delta 0), reused 0 (delta 0)
To git@github.com:michaelliao/learngit.git
 * [new tag]         v0.2 -> v0.2
 * [new tag]         v0.9 -> v0.9

如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：
$ git tag -d v0.9
Deleted tag 'v0.9' (was 6224937)
然后，从远程删除。删除命令也是push，但是格式如下：
$ git push origin :refs/tags/v0.9
To git@github.com:michaelliao/learngit.git
 - [deleted]         v0.9
要看看是否真的从远程库删除了标签，可以登陆GitHub查看。

