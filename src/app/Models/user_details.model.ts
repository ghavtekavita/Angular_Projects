export class UserDetails{
    name;
    dob;
    mobile;
    email;
    address;
    city;
    district:[
      {name:'Pune'},
      {name:'Ahamdnagar'},
      {name:'Kolhapur'}
    ];
    state:[
      {name:'Maharashtra'},
      {name:'Karnatka'}
    ];
    pin;
    password;
    confirm_password;
}