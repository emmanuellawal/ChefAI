# ChefAI - AI Recipe Recommender & Modifier

ChefAI is an intelligent recipe recommendation and modification application that leverages artificial intelligence to help users create delicious meals based on available ingredients and dietary preferences. The app provides personalized recipe suggestions, allows for recipe modifications, and can even generate appetizing images of the dishes.

## Features

- **AI-Powered Recipe Generation**: Get personalized recipe suggestions based on your ingredients
- **Smart Recipe Modification**: Adapt recipes to your dietary restrictions and preferences
- **Ingredient-Based Search**: Find recipes using ingredients you have on hand
- **Dietary Restriction Filtering**: Filter recipes by various dietary needs (vegan, gluten-free, etc.)
- **Recipe Image Generation**: AI-generated visuals for recipes
- **User Authentication**: Save and manage your favorite recipes
- **Responsive Design**: Beautiful, modern UI that works on all devices

## Technologies Used

### Frontend
- **Next.js 14.1.0**: React framework for production-grade applications
- **React 18.2.0**: UI component library
- **TypeScript**: For type-safe code
- **Tailwind CSS 3.3.0**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Zustand**: Lightweight state management

### Backend & APIs
- **Firebase 10.12.2**: Authentication and data storage
  - Authentication
  - Firestore database
  - Cloud storage
- **OpenAI API**: For recipe generation and modification
  - GPT-4 for recipe text generation
  - DALL-E 3 for recipe image generation
- **Stability AI API**: Alternative image generation service

### Development Tools
- **ESLint & Prettier**: Code quality and formatting
- **PostCSS**: CSS processing and optimization
- **Critters**: CSS optimization for production builds

## AI Integration

ChefAI uses multiple AI models to provide a comprehensive recipe experience:

1. **Recipe Generation (OpenAI GPT-4)**
   - Generates detailed recipes based on user inputs
   - Considers dietary restrictions and preferences
   - Provides step-by-step cooking instructions
   - Suggests ingredient substitutions

2. **Image Generation (DALL-E 3 / Stability AI)**
   - Creates appetizing images of recipes
   - Generates visuals for recipe steps
   - Provides multiple style options for food photography

3. **Natural Language Processing**
   - Understands user queries and preferences
   - Processes ingredient lists and cooking instructions
   - Handles recipe modification requests

## Setup Instructions

### Prerequisites
- Node.js (v18.x or later)
- npm or yarn
- Git

### Environment Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-recipe-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the project root with the following variables:
   ```env
   # Application
   NEXT_PUBLIC_APP_NAME="ChefAI"

   # OpenAI Configuration
   OPENAI_API_KEY="<your-openai-api-key>"

   # Stability AI Configuration
   STABILITY_AI_API_KEY="<your-stability-ai-key>"
   NEXT_PUBLIC_STABILITY_API_HOST="https://api.stability.ai"

   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY="<your-firebase-api-key>"
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="<your-project>.firebaseapp.com"
   NEXT_PUBLIC_FIREBASE_PROJECT_ID="<your-project-id>"
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="<your-project-id>.appspot.com"
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="<your-sender-id>"
   NEXT_PUBLIC_FIREBASE_APP_ID="<your-app-id>"
   ```

   > **Important**: Never commit your actual API keys or sensitive credentials. Always use environment variables and keep your `.env.local` file in `.gitignore`.

### Running the Application

1. Development mode:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. Production build:
   ```bash
   npm run build
   npm start
   # or
   yarn build
   yarn start
   ```

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm start`: Run production server
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Future Improvements

1. **Enhanced AI Features**
   - Recipe video generation
   - Voice-guided cooking instructions
   - Nutritional analysis and recommendations
   - Smart meal planning

2. **User Experience**
   - Collaborative recipe sharing
   - Social features and community
   - Recipe collections and organization
   - Shopping list generation

3. **Technical Enhancements**
   - Progressive Web App (PWA) support
   - Offline functionality
   - Real-time recipe collaboration
   - Advanced search and filtering

4. **Integration & Expansion**
   - Integration with smart kitchen devices
   - Grocery delivery services
   - Multiple language support
   - Recipe scaling and conversion

## License

MIT License - See [LICENSE](LICENSE) for details.

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the project.
