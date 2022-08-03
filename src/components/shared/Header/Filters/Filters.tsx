import React, { FC, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../../modules/hooks";
import {
  getGender,
  getSearchParams,
  getStatus,
  loadCharacters,
  setGender,
  setPage,
  setStatus,
} from "../../../../modules/characters/charactersSlice";
import { Select } from "./Select";

import "./style.css";

export const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const gender = useAppSelector(getGender);
  const status = useAppSelector(getStatus);
  const searchParams = useAppSelector(getSearchParams);

  const onChangeSearchGender = useCallback(
    (gender: string): void => {
      dispatch(setPage(1));
      dispatch(loadCharacters({ ...searchParams, gender, page: 1 }));
      dispatch(setGender(gender));
    },
    [dispatch, searchParams]
  );

  const onChangeSearchStatus = useCallback(
    (status: string): void => {
      dispatch(setPage(1));
      dispatch(loadCharacters({ ...searchParams, status, page: 1 }));
      dispatch(setStatus(status));
    },
    [dispatch, searchParams]
  );

  const genderOptions = useMemo(
    () => [
      {
        value: "",
        label: "Gender",
      },
      {
        value: "male",
        label: "Male",
      },
      {
        value: "female",
        label: "Female",
      },
      {
        value: "unknown",
        label: "Unknown",
      },
    ],
    []
  );

  const statusOptions = useMemo(
    () => [
      {
        value: "",
        label: "Status",
      },
      {
        value: "alive",
        label: "Alive",
      },
      {
        value: "dead",
        label: "Dead",
      },
      {
        value: "unknown",
        label: "Unknown",
      },
    ],
    []
  );

  return (
    <div className="filters">
      <Select
        value={gender}
        callback={onChangeSearchGender}
        options={genderOptions}
      />
      <Select
        value={status}
        callback={onChangeSearchStatus}
        options={statusOptions}
      />
    </div>
  );
};
