import { Controller, Get, Res } from '@nestjs/common';

@Controller()
export class PostsController {
  @Get('teste')
  async getPostsByUser(@Res() response): Promise<any> {
    return response
      .status(201)
      .send('This action returns data from ABC Controller Library Approach');
  }
}
