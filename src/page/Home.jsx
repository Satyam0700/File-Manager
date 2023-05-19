import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [category, setCategory] = useState([]);

  const apiDock = async () => {
    await fetch("https://646312614dca1a661353d0ee.mockapi.io/api/Files", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };
  const apiDock2 = async () => {
    await fetch("https://646312614dca1a661353d0ee.mockapi.io/api/Category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  useEffect(() => {
    apiDock2()
    apiDock();
  }, []);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="bg-[#EEF3FA] ml-[226px] py-10 px-16 w-[84vw] h-[91.9vh]">
        <div className="flex justify-end">
          <Search />
        </div>
        <div className="flex md:flex-row flex-col justify-between mt-5">
          <div>
            <div className="flex items-center gap-5">
              <h2 className="text-[#404965] font-bold text-lg">CATEGORIES</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#404965]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-[#404965] font-bold text-lg mt-3">
                {category[0].Name}
              </h2>
              {category[0].Labels.map((lab) => (
              <div className="mt-1">
                <div>
                  <input type="checkbox" id={lab.id} name="" value="" />
                  <label htmlFor={lab.id}>{lab.Name}</label>
                </div>
              </div>
              ))}             
              <h2 className="text-[#404965] font-bold text-lg mt-3">
                {category[1].Name}
              </h2>
              {category[1].Labels.map((lab) => (
              <div className="mt-1">
                <div>
                  <input type="checkbox" id={lab.id} name="" value="" />
                  <label htmlFor={lab.id}>{lab.Name}</label>
                </div>
              </div>
              ))} 
            </div>
          </div>
          <div className="bg-white max-w-fit px-6 rounded-md shadow-md py-4">
            <p className="text-[#404965] font-bold text-base">All items</p>
            <div className="mt-5">
              <table>
                <thead className="mt-3">
                  <tr className="px-3 py-10 shadow-sm">
                    <th>
                      <input type="checkbox" id="n" name="" value="" />
                      <label
                        htmlFor="n"
                        className="text-[#576694] uppercase text-sm pb-2 font-extrabold"
                      >
                        Name
                      </label>
                    </th>
                    <th className="pl-10 pb-2 uppercase  text-sm text-[#576694] font-extrabold">
                      Owner
                    </th>
                    <th className="pl-10 pb-2 uppercase  text-sm text-[#576694] font-extrabold">
                      labels
                    </th>
                    <th className="pl-10 pb-2 uppercase  text-sm text-[#576694] font-extrabold">
                      type
                    </th>
                    <th className="pl-10 pb-2 uppercase text-sm  text-[#576694] font-extrabold">
                      modified
                    </th>
                    <th className="pl-10 pb-2 uppercase  text-sm text-[#576694] font-extrabold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {users.map((user) => (
                    <tr className="shadow-sm">
                      <th>
                        <input type="checkbox" id={user.id} name="" value="" />
                        <label
                          htmlFor={user.id}
                          className="text-[#404965] pt-3 pb-3 font-bold"
                        >
                          <img
                            src={user.file}
                            className="w-10 rounded-md"
                            alt=""
                          />
                          {user.Name}
                        </label>
                      </th>
                      <th className="pl-10 pt-3 pb-3  text-[#7C8DC1] font-semibold">
                        <img
                          src={user.Owner}
                          className="w-8 rounded-full"
                          alt=""
                        />
                      </th>
                      <th className="pl-10 pt-3 pb-3 text-[#7C8DC1] font-semibold">
                        Label 1
                      </th>
                      <th className="pl-10 pt-3 pb-3 text-[#7C8DC1] font-semibold">
                        {user.Type}
                      </th>
                      <th className="pl-10 pt-3 pb-3 text-[#7C8DC1] font-semibold">
                        {new Date(user.ModifietAt).toLocaleString().slice(0, 9)}
                      </th>
                      <th className="flex items-center pl-10 pt-6 cursor-pointer pb-3 gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-[#7C8DC1]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-[#7C8DC1]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
