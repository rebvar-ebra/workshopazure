import React, { useState } from 'react';
import Eventdetail from './Eventdetail/Eventdetail';

function Events({ data }) {
  const [selected, setSELECTED] = useState();

  return (
    <>
      {selected ? (
<Eventdetail event={selected} />        
      ) : (
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  id
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Description
                </th>
                <th scope="col" class="px-6 py-3">
                  Image
                </th>
                <th scope="col" class="px-6 py-3">
                  Reviews
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr
                  onClick={() => setSELECTED(item)}
                  key={i}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </th>
                  <td class="px-6 py-4">{item.name}</td>
                  <td class="px-6 py-4">{item.description}</td>
                  <td class="px-6 py-4">
                    <img src={item.imageBase64String} alt="" />
                  </td>
                  <td class="px-6 py-4">
                    
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Events;
