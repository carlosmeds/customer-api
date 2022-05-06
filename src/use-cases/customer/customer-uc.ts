import { Injectable } from '@nestjs/common';
import { Customer } from '../../domain/customer';
import { ICustomer } from './protocols';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CustomerUC implements ICustomer {
  constructor(private readonly customerRepository: any) {}

  async addCustomer(document: number, name: string): Promise<Customer> {
    const customer = new Customer(uuidv4(), document, name);
    const addedCustomer = await this.customerRepository.addCustomer(customer);
    return addedCustomer;
  }
}
