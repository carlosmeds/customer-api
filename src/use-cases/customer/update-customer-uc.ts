import { NotFoundException } from '@nestjs/common';
import { Customer } from '../../domain/customer';

export class UpdateCustomerUC {
  constructor(private readonly customerRepository: any) {}
  async handle(customer: Customer): Promise<Customer> {
    const lookingForCustomer = await this.customerRepository.getCustomer(
      customer.id,
    );
    if (!lookingForCustomer) {
      throw new NotFoundException('cliente inexistente');
    }
    const updatedCustomer = await this.customerRepository.addCustomer(customer);
    return updatedCustomer;
  }
}
