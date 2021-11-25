### Get Repos Microservice

## Table of Contents
* [Introduction](#introduction)
* [Technologies](#technologies)
* [Setup](#setup)
* [Launch](#launch)
* [Expected Output](#expected-output)

## Introduction
 A simple node.js server to get the latest ranked github's repos.
 The project focuses on the last repos ranked.

## Technologies
 * npm v8.1.3
 * node v16.13.0
 * express v4.17.1
 * axios v0.24.0

## Setup
To run this project, install it locally using npm:

```
$ cd ../GetReposAPI
$ npm install
$ npm start
```

## Launch
To launch this project, in your npm console:

```
& node server.js
```
In your browser, go to: http://localhost:3000/repo/language

## Expected Output
A list of languages used by the latest starred repos during the last day.
Each language has the list of repos used it and the total number of repos.

In case of no language for a repo or more, it/they will be grouped under
"No Language" item.

In case of error, a simple message will appear to the user but a detailed one will be shown in the console.
