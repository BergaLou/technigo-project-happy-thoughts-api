# Happy Thoughts API

This project is part of my education where the goal was to build a full-stack project with its own API that communicates with a database.

- About the project
  The app is a "board for happiness" where users can post short, positive messages and like other people's thoughts. The messages are permanently saved in a database so that they are visible to everyone who visits the page.

- My process
  I have worked with React for the frontend (an earlier other project) and Node.js/Express for the backend. For data storage I used MongoDB.

- Challenge
  The hardest part was connecting my local development environment with the cloud service Render and ensuring that the environment variables (MONGO_URL) were handled securely.

- Solution
  By using process.env.PORT and process.env.MONGO_URL I was able to separate my code from sensitive information, which made the app stable and safe to run live.

# If I had more time...

...I would like to add

- Pagination (so that the app doesn't load all the messages at once when the list gets long).

- A "loading spinner" so the user sees that something is happening when they press the send button.

- Ability to delete their own thoughts.

## View it live

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```
