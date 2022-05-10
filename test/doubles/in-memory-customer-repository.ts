import { NotFoundException } from '@nestjs/common';
import { Customer } from '../../src/domain/customer';

export class inMemoryCustomerRepository {
  async addCustomer(customer: Customer): Promise<Customer> {
    return customer;
  }
  async getCustomer(id: string): Promise<Customer> {
    if (id !== 'uuid') {
      throw new NotFoundException('cliente inexistente');
    }
    return new Customer('uuid', 123456789, 'John Doe');
  }
}
