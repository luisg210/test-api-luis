#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:luisg210/test-api-luis.git main:gh-pages
cd -

# # version change
# $ git init
# $ git add .
# $ git commit -m "My site ready for deployment."

# # creates a new app with a specified name
# $ heroku apps:create example

# # set buildpack for static sites
# $ heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git

# # publish site
# $ git push heroku main

# # opens a browser to view the Dashboard version of Heroku CI
# $ heroku open