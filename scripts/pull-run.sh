cd $HOME/projects
git clone git@github.com:manan30/meal-tracker-backend.git
cd meal-tracker-backend
cp $HOME/.env .
docker-compose up -d --build app
cd ..
rm -rfd meal-tracker-backend