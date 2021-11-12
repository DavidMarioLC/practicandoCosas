import { useDispatch, useSelector } from "react-redux";
import { filterChange } from "../redux/actions";

const FilterNotes = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handlerFilter = (value) => dispatch(filterChange(value));

  return (
    <>
      <label htmlFor="all">
        <input
          id="all"
          type="radio"
          name="filter"
          checked={filter === "ALL"}
          onChange={() => handlerFilter("ALL")}
        />
        All
      </label>
      <label htmlFor="complete">
        <input
          id="complete"
          type="radio"
          name="filter"
          checked={filter === "COMPLETED"}
          onChange={() => handlerFilter("COMPLETED")}
        />
        Completed
      </label>
      <label htmlFor="incomplete">
        <input
          id="incomplete"
          type="radio"
          name="filter"
          checked={filter === "INCOMPLETE"}
          onChange={() => handlerFilter("INCOMPLETE")}
        />
        Incomplete
      </label>
    </>
  );
};

export default FilterNotes;
