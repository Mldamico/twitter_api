import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { BaseDTO } from "../../config/base.dto";


export class commentDTO extends BaseDTO {

    @IsString()
    @IsNotEmpty()
    comment!: string;

    @IsString()
    @IsOptional()
    image?: string;


}