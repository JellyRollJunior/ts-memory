# Features
- Memory Game with animated cards
    - click each tile exactly once to win
    - click a tile two times and you lose
    - clicking a card shuffles the cards
- Memory cards
    - loading animation
    - error loading / broken link design
- Scoreboard & highscore count
- Refresh button on error loading gifs for memory cards
- Error page on invalid routes / unexexpected errors

# Learning outcomes

- First TS project
- Typing in JS
- Typing React component props
- Extending types with `&`
- Generic function return types
    - returning an array with contents shuffled
- Type narrowing function
- Typescript forward refs
- Styling dialog backdrop with tailwind
- ZOD
    - creating primitive schema
    - creating object schema
    - parsing api responses with ZOD
    - parsing api error response with ZOD
    - ZOD default / catch values
    - ZOD transform to modify shape of response object
    - ZOD infer type using schema
- Structuring project for scale
    - barrel file pattern: export file for each component
    - /components for shared UI elements
    - /features for domain UI
    - /layout for page layouts + page layout components
    - /pages for navigatable pages
- Configuring path aliases
    - modify tsconfig.app.json & vite.config.ts
- Vitest
    - Using Vitest with Typescript
    - revisting testing with React
        - mocking functions
        - mocking components
        - userEvent to click elements
        - snapshot tests
- Separating components with multiple responsibilities into container + view 
    - container for fetching data, state ownership, calling domain logic
    - view for rendering UI and handling callback ONLY
    - promotes UI testability
        - when they were 1 component, I had to mock hooks/state/game logic/etc. Now I don't!

# Improvements

- Game tiles
    - loading animation when loading gifs
    - error dead gif animation
- Modal on losing
- Cheat mode
- Refresh button to refetch gifs on error loading gifs
- Structuring project files for scale
- Configure path aliasing to simplify imports

#### TODO

- frontend
    - leaderboard

- backend
    - save winner names
