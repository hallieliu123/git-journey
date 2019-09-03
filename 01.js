// 查看用户信息

// git config user.name
// git config use.email

// 修改用户

// git config --global user.name 'Ocean'
// git config --global user.email 'hallieliu123@163.com'


// 工作区   暂存区   版本库 

// ( 暂存区和版本库都在本地隐藏目录.git内，它包含很多东西，
//        其中最重要的就是：暂存区（ index 里面存的都是索引 ）和 分支 ），其中还有一个HEAD文件是一个指针，指向当前分支 )

// 操作命令

// 1. git clone < URL >  

// 2. git status 对比工作区和暂存区代码

// 3. git add < filename > 添加此更改文件代码  || git add. 添加所有更改文件代码

// 4. git commit -m 'memo' 暂存区提交至版本库

// 5. git commit -a -m 'memo' 工作区同时更新到暂存区和版本库

// 6. git log 查看提交记录


// 7. 对比

//    git diff 工作区 对比 暂存区

//    git diff --cached(staged) 暂存区 对比 版本库

//    git diff master 工作区 对比 版本库

// 8. 撤销操作 

//    git reset HEAD < filename > 暂存区内容撤销

//    git checkout --< filename > 工作区撤销至暂存区/版本库版本

//    git commit -m 'memo' --amend 撤销上次操作，一起提交本次操作 

// 9.删除操作

//    git rm < filename >

//    git rm -f < filename >

//    git rm --cached < filename >


// 10.恢复操作

//     git checkout 版本id < filename >  从版本中恢复一个文件

//     git reset --hard 版本id 从版本中恢复所有

//         git reset --hard HEAD^ 恢复至前一个版本

//         git reset --hard HEADE~< num > 恢复至前 num 个版本

//     git reflog 查看版本日志

// 11. 同步远程仓库

//     git remote 查看远程仓库名

//         git remote -v 查看远程仓库地址

//     git push 仓库名 分支





































//    处逆境中,周身皆针砭药石，砥节砺行而不觉。
// Anything in life worth having would take patience, sacrifices and be a lot of work.











