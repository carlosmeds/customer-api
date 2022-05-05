import { Controller, Post, Res, Body } from '@nestjs/common';
import { RedisCustomerRepository } from 'src/infra/redis';
import { CustomerUC } from 'src/use-cases/customer-uc';

@Controller()
export class CustomerController {
  @Post('customers')
  async addCustomer(@Res() response, @Body() body): Promise<any> {
    console.log(body);
    const customerRepository = new RedisCustomerRepository();
    const customerUc = new CustomerUC(customerRepository);
    const customer = await customerUc.addCustomer();
    return response.status(201).send(customer.id);
  }
}
