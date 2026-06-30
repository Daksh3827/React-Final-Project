import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  var api = "https://countriesnow.space/api/v0.1/countries"

  // const getData = async () => {
  //   const response = await axios.get(
  //     "https://countriesnow.space/api/v0.1/countries",
  //   );
  //   setData(response.data.data);
  // };

  const getData = async () => {
    await axios.get(api).then((response) => {
      setData(response.data.data);
    });
  }

  return (
    <>
      <section className="my-5 flex flex-col items-center overflow-x-auto ">
        <p className="font-bold text-lg">Click the button below to view Data</p>
        <button onClick={getData} className="p-2 bg-blue-300 rounded-[15px] my-4 cursor-pointer hover:scale-125 hover:text-white">View Data</button>

        <table className="w-[100%] border-2 border-black table-auto">
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="border border-black p-2 ">Sr.</th>
              <th className="border border-black p-2 ">Country</th>
              <th className="border border-black p-2 ">Cities</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 text-black">
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border border-black p-2">{index + 1}</td>
                  <td className="border border-black p-2">{item.country}</td>
                  <td className="border border-black p-2">{item.cities.join(", ")}</td>
                </tr>
              );
            })}
          </tbody>


        </table>

      </section>
    </>
  );
}

export default App;