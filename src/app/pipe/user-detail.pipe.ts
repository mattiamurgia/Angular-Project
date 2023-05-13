import { Pipe, PipeTransform } from '@angular/core';

export type User = {
  name: string;
  surname: string;
  number: string | number;
  city: string;
};

@Pipe({
  name: 'userDetail',
})
export class UserDetailPipe implements PipeTransform {
  transform(value: User[]): string[] {
    return value.map(
      (item) =>
        `${item.name[0].toUpperCase() + item.name.slice(1)} - ${
          item.surname[0].toUpperCase() + item.name.slice(1)
        }`
    );
  }
}
