import { Injectable } from '@nestjs/common';
import { Client as GoogleMapsClient, PlaceInputType } from '@googlemaps/google-maps-services-js';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class PlacesService {
    // receber via injeção de dependência
    constructor(private googleMapsClient: GoogleMapsClient,
        private configService: ConfigService,
    ) {}

    async findPlaces(text: string) {  
    // integração com o google maps
    const { data } = await this.googleMapsClient.findPlaceFromText({
        params: {
            input: text,
            inputtype: PlaceInputType.textQuery,
            fields: ['place_id', 'formatted_address', 'name', 'geometry'],
            key: this.configService.get('GOOGLE_MAPS_API_KEY'),
        }
    })
    return data;
}
}