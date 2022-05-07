import {
  Controller,
  Post,
  Res,
  Body,
  Get,
  Param,
  HttpCode,
  Put,
} from '@nestjs/common';
import { Customer } from 'src/domain/customer';
import { RedisCustomerRepository } from 'src/infra/redis';
import { CustomerUC } from 'src/use-cases/customer/customer-uc';

@Controller()
export class CustomerController {
  @Post('customers')
  @HttpCode(201)
  async addCustomer(@Res() response, @Body() body): Promise<any> {
    const customerRepository = new RedisCustomerRepository();
    const customerUc = new CustomerUC(customerRepository);
    const customer = await customerUc.addCustomer(body?.document, body?.name);

    return response.send(customer.id);
  }

  @Get('customers/:id')
  async getCustomer(@Res() response, @Param('id') id: string): Promise<any> {
    const customerRepository = new RedisCustomerRepository();
    const customerUc = new CustomerUC(customerRepository);
    const customer = await customerUc.getCustomer(id);

    return response.status(200).send(customer.name);
  }

  @Put('customers/:id')
  async updateCustomer(@Res() response, @Body() body): Promise<any> {
    const customerRepository = new RedisCustomerRepository();
    const customerUc = new CustomerUC(customerRepository);
    const customer = await customerUc.getCustomer(body.id);

    if (customer) {
      const customerToUpdate = new Customer(
        customer.id,
        body.document,
        body.name,
      );
      const updatedCustomer = await customerUc.updateCustomer(customerToUpdate);

      return response.status(200).send(updatedCustomer.name);
    }
  }
}