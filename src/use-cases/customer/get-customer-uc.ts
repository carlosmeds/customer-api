import { NotFoundException } from '@nestjs/common';
import { Customer } from '../../domain/customer';

export class GetCustomerUC {
  constructor(private readonly customerRepository: any) {}
  async handle(id: string): Promise<Customer> {
    const customer = await this.customerRepository.getCustomer(id);
    if (!customer) {
      throw new NotFoundException('cliente inexistente');
    }
    return customer;
  }
}
