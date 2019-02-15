import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  providers: [Cart]
})
export class ModelModule { }
