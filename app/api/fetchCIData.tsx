import {
  CarbonIntensityRegion,
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
export function fetchCIData(): Promise<CarbonIntensityRegion[]> {
  debugger;
  return Promise.resolve(ciResponse);
}

export async function fetchAllRegions(): Promise<CarbonIntensityRegion[]> {
  let returnedData: Array<CarbonIntensityRegion> = [];
  const carbonResponse = await fetchCIData();
  debugger;
  carbonResponse.map((value) => returnedData.push(value));
  console.log(returnedData);
  return returnedData;
}
