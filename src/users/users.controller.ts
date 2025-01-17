import { Controller,Get,Post,Delete,Param,Body,Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Get()
    findall(): User[] {
        return this.usersService.findall();

    }

    @Get(':id')
    findone(@Param('id') id:string) : User | undefined {
        return this.usersService.findone(Number(id));

    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): string {
   // create(@Body() user : user ): string {
    //    this.usersService.create(user);
    this.usersService.create(createUserDto);
        return 'User created Successfully';
    }
    @Delete(':id')
    delete(@Param('id') id: string): string {
        this.usersService.delete(Number(id));
        return 'User deleted successfully!';
    
    }

    @Put(':id')
    update(
        @Param('id') id: string, @Body() updatedfields: Partial<User>): string {
            const updatedUser = this.usersService.update(Number(id),updatedfields);
            if(!updatedUser) {
                return `user with id ${id} not found`;
            }
            return `user with id ${id} succesfully updated`;
        }
    
}
