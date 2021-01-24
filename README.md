# MyPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

Push to docker hub
docker build -t <hub-user>/<repo-name>[:<tag>] .
docker push <hub-user>/<repo-name>[:<tag>]

git archive -v -o portfolio.zip --format=zip HEAD


docker build -t hanyuanzhang/portfolio-angular:test-0.0.2 .
docker run -it imageId /bin/bash
