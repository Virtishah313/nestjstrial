import { Injectable } from '@nestjs/common';
import { user } from './user.model';

@Injectable()
export class UsersService {
    private users: user[] = [
        { id : 1, name:'John Doe',email:'john@example.com'},
        { id : 2, name:'Jane Smith', email:'jane@example.com'},
        
    ];
//     Create user
// Update user
// Get user
// Delete user
findall():user[]{
    return this.users;
}
findone(id:number):user|undefined{
    return this.users.find(user=>user.id===id);

}
create(User:user): void {
    this.users.push({id:Date.now(),...User});
}
delete(id:number): void {
    this.users = this.users.filter(user=>user.id!==id);
}
update(id:number,updatedfields: Partial<user>): user | undefined {
    const userIndex = this.users.findIndex(user => user.id ===id);
    if(userIndex===-1)
        return undefined;
    this.users[userIndex]={...this.users[userIndex], ...updatedfields};
    return this.users[userIndex];
}


}
