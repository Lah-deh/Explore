export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
  population: number;
  region: string;
  capital: string[];
  cca2: string;
}