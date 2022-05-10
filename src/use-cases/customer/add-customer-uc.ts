import { Customer } from '../../domain/customer';
import { v4 as uuidv4 } from 'uuid';

export class AddCustomerUC {
  constructor(private readonly customerRepository: any) {}
  async handle(document: number, name: string): Promise<Customer> {
    const customer = new Customer(uuidv4(), document, name);
    const addedCustomer = await this.customerRepository.addCustomer(customer);
    return addedCustomer;
  }
}
