import { Injectable } from '@nestjs/common';

function translateImc(imc): string {
  if (imc < 18.5) return 'magreza';
  if (imc < 24.9) return 'normal';
  if (imc < 30.0) return 'sobrepeso';
  return 'obesidade';
}

@Injectable()
export class ImcService {
  calculate(height: number, weight: number): any {
    const imc = Number(weight / height ** 2).toFixed(2);
    const imcDescription = translateImc(imc);

    return {
      height,
      weight,
      imc,
      imcDescription,
    };
  }
}
