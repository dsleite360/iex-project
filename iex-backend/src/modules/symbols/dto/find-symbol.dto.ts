import { IsNotEmpty, IsString } from 'class-validator';

export class FindSymbolDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
