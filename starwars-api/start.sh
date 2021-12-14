#!/bin/bash
export DB_USER=`aws ssm get-parameter --name "DBMasterUser" | jq -r .Parameter.Value`
export PGPASSWORD=`aws ssm get-parameter --name "DBPASS" | jq -r .Parameter.Value`
export DB_HOST=`aws ssm get-parameter --name "DBEndpoint" | jq -r .Parameter.Value`
export DB_PORT=`aws ssm get-parameter --name "DBPort" | jq -r .Parameter.Value`
npm start