import { Controller, Get, Res } from '@nestjs/common';
import { RedisCustomerRepository } from 'src/infra/redis';
import { CustomerUC } from 'src/use-cases/customer-uc';

@Controller()
export class PostsController {
  @Get('teste')
  async getPostsByUser(@Res() response): Promise<any> {
    const customerRepository = new RedisCustomerRepository();
    const customerUc = new CustomerUC(customerRepository);
    const customer = await customerUc.addCustomer();
    return response.status(201).send(customer.name);
  }
}
