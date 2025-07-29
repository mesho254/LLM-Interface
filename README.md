# LLM Interface

A responsive web application that allows users to interact with a Large Language Model (LLM) via a modern interface.

## Prerequisites
- Python 3.8+
- Node.js 18+
- OpenAI API Key

## Setup Instructions

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
## Create and activate a virtual environment:

```code
python -m venv venv
```
```code
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

## Install dependencies:
```code
pip install -r requirements.txt
```
## Copy .env.example to .env and add your OpenAI API key:
```code
OPENAI_API_KEY=your_api_key_here
```

### Run the server:
```code
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

## Frontend
- Navigate to the frontend directory:
```code
cd frontend
```

### Install dependencies:
```code
npm install
```

### Run the development server:
```code
npm run dev
```

- Open http://localhost:3000 in your browser.


# LLM Integration
- The backend uses OpenAI's gpt-3.5-turbo model.
- User questions are sent as {"role": "user", "content": "<question>"} in the messages parameter.
  
# Notes
- Ensure the backend is running before starting the frontend.
- Security measures are disregarded as per the project scope.

  
## Test the Application
- Start the backend server.
- Start the frontend server.
- Open http://localhost:3000.
- Type a question (e.g., "What is the capital of France?") and submit.
- Verify the response appears, loading state works, and history updates.


## Push to GitHub

### Initialize Git:
```code
git init
git add .
git commit -m "Initial commit"
```
### Create a repository on GitHub and push:
```code
git remote add origin <your-repo-url>
git push -u origin main
```

## Notes
- Prompt Engineering: The backend sends the user’s question directly to OpenAI as a user message, keeping it simple yet effective.
- Optional Bonus: The history feature is implemented using React state for simplicity.



# FRONTEND

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
