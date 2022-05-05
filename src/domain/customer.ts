export class Customer {
  id: string;
  document: number;
  name: string;

  constructor(id: string, document: number, name: string) {
    this.id = id;
    this.document = document;
    this.name = name;
  }
}
