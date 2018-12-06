import { Injectable } from '@angular/core';
import { UagerModel } from '../Models/uager-model';
import { Observable,from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsagerService {

  constructor() { }

  usersList = [
    [
      {
        id: 1,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
        first_name: "Bill",
        last_name: "Smith",
        full_name: "Bill Smith",
        highlighted: false,
        country: 'India'
      },
      {
        id: 3,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
        first_name: "Stella",
        last_name: "Kirkwood",
        full_name: "Stella Kirkwood",
        highlighted: false,
        country: 'Australia'
      },
      {
        id: 5,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
        first_name: "Abigail",
        last_name: "Metcalfe",
        full_name: "Abigail Metcalfe",
        highlighted: false,
        country: 'USA'
      },
      {
        id: 26,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
        first_name: "Audrey",
        last_name: "Robert",
        full_name: "Audrey Robert",
        highlighted: false,
        country: 'UAE'
      },
      {
        id: 138,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg",
        first_name: "Michael",
        last_name: "Hillgrove",
        full_name: "Michael Hillgrove",
        highlighted: false,
        country: 'Nepal'
      },
      {
        id: 161,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg",
        first_name: "Connor",
        last_name: "Perkin",
        full_name: "Connor Perkin",
        highlighted: false,
        country: 'Russia'
      },
      {
        id: 228,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
        first_name: "Kiara",
        last_name: "Holder",
        full_name: "Kiara Holder",
        highlighted: false,
        country: 'China'
      },
      {
        id: 230,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg",
        first_name: "Cooper",
        last_name: "Wilhelm",
        full_name: "Cooper Wilhelm",
        highlighted: false,
        country: 'Bhutan'
      },
      {
        id: 251,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
        first_name: "Zoe",
        last_name: "Moubray",
        full_name: "Zoe Moubray",
        highlighted: false,
        country: 'Iran'
      },
      {
        id: 410,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg",
        first_name: "Lilian",
        last_name: "Scantlebury",
        full_name: "Lilian Scantlebury",
        highlighted: false,
        country: 'UK'
      },
      {
        id: 431,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
        first_name: "Flynn",
        last_name: "Willshire",
        full_name: "Flynn Willshire",
        highlighted: false,
        country: 'Denmark'
      },
      {
        id: 453,
        symbol:"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
        first_name: "Hamish",
        last_name: "Oatley",
        full_name: "Hamish Oatley",
        highlighted: false,
        country: 'Holand'
      }
    ]
  ];

  getUserList(){
    return from(this.usersList);
  }
}
