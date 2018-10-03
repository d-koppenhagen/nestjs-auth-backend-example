import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleDataService {
  exampleData(): { [key: string]: any } {
    return {
        key1: this._generateExampleData(),
        key2: this._generateExampleData(),
        key3: [this._generateExampleData(), this._generateExampleData()],
        key4: {
            a: this._generateExampleData(),
            b: this._generateExampleData(),
        },
    };
  }

  private _generateExampleData() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
