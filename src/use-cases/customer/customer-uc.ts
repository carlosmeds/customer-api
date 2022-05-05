import { Injectable } from '@nestjs/common';
import { Customer } from '../../domain/customer';
import { ICustomer } from './protocols';

@Injectable()
export class CustomerUC implements ICustomer {
  constructor(private readonly customerRepository: any) {}

  async addCustomer(document: number, name: string): Promise<Customer> {
    const customer = await this.customerRepository.addCustomer(document, name);
    return customer;
  }
}
