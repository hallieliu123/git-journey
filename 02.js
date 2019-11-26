// git stash 缓存

// 添加缓存

// 1. git stash save 'message'  缓存 unstaged tracked files 的 changes 和 staged changes，‘message’ 为标识存储的信息
// 2. git stash -u (--include-untracked) 可缓存 untracked 文件

// 应用缓存

// git stash apply 默认应用第一个即 stash@{0}
// git stash apply 'list num' 应用第几个缓存

// 查看缓存

// git stash list 查看缓存的每条信息


// 删除缓存

// 1.git stash drop 'list num' 删除某个 num 缓存
// 2.git stash pop 删除第一个缓存 
// 3.git stash clear 清除所有缓存




