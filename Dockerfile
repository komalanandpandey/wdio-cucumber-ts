FROM ianwalter/puppeteer:latest
WORKDIR /app
ADD . /app

#RUN npm install 

# Run with proxy when run in corp env.
RUN npm install --proxy http://156.30.153.150:9090 --force

CMD npm --version;node --version;npm run tests
