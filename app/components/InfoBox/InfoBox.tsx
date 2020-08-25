import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';
// import {fetchAllRegions, fetchCIData} from "../../api/fetchCIData";

export interface InfoBoxProps {
  region: string;
  intensity: string;
}
function InfoBox({ region, intensity }: InfoBoxProps): ReactElement {
  // async function getRegionalInfo() {
  //   let regionData = await fetchCIData();
  //   console.log(regionData);
  // }
  return (
    <div>
      <Typography>
        Hello {region} at the moment your carbon emissions are {intensity}!
      </Typography>
    </div>
  );
}

export { InfoBox };
