import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { differenceInMinutes, formatISO, parseISO } from 'date-fns';
import { Repository } from 'typeorm';
import { FindSymbolDto } from '../../dto/find-symbol.dto';
import { GetSymbolDto } from '../../dto/get-symbol.dto';
import { Symbol } from '../../entities/symbol.entity';

@Injectable()
export class SymbolsService {
  constructor(
    @InjectRepository(Symbol) readonly symbolRespository: Repository<Symbol>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getSymbol(name: string): Promise<GetSymbolDto> {
    const iexHost = this.configService.get('IEX_HOST');
    const iexVersion = this.configService.get('IEX_VERSION');
    const iexToken = this.configService.get('IEX_TOKEN');

    const getSymbol = await this.httpService
      .get<GetSymbolDto>(
        `${iexHost}/${iexVersion}/stock/${name}/quote?token=${iexToken}`,
      )
      .toPromise();

    return getSymbol.data;
  }

  async findSymbol({ name }: FindSymbolDto): Promise<Symbol> {
    const findSymbol = await this.symbolRespository.findOne({
      name,
    });

    try {
      if (findSymbol) {
        const currentDate = new Date();

        const diffUpdate = differenceInMinutes(
          currentDate,
          parseISO(findSymbol.latestUpdate),
        );

        const diffInterval = this.configService.get<number>('IEX_INTERVAL');

        if (diffUpdate >= diffInterval) {
          const { latestUpdate, latestPrice } = await this.getSymbol(name);

          findSymbol.price = latestPrice;
          findSymbol.latestUpdate = formatISO(latestUpdate);

          const updatedSymbol = await this.symbolRespository.save(findSymbol);

          return updatedSymbol;
        }

        return findSymbol;
      }

      const { companyName, latestPrice, latestUpdate } = await this.getSymbol(
        name,
      );

      const createSymbol = this.symbolRespository.create({
        name,
        price: latestPrice,
        latestUpdate: formatISO(latestUpdate),
        company: companyName,
      });

      const createdSymbol = await this.symbolRespository.save(createSymbol);

      return createdSymbol;
    } catch (err) {
      throw new HttpException(
        `o símbolo ${name} não foi encontrado`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(take = 5): Promise<Symbol[]> {
    const allSymbols = await this.symbolRespository.find({
      take,
      order: { id: 'DESC' },
    });

    return allSymbols;
  }
}
