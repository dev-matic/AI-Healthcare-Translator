# AI Translator

AI Translator is a medical translation web application designed to bridge language gaps in healthcare settings. It provides fast, reliable translations between multiple languages, supporting both text and voice inputs, with features to save translations and listen to translated text via text-to-speech.

## Features

- Translate text between multiple languages including English, Spanish, French, German, Chinese, Japanese, and more.
- Voice recording input for English source text with automatic transcription.
- Text-to-speech playback of translated text.
- Save translations for future reference.
- Clean and responsive user interface built with React and Tailwind CSS.
- Authentication support via Clerk.
- Serverless backend powered by Next.js API routes.
- Uses Google Generative AI for both audio transcription and text translation.
- Serverless database integration with Neon.

## Technologies Used

- [Next.js](https://nextjs.org) - React framework for server-side rendering and API routes.
- [React](https://reactjs.org) - UI library.
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework.
- [Clerk](https://clerk.com) - Authentication and user management.
- [Google Generative AI](https://developers.google.com/ai) - AI models for transcription and translation.
- [Neon](https://neon.tech) - Serverless Postgres database.
- [Lucide React](https://lucide.dev) - Icon library.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ai-translator
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and add your Google Generative AI API key:

```
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Usage

- Select the source and target languages from the dropdown menus.
- Enter text to translate or use the voice recorder to input English audio.
- Click the "Translate" button to get the translated text.
- Use the save button to save translations.
- Click the speaker icon to listen to the translated text via text-to-speech.
- Use the clear button to reset input and output fields.

## API

- **Audio Transcription:** The app sends audio files to a Next.js API route which uses Google Generative AI to transcribe audio to text.
- **Text Translation:** Text translation requests are handled server-side using Google Generative AI models to translate between languages.

## Deployment

The app can be easily deployed on [Vercel](https://vercel.com), the platform from the creators of Next.js.

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
