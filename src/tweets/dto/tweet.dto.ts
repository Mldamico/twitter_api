import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { BaseDTO } from "../../config/base.dto";


export class TweetDto extends BaseDTO {

    @IsString()
    @IsNotEmpty()
    tweet!: string

    @IsString()
    @IsOptional()
    imagePath?: string

    @IsNumber()
    @IsOptional()
    likeCount!: number


}