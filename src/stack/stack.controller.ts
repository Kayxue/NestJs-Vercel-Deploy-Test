import { Controller, Get, HttpCode } from '@nestjs/common';
import StackExample from "../../resource/StackExample.json"

@Controller('stack')
export class StackController {
    @Get()
    @HttpCode(200)
    public retriveStackExample(){
        return StackExample
    }
}
