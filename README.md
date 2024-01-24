| Tech     | Backend                 |
| -------- | ----------------------- |
| Language | Javascript / Typescript |
| Role     | Senior / Semi-Senior    |

## Project Structure

    service-template/
    ├── __test__/
    │   ├── src/
    │   |   ├── health/
    |   |   ├── utils/
    ├── src/
    │   ├── health/
    │   ├── utils/
    │   ├── app.ts
    │   ├── db.ts
    │   └── server.ts
    .gitignore
    Dockerfile
    jest.config.json
    package.json
    README.md
    tsconfig.json
    tsconfig.lint.json

#### Directories:

- `__test__/ `: Main folder to tests.
- `__test__/health `: Groups and contains all the tests referred to the health check.
- `__test__/utils `: Contains all test to utils files.
- `src/` : Source code directory.
- `src/health `: Contains controller and routes for health.
- `src/utils `: Contains files with multiple helper functions.

#### Files:

- `app.ts` : Contains the import and definition of the routes to use.
- `db.ts` : Database configuration file.
- `server.ts` : Main application file.
- `package.json` : Project metadata and dependencies.
- `.gitignore` : Specifies files and directories to be ignored by version control.
- `README.md` : Documentation file (you are reading it!).
- `tsconfig.json` : JSON with all working settings for TypeScript transpiler.
- `tsconfig.lint.json` : JSON with all the settings required for using TypeScript with ESLint.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run Tests

```bash
npm run test
```

### Run the server

#### Locally

The easiest way to run the application is by doing it as a standalone Node process in the host computer you usually use to develop. Just run the following:

```bash
npm run dev
```

## Instructions

### Project: URL Shortener Exercise

This exercise aims to implement a URL Shortener API that could eventually be invoked by web apps or even other APIs similar to bitly, TinyURL, etc.

_What's a URL Shortener?_
A URL shortener is a tool that takes a long web address (URL - example: `https://bolavip.com/ar/futbolargentino/el-fixture-de-la-copa-de-la-liga-2024-cuando-se-juega-el-superclasico-y-la-insolita-situacion-de-riestra-20231226-BAR-99677.html`) and condenses it into a shorter, more manageable link (`https://{somehost}/{shortSlug}`) that redirects to the original and supposedly longer URL.

The shortened URLs redirect anyone who clicks on the short link to the original, longer URL.

Although this project is small in scope, it is a great opportunity for you to show off your coding skills, teamwork, analytic thinking, attention to detail, testing, and coding style, among others.

**Instructions**

- The Coding Test takes a 1:30 hours max
  - 0:10 for the candidate to read and understand this readme
  - 0:10' for Q&A
  - 1:10 for coding and feedback
- It's recommended to use the provided skeleton to avoid writing boilerplate code
- Use your preferred IDE.
- The solution must be written in Typescript / Node 18+
  The "Easy" way to switch to Node 18 is to install nvm and run the command nvm in a new terminal in the `client` or `server` directories before running any `node` or `npm` commands in that terminal.
- No AI can be used to write code
- You need to share your full-screen
- You can Google anything

#### Functional and Non-Functional Requirements:

#### Must Have - Mandatory

- The API should be able to create, update, and retrieve simplified URLs.
- The generated link should be short enough to be easily copied and pasted into applications or social networks (e.g., X, Facebook, etc.) where the characters are limited.
- When users submit a URL, they should respond with a simplified URL (e.g., `http://localhost:8080/slugs/{slug}`). The format method and payload of slug generation is up to your discretion.
- When a user navigates to a shortened URL that they have been provided by the app (e.g., `http://localhost:8080/slugs/{slug}`), they should be redirected to the original URL that yielded that short URL (e.g. `https://bolavip.com/ar/futbolargentino/el-fixture-de-la-copa-de-la-liga-2024-cuando-se-juega-el-superclasico-y-la-insolita-situacion-de-riestra-20231226-BAR-99677.html`). Proper status code should be given in each response. But again, the request's format method and payload response is up to your discretion.
- Capacity Estimation and Constraints: Our system will be read-heavy. There will be lots of redirection requests compared to new URL shortenings. Let's assume a 100:1 ratio between read and write.

#### Nice To Have

- Validate the URL during the creation of the short URL. If the provided URL does not return 200 OK, then It must throw an error during the creation of the shortened URL.
- Count the number of hits for the shorts URLs. Every time there is a inovaction to the resolve endpoint of the short URL, there must be an increment in the Shourt URL hits counter.

#### Considerations:

- You can solve this exercise with an in-memory database. The skeleton provide a SQLite datasource.

#### Evaluation Criteria

- **Completeness** - Does your submission meet the Application Requirements and Deliverables specified above?
- **Testing** - evaluate the use of test coverage to allow for iterative development (NICE TO HAVE)
- **Ease of setup** - how easy was it for the Reviewer to set up and run your app?
- **Technical design** - Separation of concerns, adherence to certain 12-factor App principles, knowledge of backend frameworks, security concerns, etc.
