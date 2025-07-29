# Backend Development with FastAPI
## Technologies Used:

- FastAPI: For building the API.
- OpenAI API: As the LLM.
- Uvicorn: ASGI server to run FastAPI.
- Pydantic: For data validation and response structuring.
- python-dotenv: For environment variable management.

### Installation:

- Ensure Python 3.8+ is installed.
- Navigate to the backend/ folder:

```code
cd backend
```

### Create and activate a virtual environment:

```code
python -m venv venv
```
```code
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### Install dependencies:

```code
pip install fastapi uvicorn openai python-dotenv
```

### Generate requirements.txt:

```code
pip freeze > requirements.txt
```

### Create main.py with the FastAPI application and OpenAI integration

### Create .env.example:
```code
OPENAI_API_KEY=your_api_key_here
```

### Copy .env.example to .env and add your OpenAI API key.

## Run the Backend:

```code
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

- Access Swagger docs at http://localhost:8000/docs.