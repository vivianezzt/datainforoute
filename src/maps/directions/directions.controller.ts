import { Controller, Get, Query } from '@nestjs/common';
import { DirectionsService } from './directions.service';

@Controller('directions')
export class DirectionsController {
  constructor(private directionsService: DirectionsService) {}

  @Get()
  getDirections(
    @Query('originId') originId: string, 
    @Query('destinationId') destinationId: string, // Certifique-se de que o nome do parâmetro na URL seja "destination"
  ) {
    return this.directionsService.getDirections(originId, destinationId);
  }
}
