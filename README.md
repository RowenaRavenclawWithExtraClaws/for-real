## For Real

For Real is one of a kind mobile-first questionnaire web application. It enables users to answer quickly and seemlessly for a short period of time. you can start using it [here](https://for-real.vercel.app)

## Run locally

Traditional way

- Clone the repository
- Run `npm install` to install dependencies
- Run `npm start`
- Visit `localhost:3000` to see this beauty

The docker way

- Run `docker build --tag questionnaire-docker-image .` to build docker image using the docker file.
- Run `docker run questionnaire-docker-image` to run the built image.
- Visit `localhost:3000` to see this beauty. AGAIN!

## Test

Run `npm test` to see testing results.

## Technologies used

- React.js `^17.0.2`
- Redux `^4.1.2`
- TypeScript `^4.1.2`
- Bootstrap `^5.1.3`

## Architecture

![arch](https://github.com/RowenaRavenclawWithExtraClaws/for-real/blob/main/src/assets/images/arch.png)

## Suggested improvements

- Implement test mockups for the redux store.
- Add sophisticated animation.
