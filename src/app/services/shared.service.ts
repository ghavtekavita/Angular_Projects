import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user_data={
    email : '',
    psw : '',
  }
  
  constructor() {
   }
   setData(email,psw){
     this.user_data.email=email;
     this.user_data.psw=psw;
   }
   getData():any{
     return this.user_data;
   }
}
