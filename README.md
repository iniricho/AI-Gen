## Overview

Simply Ai chat with Groq API.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```
3. Edit the .env file:
    ```bash
    VITE_GROQ=USE_YOUR_OWN_API_KEY
    ```
4. you can change the models on src/utils/groq.js file:
    ```bash
    import { Groq } from "groq-sdk";

    const GROQ_API = import.meta.env.VITE_GROQ;
    
    const groq = new Groq({
      apiKey: GROQ_API,
      dangerouslyAllowBrowser: true,
    });
    
    export const requestToGrogAI = async (content) => {
        const reply = await groq.chat.completions.create ({
            messages: [
                {
                role: "user",
                content,
            },
        ],
            model: "llama3-8b-8192", ////////CHANGE HERE////////////
        });
        return reply.choices[0].message.content;
    };
    ```
    
## Usage

After installation, you can run the app with the following npm command:

### Run in development Mode:
    npm run dev


Feel free to improve the codes.
