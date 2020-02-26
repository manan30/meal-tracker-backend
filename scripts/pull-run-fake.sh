cd $HOME/projects
git clone git@github.com:manan30/meal-tracker-backend.git
cd meal-tracker-backend
git checkout --track origin/fake-data
docker-compose up --detach --build app
cd ..
rm -rfd meal-tracker-backend