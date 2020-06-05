import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountriesData(await fetchCountries());
    };
    fetchAPI();
  }, [setCountriesData]);
  return (
    <div className={styles.divFormControl}>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {countriesData.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};
export default CountryPicker;
