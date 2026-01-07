<h1 align="center">Sailor Moon Memory (TS Version)</h1>
<h3 align="center">Play a Sailor Moon themed game of memory <a href=''>here</a>!</h3>
<p align="center">
    <img align="center" width="" alt="" src="">
</p>

## Features

-   Memory Game with animated cards
    -   click each tile exactly once to win
    -   click a tile two times and you lose
    -   clicking a card shuffles the cards
-   Memory cards
    -   loading animation
    -   error loading / broken link design
-   Scoreboard & highscore count
-   Leaderboard
-   Refresh button on error loading gifs for memory cards
-   Error page on invalid routes / unexexpected errors

## Stack

-   Client
    -   React, Typescript, Vite
    -   React router, Zod, Vitest
    -   TailwindCSS, Motion
-   Server
    -   Express, NodeJS, Typescript
    -   PrismaORM
    -   CORS, Zod, Vitest, Supertest
-   Shared
    -   Typescript

## Endpoints

| Method | URI      | Function         | Body (inputs)             | Outputs                    | Notes |
| ------ | -------- | ---------------- | ------------------------- | -------------------------- | ----- |
| GET    | /winners | Retrieve winners |                           | [...winners]               |       |
| POST   | /winners | Create winner    | name: { min: 1, max: 16 } | winner: { name, datetime } |       |

## Learning outcomes

-   Architecture
    -   Configure Monorepo with client / server / shared packages
    -   Shared for types, DTOs, enums, constants
    -   Configure base tsconfig for each pacakge to use
-   Client
    -   First TS project
    -   Typing in JS
    -   Typing React component props
    -   Extending types with `&`
    -   Generic function return types
        -   returning an array with contents shuffled
    -   Type narrowing function
    -   Typescript forward refs
    -   Styling dialog backdrop with tailwind
    -   ZOD
        -   creating primitive schema
        -   creating object schema
        -   parsing api responses with ZOD
        -   parsing api error response with ZOD
        -   ZOD default / catch values
        -   ZOD transform to modify shape of response object
        -   ZOD infer type using schema
    -   Structuring project for scale
        -   barrel file pattern: export file for each component
        -   /components for shared UI elements
        -   /features for domain UI
        -   /layout for page layouts + page layout components
        -   /pages for navigatable pages
    -   Configuring path aliases
        -   modify tsconfig.app.json & vite.config.ts
    -   Vitest
        -   Using Vitest with Typescript
        -   revisting testing with React
            -   mocking functions
            -   mocking components
            -   userEvent to click elements
            -   snapshot tests
            -   mocking default imports & libraries!
    -   Separating components with multiple responsibilities into container + view
        -   container for fetching data, state ownership, calling domain logic
        -   view for rendering UI and handling callback ONLY
        -   promotes UI testability
            -   when they were 1 component, I had to mock hooks/state/game logic/etc. Now I don't!
-   Server
    -   Learned I don't need to load dotenv more than once (oops!)
        -   Learned I can import 'dotenv/config' instead of import 'dotenv' (wow!)
    -   Moving prisma config & folders out of src for cleaner project structure
    -   Typing / Extending classes in TS
    -   Typing express middleware
        -   Typing request body
    -   Validating request body input with ZOD
    -   "Moving all business logic into services" model
        -   controllers are for receiving inputs & delegating to services with business logic, then responding
    -   Denoting intentionally unused params in express middleware
    -   Testing routes in TS
        -   configuring path aliasing in Vitest tests
        -   mocking function return values dynamically

## Improvements vs [Original in React-JS](https://github.com/JellyRollJunior/sailor-moon-memory)

-   Game tiles
    -   loading animation when loading gifs
    -   error dead gif animation
-   Modal on losing
-   Cheat mode
-   Refresh button to refetch gifs on error loading gifs
-   Structuring project files for scale
-   Configure path aliasing to simplify imports
-   Site icons
-   Leaderboard
    -   Backend to save leaderboard values
-   Tests for entire suite!

## Yapping

```ts
// I wrote a cool generic that removes the ID key from an object
// Took me a long time to figure this out in TS! First challenging TS generic usage
// Didn't end up using it in the final build so documenting here for me 8)
const omitId = <T extends { id: unknown }>(input: T): Omit<T, "id"> => {
    const { id, ...filtered } = input;
    return filtered;
};
```

#### TODO

-   server
    -   verify shared types match schemas

-   client

    -   fetch winners
    -   post winners
    -   move error to errors folder
        -   change responseError to class declaration (easier for typing)
    -   don't reshuffle on closing modals
    -   refactor business logic out of request gifs -> separate into
        -   request
        -   fetch gifs
    -   response error => class based
    -   get rid of APIError? I see no use for this tbh
