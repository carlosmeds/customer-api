import { Injectable } from '@nestjs/common';
import { Customer } from '../domain/customer';

@Injectable()
export class CustomerUC {
  constructor(private readonly customerRepository: any) {}

  async addCustomer(): Promise<Customer> {
    const customer = await this.customerRepository.addCustomer();
    return customer;
  }
}
