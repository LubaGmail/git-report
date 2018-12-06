# GIT Report in TypeScript

## Install
    mkdir git-report
    npm init
    tsc --init
    mkdir src
    mkdir out
    npm i request lodash --save
    npm i --save-dev @types/request @types lodash

## Config
    tsconfig.json
    "outDir": "./out",                        /* Redirect output structure to the directory. */
    "rootDir": "./src", 

    package.json
    "start": "tsc | node out/index.js",

## Start
    npm start

## Resources
    https://api.github.com/users

    https://api.github.com/users/mojombo




