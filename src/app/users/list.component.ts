import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../_services';
import { User } from '../_models';


@Component({
  templateUrl: 'list.component.html',
  styleUrls: ['./list.scss']
})
export class ListComponent implements OnInit {
  users: User[] = [];
  searchTerm: string = '';
  sortColumn: string = '';
  sortDirection: string = 'asc';


  constructor(private userService: UserService, private alertService: AlertService) { }

  ngOnInit() {
    this.loadUsers();

    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  loadUsers() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
        // Ensure initial sorting after loading users
        this.sortTable('firstName');
      });
  }

  deleteUser(id: string) {
    const user = this.users.find(x => x.id === id);
    if (!user) return;
    user.isDeleting = true;
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => {
        this.users = this.users.filter(x => x.id !== id);
        this.alertService.success('User deleted successfully.');
      });
  }

  sortTable(column: keyof User) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.users.sort((a, b) => {
      const valA = a[column];
      const valB = b[column];
      if (valA < valB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valA > valB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

}
