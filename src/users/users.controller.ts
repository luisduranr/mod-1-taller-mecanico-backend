import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserResponseDto | null> {
    return this.usersService.findById(parseInt(id));
  }
  @Get()
  async findAll(): Promise<UserResponseDto[]> {
    return (await this.usersService.findAll()).map(user => ({
      ...user,
      name: user.name ?? undefined,
    }));
  }
}