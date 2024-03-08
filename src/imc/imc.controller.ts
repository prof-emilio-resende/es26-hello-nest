import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { ImcService } from './imc.service';
import { CalculateImcRequest } from './requests/imc.request';

@Controller('imc')
export class ImcController {
  constructor(private readonly imcService: ImcService) {}

  @Get()
  healthCheckImc(): string {
    return 'IMC Works...';
  }

  @Post('calculate')
  calculateImc(@Body() imcCalcRequest: CalculateImcRequest) {
    return this.imcService.calculate(
      imcCalcRequest.height,
      imcCalcRequest.weight,
    );
  }

  @Get('html')
  @Render('imc-calculate.hbs')
  getCalculateImcHtml() {
    return { data: {} };
  }

  @Post('html')
  @Render('imc-calculate.hbs')
  calculateImcHtml(@Body() imcCalcRequest: CalculateImcRequest) {
    return {
      data: this.imcService.calculate(
        imcCalcRequest.height,
        imcCalcRequest.weight,
      ),
    };
  }
}
