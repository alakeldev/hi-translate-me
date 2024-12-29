<h1 align="center"> Hi Translate Me App </h1>

## Project Description
Hi Translate Me is a versatile and user-friendly translation application designed to provide instant text and voice translations, breaking down language barriers effortlessly. It leverages the power of Next.js, Tailwind CSS, React, and the ChatGPT-4 API to deliver a seamless and efficient translation experience.

## Features

 - Real-Time Translation: Translate text input into multiple languages instantly.

- Voice Recognition: Input text via voice commands for translation.

- File Upload: Upload text files for translation.

- Language Selector: Choose from a variety of target languages for translation.

- Copy to Clipboard: Easily copy translated text to the clipboard.

- Audio Playback: Listen to the translated text for better understanding.

- Disabled Target Text Area: The target text area is non-interactive to prevent user edits.

## Technologies Used

- Next.js: A React framework for building fast and scalable web applications.

- Tailwind CSS: A utility-first CSS framework for rapid UI development.

- React: A JavaScript library for building user interfaces.

- ChatGPT-4 API: An AI model from OpenAI used for translating text.

## Installation and Setup

Follow these steps to set up the project locally:

#### Clone the Repository:

git clone [<https://github.com/yourusername/hi-translate-me.git>](https://github.com/alakeldev/hi-translate-me.git)


#### Install Dependencies:

- npm install

- Create a .env.local File: Create a .env.local file in the root directory of the project and add your OpenAI API key:


- NEXT_PUBLIC_OPENAI_API_KEY=your-openai-api-key


#### Run the Development Server:

npm run dev

Visit the Application: Open your browser and go to <http://localhost:3000> to see the application in action.

## Usage

- Enter Text: Type the text you want to translate into the source text area.

- Select Language: Choose the target language from the language selector.

- Translate: The translated text will appear in the target text area.

- Voice Input: Use the voice recognition button to input text via speech.

- File Upload: Upload a text file to translate its content.

- Copy and Playback: Copy the translated text to the clipboard or listen to it via the audio playback feature.