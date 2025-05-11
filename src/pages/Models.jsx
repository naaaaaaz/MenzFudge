// src/pages/Models.jsx
const Models = () => {
  const models = [
    { name: 'Model A', img: '/shirt1.png' },
    { name: 'Model B', img: '/shirt2.png' },
    { name: 'Model C', img: '/shirt3.png' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Vote for Your Favorite Design</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {models.map((model, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded shadow">
            <img src={model.img} alt={model.name} className="w-full h-48 object-contain mb-2" />
            <h3 className="text-xl font-bold">{model.name}</h3>
            <button className="mt-2 px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded">Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
