
import React, { useState } from 'react';

/**
 * The Feedback page.
 * Provides a form for users to send messages.
 */
const Feedback: React.FC = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend (e.g., Firebase Firestore).
    // For this MVP, we just log it to the console.
    console.log({
      name,
      state,
      message,
      submittedAt: new Date().toISOString()
    });
    
    // Clear form and show success message
    setName('');
    setState('');
    setMessage('');
    setSubmitted(true);

    // Hide success message after a few seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Feedback & Contact</h1>
      <p className="text-gray-600 mb-6">Have questions or suggestions? Let us know!</p>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        {submitted ? (
          <div className="text-center p-4 bg-primary-light text-primary rounded-md">
            <h3 className="font-bold">Thank you!</h3>
            <p>Your feedback has been received.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={e => setState(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Feedback;
