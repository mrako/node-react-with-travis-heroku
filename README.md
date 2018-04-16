# node-react-with-travis-heroku
Example template for node-react app that can be built in Travis CI and deployed to Heroku. In local development app is running in docker containers. 

If you don't want to use docker, you can set dev environment to your local machine normally with `npm install`. In this case you need PostgreSQL installed (and database created). Also, you need to add `.env` file to backend and add same variables that are defined in docker-compose.yml in backend -> environment.

## Prequisites
* [docker](https://docs.docker.com/)
* [docker-compose](https://docs.docker.com/compose/)
* [nodejs](https://nodejs.org/)
* ([psql](https://www.postgresql.org/) if you don't want to run app in docker)
* [travis CLI](https://github.com/travis-ci/travis.rb)
* [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Set up development environment
- Copy template to your local machine. You can, for example, [duplicate it](https://help.github.com/articles/duplicating-a-repository/).

### Run
- Ensure that docker is running, and then in project root dir run:  
```docker-compose up```  

To run containers in detached mode, use `docker-compose up -d`  
If you want to run only some of the containers, specify containers, for example `docker-compose up backend db`
- `docker ps -a` to check which containers are running and in which ports
- backend is served in `localhost:9000` (example api in `localhost:9000/api/v1/hello/world`)
- frontend is served in `localhost:8000`
- db is served localhost:5432

### Stop containers
```docker-compose down```

### Remove images
```docker system prune -a```

### Remove volumes
- list volumes `docker volume ls`
- remove specific volume `docker volume rm [VOLUME NAME]`

### Building images
If you need to build images, you can use (or with --no-cache flag)  

```docker-compose build```

### Access to a docker container
To access eg. backend container, run  
```docker-compose exec backend sh```  
This links the container's bash to your local shell.


