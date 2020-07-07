# What image do you want to start building on?
FROM node:10.21.0-jessie

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

COPY . /src/app
# What port will the container talk to the outside world with once created?
EXPOSE 27017

# How do you start your app?
CMD [ "node", "dynamicseed.js"]