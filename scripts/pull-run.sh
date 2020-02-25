cd $HOME/projects
git clone git@github.com:manan30/meal-tracker-backend.git
cd meal-tracker-backend
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ $# -gt 0]]; then
  git checkout --track origin/fake-data
fi
docker-compose up --detach
cd ..
rm -rfd meal-tracker-backend