'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface QueryForm {
  question: string;
}

interface HistoryItem {
  question: string;
  answer: string;
}

export default function Home() {
  const { register, handleSubmit, reset } = useForm<QueryForm>();
  const [response, setResponse] = useState<string>('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onSubmit = async (data: QueryForm) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:8000/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      const result = await res.json();
      setResponse(result.answer);
      setHistory((prev) => [...prev, { question: data.question, answer: result.answer }]);
      reset();
    } catch (err) {
      setError('An error occurred while fetching the response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">LLM Interface</h1>
        
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              {...register('question', { required: true })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y min-h-[120px] mb-4"
              placeholder="Type your question here..."
            />
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-md text-white font-semibold ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Response Section */}
        {response && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Response:</h2>
            <div className="whitespace-pre-wrap text-gray-700">{response}</div>
          </div>
        )}

        {/* History Section */}
        {history.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">History</h2>
            {history.map((item, index) => (
              <div key={index} className="mb-4 last:mb-0 border-b pb-4 last:border-b-0">
                <p className="text-gray-700"><strong>Question:</strong> {item.question}</p>
                <p className="text-gray-700 whitespace-pre-wrap"><strong>Answer:</strong> {item.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}