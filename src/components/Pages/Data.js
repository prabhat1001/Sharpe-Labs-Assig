import React, { useState, useEffect } from "react";
import axios from "axios";
import PieChart from "../Charts/PieChartComponent";

/**
 * The `Data` function is a React component that fetches data from an API, filters the data based on a
 * condition, and displays the filtered data in a table along with a pie chart.
 * @returns The `Data` component is returning a JSX structure that includes a table displaying filtered
 * data from an API, and a pie chart component. The table displays the ID, Title, and Body of each post
 * that has a user ID of 1. The pie chart displays the number of posts with user ID 1 and the number of
 * other posts.
 */
const Data = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/posts";

  const getData = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Filter posts with user ID of 1
    const filteredPosts = data.filter((post) => post.userId === 1);
    setFilteredData(filteredPosts);
  }, [data]);

  const postsById1 = filteredData.length;
  const totalPosts = data.length;

  const pieChartData = [
    { name: "Posts by User ID 1", value: postsById1, color: "#7a5af5" },
    { name: "Other Posts", value: totalPosts - postsById1, color: "#46424f" },
  ];

  return (
    <div className="w-full h-full py-[5vh] bg-[#121212]">
      <div className="relative w-[90vw] border border-[#3f3f3f] h-auto mx-auto overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rounded-lg  rtl:text-right text-white ">
          <thead className="text-l text-white uppercase bg-[#575757] ">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-3 py-3">
                Title
              </th>
              <th scope="col" class="px-3 py-3">
                Body
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((post) => (
              <tr
                key={post.id}
                class="bg-[#282828] border-b border-[#3f3f3f] hover:bg-[#2f2b3a]"
              >
                <td class="px-6 py-4">{post.id}</td>
                <td class="px-3 py-4">{post.title}</td>
                <td class="px-3 py-4">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border border-[#3f3f3f] rounded-3xl w-[90vw] my-[10vh] py-[5vh] lg:pb-[5vh] justify lg:justify-around items-center mx-auto flex flex-col sm:flex-row overflow-hidden ">
        <h1 className="text-center lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-[#8b8b8b] to-[#121212] md:text-6xl lg:w-[40vw] md:w-[50vw] text-4xl">
          Pie Chart
        </h1>
        <PieChart data={pieChartData} />
      </div>
    </div>
  );
};

export default Data;
