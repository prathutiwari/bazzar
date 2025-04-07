import React, { useState } from 'react';

const stores = [
  {
    id: 1,
    name: 'Seed World - Area Name',
    address: 'Shop 12, Area Name, City Name',
    city: 'City Name',
    pincode: '400058',
    distance: '2.4 km',
  },
  {
    id: 2,
    name: 'Seed World - Area Name',
    address: 'Shop 12, Area Name, City Name',
    city: 'City Name',
    pincode: '400053',
    distance: '2.4 km',
  },
  {
    id: 3,
    name: 'Seed World - Area Name',
    address: 'Shop 12, Area Name, City Name',
    city: 'City Name',
    pincode: '400050',
    distance: '2.4 km',
  },
  {
    id: 4,
    name: 'Seed World - Area Name',
    address: 'Shop 12, Area Name, City Name',
    city: 'City Name',
    pincode: '400358',
    distance: '2.4 km',
  },
  {
    id: 5,
    name: 'Seed World - Area Name',
    address: 'Shop 12, Area Name, City Name',
    city: 'City Name',
    pincode: '403058',
    distance: '2.4 km',
  },
  {
    id: 6,
    name: 'Seed World - Area Name',
    address: 'Shop 12, Area Name, City Name',
    city: 'City Name',
    pincode: '403258',
    distance: '2.4 km',
  }
];

const StoreLocator = () => {
  const [query, setQuery] = useState('');

  const filteredStores = stores.filter(
    (store) =>
      store.city.toLowerCase().includes(query.toLowerCase()) ||
      store.pincode.includes(query)
  );

  return (
    <div className="container mx-auto px-4 mt-10 max-w-4xl mb-10">
      <h1 className="font-semibold text-[25px] md:text-[45px] mb-7 text-center text-black">
        Locate Us
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by city or pincode..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {filteredStores.length > 0 ? (
          filteredStores.map((store) => (
            <div key={store.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-gray-800">{store.name}</h2>
              <p className="text-gray-600">{store.address}</p>
              <p className="text-sm text-gray-500">City: {store.city} | Pincode: {store.pincode}</p>
              <p className="text-sm text-gray-500 mt-1">~ {store.distance} away</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No stores found for this search.</p>
        )}
      </div>
    </div>
  );
};

export default StoreLocator;
