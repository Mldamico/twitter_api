import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { BaseDTO } from "../../config/base.dto";


export class UserDTO extends BaseDTO {

    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsOptional()
    profileImg?: string

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;



}

export enum RoleType {
    USER = "USER",
    MODERATOR = "MODERATOR",
    ADMIN = "ADMIN"
}