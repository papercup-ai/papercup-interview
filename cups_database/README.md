# Cups database

We have a CSV file with orders of different cups, we would like to parse the file and enter it into our elasticsearch
instance to analyse the data further. 

You can spin out Elasticsearch and Kibana with the provided docker compose file.

    docker-compose up
    
If you do not have docker installed, you can find details [here](https://docs.docker.com/install/).

# Task

- Parse the CSV file (python or Go)
- Insert the data from the CSV into the Elasticsearch instance

# Queries

- Number of orders sold by month
- Details of order with id of 03d7f59b-287f-427e-b483-1c59d799f464  
- Total revenue generated for month of February
