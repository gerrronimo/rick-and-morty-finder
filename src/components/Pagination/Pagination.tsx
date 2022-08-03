import React, { FC, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../modules/hooks";
import {
  getLastPage,
  getPage,
  getSearchParams,
  loadCharacters,
  setPage,
} from "../../modules/characters/charactersSlice";

import "./style.css";

export const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(getPage);
  const lastPage = useAppSelector(getLastPage);
  const params = useAppSelector(getSearchParams);

  const pages: (string | number)[] = useMemo(() => {
    const result: (string | number)[] = [];

    result.push(1);
    if (1 + 1 < currentPage - 1) result.push("...");
    if (currentPage - 1 > 1) result.push(currentPage - 1);
    result.push(currentPage);
    if (currentPage + 1 < lastPage) {
      result.push(currentPage + 1);
      result.push("...");
    }
    result.push(lastPage);

    return result;
  }, [currentPage, lastPage]).filter(function (item, pos, self) {
    if (typeof item === "number") {
      return self.indexOf(item) === pos;
    } else {
      return "null";
    }
  });

  const openPage = useCallback(
    (page: number) => {
      dispatch(loadCharacters({ ...params, page }));
    },
    [dispatch, params]
  );

  const renderPage = useCallback(
    (page: string | number, idx: number) => {
      if (typeof page === "number") {
        const isCurrentPage = page === currentPage;

        return (
          <div
            className={`${isCurrentPage && "current"} page`}
            key={idx}
            onClick={() => {
              openPage(page)
              dispatch(setPage(page));
            }}
          >
            <p>{page}</p>
          </div>
        );
      } else {
        return (
          <div className="separator" key={idx}>
            <p>{page}</p>
          </div>
        );
      }
    },
    [currentPage, openPage, dispatch]
  );

  return (
    <div className="pagination">
      {pages.map((page, idx) => renderPage(page, idx))}
    </div>
  );
};
