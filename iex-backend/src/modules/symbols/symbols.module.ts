import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { TypeOrmModule } from '@nestjs/typeorm';
import { SymbolsController } from './controllers/symbols/symbols.controller';
import { SymbolsService } from './services/symbols/symbols.service';
import { Symbol } from './entities/symbol.entity';
import { ConfigModule } from '@nestjs/config';
import { QuoteGateway } from './events/quote.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Symbol]), HttpModule, ConfigModule],
  controllers: [SymbolsController],
  providers: [SymbolsService, QuoteGateway],
})
export class SymbolsModule {}
