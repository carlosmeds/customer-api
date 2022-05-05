import { Customer } from '../../domain/customer';

export interface ICustomer {
  addCustomer(document: number, name: string): Promise<Customer>;
}
