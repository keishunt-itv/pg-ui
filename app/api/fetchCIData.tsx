import {
  CarbonIntensityResponse,
  GenerationMixEnum,
  IntensityLevelEnum,
} from '../interfaces/CarbonIntensityResponse';

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

const ciResponse: CarbonIntensityResponse = {
  region: 'Yorkshire',
  intensityLevel: intensity,
  generationMix: [windGenerationMix, solarGenerationMix, coalGenerationMix],
};

// eslint-disable-next-line import/prefer-default-export
export function fetchCIData(): Promise<CarbonIntensityResponse> {
  return Promise.resolve(ciResponse);
}
