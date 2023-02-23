# Byaparis-MarketPlace

It is a platform for B2B buyers and sellers(Who is Wholesaler), primarily intended to:

1. Allow sellers to make their products publicly accessible
1. Allow buyers to place orders, or make inquiries
1. Allow buyers to easily track balances/orders/payments across all sellers.
1. Allow sellers to promote their business and reach new buyers.

# Running Server

1. Using Docker Compose

   > docker-compose up --build --force-recreate
   > docker-compose -f docker-compose-production.yml up --build --force-recreate

2. Using Docker Command

   > docker build . -t app-image-name and run docker run -d -p 3000:3000 app-image-name

3. Without using Docker
   > npm run dev

# Docker and Docker Compose useful command

> docker images (Check all docker images)
> docker ps (Check active containers)
> docker network ls
> docker exec -it -u root e4b(imageID) sh

> docker-compose ps
> docker-compose build --help
> docker-compose down (To stop container)
