import { BadRequestException } from '@nestjs/common';

export class RequiredFieldValidation {
  constructor(private readonly input: any, private readonly schema: any) {}
  async validate(): Promise<any> {
    const result = await this.schema
      .validate(this.input, { strict: true })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });

    if (!result) {
      throw new BadRequestException('Request inválida');
    }
  }
}
