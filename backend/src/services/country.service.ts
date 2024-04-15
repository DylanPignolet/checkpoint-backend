import { DeleteResult, Like } from "typeorm";
import { Country } from "../entities/country";
import { Continent } from "../entities/continent";

export function findCountryByCode(code: string): Promise<Country | null> {
  return Country.findOne({
    relations: {
      continent: true,
    },
    where: { code: code },
  });
}

export function getAllCountries(): Promise<Country[]> {
  return Country.find();
}
