import express, { Request, Response } from 'express';
import * as CountryService from '../services/country.service';

const router = express.Router()

// GET /countries
router.get('/', CountryService.getAllCountries);

// GET /country
router.get('/:code', async (request: Request, response: Response) => {
  const code = request.query.code as string;

  const country = await CountryService.findCountryByCode(code);

  response.send(country);
});

export default router;