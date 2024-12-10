import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapsModule } from './maps/maps.module';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './routes/routes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna as variáveis de ambiente disponíveis globalmente
    }),
    PrismaModule, // Módulo para integração com APIs de mapas
    MapsModule,
    RoutesModule,
    
  ],
  controllers: [AppController], // Controladores para gerenciamento de rotas HTTP
  providers: [AppService], // Provedores para lógica de negócios e serviços
})
export class AppModule {}
