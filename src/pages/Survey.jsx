// src/pages/Survey.jsx
import { useState } from 'react';

const Survey = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Style, Your Say</h2>
      {submitted ? (
        <p className="text-green-400">Thanks for submitting the survey!</p>
      ) : (
        <form
          action="https://formspree.io/f/mbloakay"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-4"
        >
          <input
            className="w-full p-2 rounded bg-gray-800 text-white"
            type="text"
            name="tshirt-preference"
            placeholder="What do you look for in a t-shirt?"
            required
          />
          <select
            name="fit"
            className="w-full p-2 rounded bg-gray-800 text-white"
            required
          >
            <option value="">Preferred Fit</option>
            <option value="slim">Slim</option>
            <option value="regular">Regular</option>
            <option value="oversized">Oversized</option>
          </select>
          <input
            type="email"
            name="email"
            className="w-full p-2 rounded bg-gray-800 text-white"
            placeholder="Your email (optional)"
          />
          <button
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Survey;
