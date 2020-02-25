cd $HOME/projects
git clone git@github.com:manan30/meal-tracker-backend.git
cd meal-tracker-backend
docker-compose up --detach
cd ..
rm -rfd meal-tracker-backend