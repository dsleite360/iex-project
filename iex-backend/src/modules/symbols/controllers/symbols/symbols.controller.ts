import { Controller, Get, Query } from '@nestjs/common';
import { SymbolsService } from '../../services/symbols/symbols.service';
import { FindSymbolDto } from '../../dto/find-symbol.dto';
import { Symbol } from '../../entities/symbol.entity';

@Controller('symbols')
export class SymbolsController {
  constructor(private readonly symbolsService: SymbolsService) {}

  @Get()
  async findSymbol(@Query() findSymbolDto: FindSymbolDto): Promise<Symbol> {
    const findSymbol = await this.symbolsService.findSymbol(findSymbolDto);
    return findSymbol;
  }
}
