import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Socket, Server } from 'socket.io';
import { SymbolsService } from '../services/symbols/symbols.service';

@WebSocketGateway()
export class QuoteGateway {
  @WebSocketServer()
  private server: Server;

  constructor(private readonly symbolsService: SymbolsService) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async cronSymbol() {
    const findSymbol = await this.symbolsService.findAll(3);
    this.server.emit('quote', findSymbol);
  }

  @SubscribeMessage('quote')
  handleMessage(client: Socket, payload: any): void {
    this.server.emit('message', payload);
  }
}
