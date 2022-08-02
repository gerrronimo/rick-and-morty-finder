import React, {FC} from 'react';
import './style.css';

export const Filters: FC = () => {
  return (
    <div className="filters">
      <select name="gender" id="gender-select" className="filter-select">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="unknown">Unknown</option>
      </select>

      <select name="status" id="status-select" className="filter-select">
        <option value="">Status</option>
        <option value="male">Alive</option>
        <option value="female">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  )
}
