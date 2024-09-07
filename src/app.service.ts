import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSalamResponse(salam: string): string {
    if (salam === 'salam') {
      return 'Waliekum Salam!';
    }
    return 'Salam Not Found!';
  }
}
