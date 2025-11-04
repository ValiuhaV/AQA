# The Cat API - Mocha Integration Tests

- Mocha + Chai + global fetch (Node 18+)
- Integration flow: images → favourites → votes
- 5 tests validate id & url consistency across modules

## Run
1) Add `.env` with API_KEY and BASE_URL=https://api.thecatapi.com/v1
2) npm install
3) npm test