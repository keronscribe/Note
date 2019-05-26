## Git 操作與指令
- 基礎指令
    |指令名稱|作用|
    |:--------:|:------|
    |git init|初始化，也就是建立一個 repo  在我們現在的資料夾裡面，創建一個隱藏資料夾 `.git`，供所有之後版本的版本紀錄存放|
    |git status|顯示版本控制狀態，分成：not a git repository / nothing to commit / Untracked files / Changes to be committed |
    |git add <filename>|加入（被）版本控制，每一次有修正都要重新把檔案 add 成 stage 狀態才能被 commit|
   |git rm --cached <filename>|將檔案移出版本控制|
   |git commit|送出一個新版本|
   |git commit -am <備註>|不開 vim 直接寫備註 commit|
   |git log|查看歷史紀錄|
   |git log --oneline|查看精簡版歷史紀錄|
   |git checkout <版本名稱> |回到該版本的 commit 內容|
   |checkout master|回到最新版|
   |.gitignore|忽略檔案，做法：<br>1. 用 <code>touch</code> 建立一個檔案 .gitignore<br>2. 用 <code>vim</code>修改 .gitignore 的內容<br>3. 把要忽略的檔案名稱寫進去|
   
- 實作紀錄
<figure class="wp-block-image"><img src="https://keronscribe.files.wordpress.com/2019/04/e89ea2e5b995e5bfabe785a7-2019-04-16-e4b88ae58d8811.23.06.png" alt="" class="wp-image-1193"/><figcaption>我的第一個版本紀錄，用的是我在<a href="https://keronscribe.wordpress.com/2019/04/15/cli-%e5%9f%ba%e7%a4%8e/">這篇文章</a>裡面裝的環境。<br></figcaption></figure>
<figure class="wp-block-image"><img src="https://keronscribe.files.wordpress.com/2019/04/e89ea2e5b995e5bfabe785a7-2019-04-16-e4b88be58d8812.01.39.png" alt="" class="wp-image-1194"/><figcaption>用 git log --oneline 得到的內容<br></figcaption></figure>