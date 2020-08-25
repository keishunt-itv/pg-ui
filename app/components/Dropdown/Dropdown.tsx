import React, { ReactElement, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {fetchAllRegions, fetchCIData} from '../../api/fetchCIData';

const useStyles = makeStyles((theme: { spacing: (arg0: number) => any }) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Dropdown(): ReactElement {
  const classes = useStyles();

  const [region, setRegion] = useState('');
  const [regionNames, setRegionNames] = useState(['']);
  const regionNamesMapped = (regionName: string) => (
    <MenuItem key={regionName} value={regionName}>
      {regionName}
    </MenuItem>
  );
  const handleChange = (event: any) => {
    setRegion(event.target.value);
  };
  // const fetchRegionNames = () => {
  //   (async () => {
  //     const regions: Array<string> = [];
  //     const getRegionNames = await fetchCIData();
  //     if (getRegionNames) {
  //       getRegionNames.map((value) => regions.concat(value.region));
  //     }
  //   })();

  useEffect(() => {
    (async () => {
      try {
        const newRegions: Array<string> = [];
        const regionsApi = await fetchAllRegions();
        debugger;
        if (regionsApi) {
          newRegions.concat(regionsApi.map((value) => value.region));
          debugger;
          setRegionNames(newRegions);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  });
  //   function fetchRegionNames() {
  //       (async () => {
  //         const regions: Array<string> = [];
  //         const getRegionNames = await fetchCIData();
  //         if (getRegionNames) {
  //           getRegionNames.map((value) => regions.concat(value.region));
  //           setRegionNames(regions)
  //         }
  //         return regions
  //       })()
  //   }
  // };
  // const [regionNames, setRegionNames] = useState([
  //   'North Scotland',
  //   'South Scotland',
  //   'North East England',
  //   'North West England',
  //   'North Wales & Merseyside',
  //   'South Wales',
  //   'West Midlands',
  //   'East Midlands',
  //   'South East England',
  //   'London',
  //   'East England',
  //   'South England',
  //   'South West England',
  //   'Yorkshire',
  //   'England',
  //   'Scotland',
  //   'Wales',
  //   'GB',
  // ]);
  return (
    <FormControl className={classes.formControl}>
      <Select
        value={region}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="" disabled>
          Select a Region:
        </MenuItem>
        {regionNames.map(regionNamesMapped)}
      </Select>
      <FormHelperText>Select region</FormHelperText>
    </FormControl>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { Dropdown };
