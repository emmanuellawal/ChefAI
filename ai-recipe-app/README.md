# ChefAI - AI Recipe Recommender & Modifier

A Next.js application that suggests and modifies recipes based on user-provided ingredients and preferences, powered by AI.

## Features

*(Placeholder: To be filled in as features are developed)*

- Ingredient-based recipe generation
- Dietary restriction and cuisine preference filtering
- AI-powered recipe modification
- Saving favorite recipes (Local Storage / Cloud)
- AI-generated recipe images

## Tech Stack

- Next.js (React framework)
- TypeScript
- Tailwind CSS
- OpenAI API (or similar for AI)
- Zustand (for state management, optional)
- Vercel (for deployment)

## Project Structure

*(Placeholder: Brief overview of the main directories, can be detailed later)*

- `src/app/`: Next.js App Router, pages and layouts
- `src/components/`: Reusable UI components
- `src/lib/`: Helper functions, AI clients, utility services
- `src/hooks/`: Custom React hooks
- `src/store/`: Global state management (if used)
- `src/types/`: TypeScript definitions

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

### Environment Variables

Create a `.env.local` file in the root of the `ai-recipe-app` directory by copying the example file:

```bash
cp .env.local.example .env.local
```

Then, populate `.env.local` with your API keys and other environment-specific settings:

```env
OPENAI_API_KEY="YOUR_OPENAI_API_KEY_HERE"
NEXT_PUBLIC_APP_NAME="ChefAI"
# Add other variables as needed
```

**Note:** The `OPENAI_API_KEY` is required for AI features to work. The `NEXT_PUBLIC_APP_NAME` is used as the application display name.

### Installation

1.  Clone the repository (if applicable, or navigate to the project directory if already set up).
2.  Navigate to the application directory:
    ```bash
    cd ai-recipe-app
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running the Development Server

```bash
npm run dev
# or
# yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the code using ESLint.
- `npm run format`: Formats the code using Prettier.

## AI Integration

*(Placeholder: Details about the AI model, prompt engineering, and how it interacts with the app.)*

## Deployment

*(Placeholder: Instructions or link to deployed application on Vercel/other platform.)*

## Contributing

*(Placeholder: Guidelines for contributing to the project, if open for contributions.)*

## License

*(Placeholder: Specify project license, e.g., MIT.)*
