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
import {
  makeAddCustomerValidation,
  makeUpdateCustomerValidation,
} from 'src/main/factories';
import { AddCustomerUC } from 'src/use-cases/customer/add-customer-uc';
import { GetCustomerUC } from 'src/use-cases/customer/get-customer-uc';
import { UpdateCustomerUC } from 'src/use-cases/customer/update-customer-uc';

@Controller()
export class CustomerController {
  @Post('customers')
  @HttpCode(201)
  async addCustomer(@Res() response, @Body() body): Promise<any> {
    const vd = makeAddCustomerValidation(body);
    await vd.validate();

    const customerRepository = new RedisCustomerRepository();
    const addCustomerUc = new AddCustomerUC(customerRepository);
    const customer = await addCustomerUc.handle(body?.document, body?.name);

    return response.send(customer);
  }

  @Get('customers/:id')
  async getCustomer(@Res() response, @Param('id') id: string): Promise<any> {
    const customerRepository = new RedisCustomerRepository();
    const getCustomerUc = new GetCustomerUC(customerRepository);
    const customer = await getCustomerUc.handle(id);

    return response.status(200).send(customer);
  }

  @Put('customers/:id')
  async updateCustomer(
    @Res() response,
    @Param('id') id: string,
    @Body() body,
  ): Promise<any> {
    const vd = makeUpdateCustomerValidation(body);
    await vd.validate();

    const customerRepository = new RedisCustomerRepository();
    const updateCustomerUc = new UpdateCustomerUC(customerRepository);
    const customerToUpdate = new Customer(id, body.document, body.name);
    const updatedCustomer = await updateCustomerUc.handle(customerToUpdate);

    return response.status(200).send(updatedCustomer);
  }
}
