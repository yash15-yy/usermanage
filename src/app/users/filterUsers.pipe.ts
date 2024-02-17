import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {
  transform(users: any[], searchTerm: string): any[] {
    if (!users || !searchTerm) {
      return users;
    }

    return users.filter(user =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
