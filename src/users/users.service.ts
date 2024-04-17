import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Like, Repository } from 'typeorm';
import { validate } from 'class-validator';
import { SearchUserDTO } from './dto/search-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.usersRepository.findOne({
      where: [
        { email: createUserDto.email },
        { mobile: createUserDto.mobile },
      ],
    });

    if (existUser) {
      return 'Email Address Or Mobile Number Already Exist';

    } else {
      const user = this.usersRepository.create(createUserDto);
      await this.usersRepository.save(user);

      return user;

    }
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(searchUserDto: SearchUserDTO): Promise<User[]> | undefined {

    const emailOrMobile: string = searchUserDto.searchText;
    console.log(searchUserDto.searchText)

    try {
      const user = await this.usersRepository.find({
        where: [
          { email: Like(`%${emailOrMobile}%`) },
          { mobile: Like(`%${emailOrMobile}%`) }
        ]
      });

      if (user) {
        console.log('Found user:', user);
        return user;
      } else {
        console.log('User not found');
        return undefined;
      }
    } catch (error) {
      console.error('Error while searching for user:', error);
      return undefined;
    }

  }

  async update(userid: number, updateUserDto: UpdateUserDto) {
    try {

      const existUser = await this.usersRepository.findOneBy({ id: userid });

      if (!existUser) {
        return undefined;
      }

      existUser.firstName = updateUserDto.firstName;
      existUser.lastName = updateUserDto.lastName;
      existUser.gender_id = updateUserDto.gender_id;
      existUser.mobile = updateUserDto.mobile;

      const updatedUser = this.usersRepository.save(existUser);
      return updatedUser;

    } catch (error) {
      console.error('Error while updating user:', error);
      return undefined;
    }

  }

  async changeStatus(id: number) {
    try {

      const existUser = await this.usersRepository.findOneBy({ id });

      if (!existUser) {
        return undefined;
      }

      if(existUser.status_id == "1"){
        existUser.status_id = "2";

      }else{
        existUser.status_id = "1";
      }

      const updatedUser = this.usersRepository.save(existUser);
      return updatedUser;

    } catch (error) {
      console.error('Error while updating user:', error);
      return undefined;
    }
  }

  async getActive_AllUsers(){
    const [activeUserCount, allUsersCount] = await Promise.all([
      this.usersRepository.count({ where: { status_id: '1' } }),
      this.usersRepository.count(),
     
  ]);

  const user = {
    activeUserCount,
    allUsersCount,

  }

  return user;

  }

}
