import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerUC {
  constructor(private readonly customerRepository: any) {}

  async addCustomer() {
    return 'customer';
  }
}
