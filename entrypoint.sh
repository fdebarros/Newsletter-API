#!/bin/bash

echo "Starting Server"
npm run start
&& mongod
echo "Starting Database"