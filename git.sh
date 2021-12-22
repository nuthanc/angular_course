commit_message=`grep "##" README.md|awk 'END{print}'|tr -d '#'`
echo ${commit_message}

git add --all
git commit -m "${commit_message}"
branch=`git branch --show-current`
git push origin $branch