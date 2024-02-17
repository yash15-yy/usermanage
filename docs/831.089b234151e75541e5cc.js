"use strict";(self.webpackChunkusermanage=self.webpackChunkusermanage||[]).push([[831],{7831:(w,g,l)=>{l.r(g),l.d(g,{UsersModule:()=>Q});var o=l(665),u=l(8583),a=l(9728),e=l(639);let Z=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"router-outlet"),e.qZA(),e.qZA())},directives:[a.lC],encapsulation:2}),t})();var p=l(8049),v=l(1841);const m="http://localhost:4000/users";let h=(()=>{class t{constructor(r){this.http=r}getAll(){return this.http.get(m)}getById(r){return this.http.get(`${m}/${r}`)}create(r){return this.http.post(m,r)}update(r,n){return this.http.put(`${m}/${r}`,n)}delete(r){return this.http.delete(`${m}/${r}`)}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(v.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var _=l(1585);let C=(()=>{class t{transform(r,n){return r&&n?r.filter(s=>s.firstName.toLowerCase().includes(n.toLowerCase())):r}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=e.Yjl({name:"filterUsers",type:t,pure:!0}),t})();function A(t,i){1&t&&e._UZ(0,"span",15)}function T(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"Delete"),e.qZA())}function U(t,i){if(1&t){const r=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",10),e.TgZ(8,"button",11),e.NdJ("click",function(){const d=e.CHM(r).$implicit;return e.oxw().deleteUser(d.id)}),e.TgZ(9,"a",12),e._uU(10,"Edit"),e.qZA(),e.qZA(),e.TgZ(11,"button",13),e.NdJ("click",function(){const d=e.CHM(r).$implicit;return e.oxw().deleteUser(d.id)}),e.YNc(12,A,1,0,"span",14),e.YNc(13,T,2,0,"span",9),e.qZA(),e.qZA(),e.qZA()}if(2&t){const r=i.$implicit;e.xp6(2),e.Oqu(r.firstName),e.xp6(2),e.Oqu(r.email),e.xp6(2),e.Oqu(r.role),e.xp6(3),e.MGl("routerLink","edit/",r.id,""),e.xp6(2),e.Q6J("disabled",r.isDeleting),e.xp6(1),e.Q6J("ngIf",r.isDeleting),e.xp6(1),e.Q6J("ngIf",!r.isDeleting)}}function q(t,i){1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td",16),e._UZ(2,"span",17),e.qZA(),e.qZA())}let x=(()=>{class t{constructor(r,n){this.userService=r,this.alertService=n,this.users=[],this.searchTerm="",this.sortColumn="",this.sortDirection="asc"}ngOnInit(){this.loadUsers(),this.userService.getAll().subscribe(r=>{this.users=r})}loadUsers(){this.userService.getAll().pipe((0,p.P)()).subscribe(r=>{this.users=r,this.sortTable("firstName")})}deleteUser(r){const n=this.users.find(s=>s.id===r);!n||(n.isDeleting=!0,this.userService.delete(r).pipe((0,p.P)()).subscribe(()=>{this.users=this.users.filter(s=>s.id!==r),this.alertService.success("User deleted successfully.")}))}sortTable(r){this.sortColumn===r?this.sortDirection="asc"===this.sortDirection?"desc":"asc":(this.sortColumn=r,this.sortDirection="asc"),this.users.sort((n,s)=>{const d=n[r],c=s[r];return d<c?"asc"===this.sortDirection?-1:1:d>c?"asc"===this.sortDirection?1:-1:0})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(h),e.Y36(_.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:22,vars:6,consts:[[2,"margin-top","20px","margin-left","20px"],[2,"margin-left","20px"],[1,"table","table-striped"],[2,"width","60%",3,"click"],["type","text","placeholder","Search by name",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[2,"width","30%",3,"click"],[2,"width","30%"],[2,"width","20%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"click"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(r,n){1&r&&(e.TgZ(0,"h1",0),e.TgZ(1,"b"),e._uU(2,"Users List"),e.qZA(),e.qZA(),e.TgZ(3,"p",1),e.TgZ(4,"b"),e._uU(5,">> Working on sorting by click on Name or Email"),e.qZA(),e.qZA(),e.TgZ(6,"table",2),e.TgZ(7,"thead"),e.TgZ(8,"tr"),e.TgZ(9,"th",3),e.NdJ("click",function(){return n.sortTable("firstName")}),e._uU(10,"Name "),e.TgZ(11,"input",4),e.NdJ("ngModelChange",function(d){return n.searchTerm=d}),e.qZA(),e.qZA(),e.TgZ(12,"th",5),e.NdJ("click",function(){return n.sortTable("email")}),e._uU(13,"Email"),e.qZA(),e.TgZ(14,"th",6),e._uU(15,"Role"),e.qZA(),e.TgZ(16,"th",7),e._uU(17,"Button"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"tbody"),e.YNc(19,U,14,7,"tr",8),e.ALo(20,"filterUsers"),e.YNc(21,q,3,0,"tr",9),e.qZA(),e.qZA()),2&r&&(e.xp6(11),e.Q6J("ngModel",n.searchTerm),e.xp6(8),e.Q6J("ngForOf",e.xi3(20,3,n.users,n.searchTerm)),e.xp6(2),e.Q6J("ngIf",!n.users))},directives:[o.Fj,o.JJ,o.On,u.sg,u.O5,a.yS],pipes:[C],styles:[".table[_ngcontent-%COMP%]{width:40%;border-collapse:collapse;border-spacing:0;border:1px solid #ddd;background-color:#f8f9fa}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;border:1px solid #ddd;padding:8px}.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}.text-primary[_ngcontent-%COMP%]{color:#007bff}.text-success[_ngcontent-%COMP%]{color:#28a745}.text-danger[_ngcontent-%COMP%]{color:#dc3545}.btn-add-user[_ngcontent-%COMP%]{background-color:#28a745;color:#fff;border:none;padding:.375rem .75rem;border-radius:.25rem;font-size:.875rem;cursor:pointer;transition:background-color .3s ease}.btn-add-user[_ngcontent-%COMP%]:hover{background-color:#218838}.btn-add-user[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0 0 .2rem #28a74580}"]}),t})();function M(t,i){1&t&&(e.TgZ(0,"h1",19),e._uU(1,"Add User"),e.qZA())}function y(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Edit User"),e.qZA())}function N(t,i){1&t&&(e.TgZ(0,"div"),e._uU(1,"First Name is required"),e.qZA())}function k(t,i){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,N,2,0,"div",1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.f.firstName.errors.required)}}function J(t,i){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function O(t,i){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email must be a valid email address"),e.qZA())}function P(t,i){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,J,2,0,"div",1),e.YNc(2,O,2,0,"div",1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.f.email.errors.required),e.xp6(1),e.Q6J("ngIf",r.f.email.errors.email)}}function I(t,i){1&t&&(e.TgZ(0,"div"),e._uU(1,"Role is required"),e.qZA())}function S(t,i){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,I,2,0,"div",1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.f.role.errors.required)}}function L(t,i){1&t&&e._UZ(0,"span",21)}const f=function(t){return{"is-invalid":t}};let b=(()=>{class t{constructor(r,n,s,d,c){this.formBuilder=r,this.route=n,this.router=s,this.userService=d,this.alertService=c,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id,this.form=this.formBuilder.group({firstName:["",o.kI.required],email:["",[o.kI.required,o.kI.email]],role:["",o.kI.required]}),this.isAddMode||this.userService.getById(this.id).pipe((0,p.P)()).subscribe(r=>this.form.patchValue(r))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}createUser(){this.userService.create(this.form.value).pipe((0,p.P)()).subscribe(()=>{this.alertService.success("User added",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})}).add(()=>this.loading=!1)}updateUser(){this.userService.update(this.id,this.form.value).pipe((0,p.P)()).subscribe(()=>{this.alertService.success("User updated",{keepAfterRouteChange:!0}),this.router.navigate(["../../"],{relativeTo:this.route})}).add(()=>this.loading=!1)}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(o.qu),e.Y36(a.gz),e.Y36(a.F0),e.Y36(h),e.Y36(_.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:31,vars:17,consts:[["style","margin-top:20px; margin-left:20px ;",4,"ngIf"],[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row",2,"margin-left","20px"],[1,"form-group","col-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"form-row"],[1,"form-group","col-7",2,"margin-left","20px"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],[1,"form-group","col",2,"margin-left","20px"],["formControlName","role",1,"form-control",3,"ngClass"],["value",""],["value","User"],["value","Admin"],[1,"form-group",2,"margin-left","20px"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[2,"margin-top","20px","margin-left","20px"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,n){1&r&&(e.YNc(0,M,2,0,"h1",0),e.YNc(1,y,2,0,"h1",1),e.TgZ(2,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"label"),e._uU(6,"Name :"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,k,2,1,"div",6),e.qZA(),e.qZA(),e.TgZ(9,"div",7),e.TgZ(10,"div",8),e.TgZ(11,"label"),e._uU(12,"Email :"),e.qZA(),e._UZ(13,"input",9),e.YNc(14,P,3,2,"div",6),e.qZA(),e.TgZ(15,"div",10),e.TgZ(16,"label"),e._uU(17,"Role :"),e.qZA(),e.TgZ(18,"select",11),e._UZ(19,"option",12),e.TgZ(20,"option",13),e._uU(21,"User"),e.qZA(),e.TgZ(22,"option",14),e._uU(23,"Admin"),e.qZA(),e.qZA(),e.YNc(24,S,2,1,"div",6),e.qZA(),e.qZA(),e.TgZ(25,"div",15),e.TgZ(26,"button",16),e.YNc(27,L,1,0,"span",17),e._uU(28," Save "),e.qZA(),e.TgZ(29,"a",18),e._uU(30,"Cancel"),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.Q6J("ngIf",n.isAddMode),e.xp6(1),e.Q6J("ngIf",!n.isAddMode),e.xp6(1),e.Q6J("formGroup",n.form),e.xp6(5),e.Q6J("ngClass",e.VKq(11,f,n.submitted&&n.f.firstName.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.firstName.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(13,f,n.submitted&&n.f.email.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.email.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(15,f,n.submitted&&n.f.role.errors)),e.xp6(6),e.Q6J("ngIf",n.submitted&&n.f.role.errors),e.xp6(2),e.Q6J("disabled",n.loading),e.xp6(1),e.Q6J("ngIf",n.loading))},directives:[u.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,u.mk,o.EJ,o.YN,o.Kr,a.yS],styles:[".form-group[_ngcontent-%COMP%]{margin-bottom:20px}.form-control[_ngcontent-%COMP%]{width:10%}.btn[_ngcontent-%COMP%]{margin-right:10px}.invalid-feedback[_ngcontent-%COMP%]{color:#dc3545}.btn-primary[_ngcontent-%COMP%]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0056b3;border-color:#0056b3}.btn-link[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#007bff}.btn-link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),t})();const Y=[{path:"",component:Z,children:[{path:"",component:x},{path:"add",component:b},{path:"edit/:id",component:b}]}];let E=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.Bz.forChild(Y)],a.Bz]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,o.UX,E,o.u5]]}),t})()}}]);