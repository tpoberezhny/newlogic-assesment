import React from "react";
import styles from "../../styles";

function Pagination() {
  return (
    <nav className="flex mt-8 w-full items-center" aria-label="Pagination">
      <div className="flex justify-center w-full">
        <button
          className="px-6 py-3 ml-[180px] bg-blue-500 text-white rounded-lg"
          style={styles.textBase}
          aria-label="Načíst další"
        >
          Načíst další
        </button>
      </div>
      <ul className="flex gap-2 items-center ml-auto">
        <li>
          <a
            href="#"
            aria-current="page"
            className="text-blue-500"
            style={styles.paginationEl}
          >
            1
          </a>
        </li>
        <li>
          <a href="#" style={styles.paginationEl}>
            2
          </a>
        </li>
        <li>
          <a href="#" style={styles.paginationEl}>
            3
          </a>
        </li>
        <li>
          <span style={styles.paginationEl} aria-hidden="true">
            ...
          </span>
        </li>
        <li>
          <a href="#" style={styles.paginationEl}>
            56
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
