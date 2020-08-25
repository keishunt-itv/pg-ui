import Axios from 'axios';
import {
  CarbonIntensityRegion,
  CarbonIntensityResponse,
  GenerationMixEnum,
  IntensityLevelEnum,
} from '../interfaces/CarbonIntensityRegion';

const intensity: IntensityLevelEnum = {
  forecast: 100,
  index: 'Very High',
};

const windGenerationMix: GenerationMixEnum = {
  fuel: 'wind',
  percentage: 50,
};

const solarGenerationMix: GenerationMixEnum = {
  fuel: 'solar',
  percentage: 30,
};

const coalGenerationMix: GenerationMixEnum = {
  fuel: 'coal',
  percentage: 20,
};

const yorkshireRegion: CarbonIntensityRegion = {
  region: 'Yorkshire',
  intensityLevel: intensity,
  generationMix: [windGenerationMix, solarGenerationMix, coalGenerationMix],
};

const northScotlandRegion: CarbonIntensityRegion = {
  region: 'North Scotland',
  intensityLevel: intensity,
  generationMix: [windGenerationMix, solarGenerationMix, coalGenerationMix],
};

const ciResponse: Array<CarbonIntensityRegion> = [
  yorkshireRegion,
  northScotlandRegion,
];

// eslint-disable-next-line import/prefer-default-export
// export function fetchCIData(): Promise<CarbonIntensityRegion[]> {
//   return Promise.resolve(ciResponse);
// }
export function fetchCIData(): Promise<CarbonIntensityResponse> {
  return Axios.get<CarbonIntensityResponse>('localhost:8080/all')
    .then((response) => response.data)
    .catch((response) => {
      throw new Error(response);
    });
}

export async function fetchAllRegions(): Promise<CarbonIntensityRegion[]> {
  let returnedData: Array<CarbonIntensityRegion> = [];
  const carbonResponse = await fetchCIData();
  carbonResponse.map((value) => returnedData.push(value));
  ciResponse;
  return returnedData;
}
