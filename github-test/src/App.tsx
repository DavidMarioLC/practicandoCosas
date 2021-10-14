import './index.css'
import { useState, useEffect } from "react";
import { IRepository } from "./repoInterface";

export default function App() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  const [tsearch, setSearch] = useState<string>("");
  const [valueSelect, setValueSelect] = useState<{ value: string }>({
    value: "pushed"
  });

  //search input
  const todoBySearch = (e: any) => {
    setSearch(e.target.value.toLowerCase());
  };

  //filterByName
  const filterByName = () => {
    return repositories.sort((a, b) => a.name.localeCompare(b.name));
  };

  //filterByLastUpdated
  const filterByLastUpdated = () => {
    return repositories.sort((a,b) =>new Date(a.pushed_at).getTime() - new Date(b.pushed_at).getTime()).reverse();
  };

  //handler selected
  const handlerSelect = (e: any) => {
    setValueSelect({ ...valueSelect, value: e.target.value });

  };

  useEffect(() => {
    // const test = "https://api.github.com/users/davidmariolc/repos?per_page=10&page=1";
   
    const fetchApi = async () => {
      const API_URL: string = "https://api.github.com/users";
      const USERNAME: string = "davidmariolc";
      const NUMBER_ITEM_PER_PAGE: number = 31;
      const ENDPOINT_USER: string = `${API_URL}/${USERNAME}`;
      const ENDPOINT_REPOS: string = `${API_URL}/${USERNAME}/repos?per_page=${NUMBER_ITEM_PER_PAGE}&page=${currentPage}&sort=${valueSelect.value}`;
      const [userResponse, repoResponse] = await Promise.all([
        fetch(ENDPOINT_USER),
        fetch(ENDPOINT_REPOS)
      ]);

      const userData = await userResponse.json();
      const repoData = await repoResponse.json();

      const sizePage = Math.ceil(userData.public_repos / NUMBER_ITEM_PER_PAGE);

      setTotalPage(sizePage);
      setRepositories(repoData);
    };

    fetchApi();
  }, [currentPage,valueSelect]);

  //pagination buttons
  const backPage = () => {
    const page = currentPage - 1;
    if (page < 0) return;
    setCurrentPage(page);
  };

  const nextPage = () => {
    const page = currentPage + 1;
    if (page > totalPage) return;
    setCurrentPage(page);
  };

  //filters repos and render repos
  const filterRepos = repositories.filter(
    (repo: any) => repo.name.indexOf(tsearch) !== -1
  );

  const listItems = filterRepos.map((item, idx) => (
    <pre key={idx}>{JSON.stringify({name:item.name})}</pre>
  ));

  return (
    <div className="App" style={{ color: "white" }}>
      <h1>List repositories</h1>
      <input
        onChange={todoBySearch}
        value={tsearch}
        type="text"
        placeholder="search..."
      />
      <select defaultValue={valueSelect.value}  onChange={handlerSelect}>
      <option value="pushed">Sort</option>
        <option value="pushed">Last updated</option>
        <option value="full_name">name</option>
      </select>
     
      {listItems}
      <div>
        <button onClick={backPage} disabled={currentPage === 1 ? true : false}>
          BACK
        </button>
        <span>
          {currentPage}/{totalPage}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPage ? true : false}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
