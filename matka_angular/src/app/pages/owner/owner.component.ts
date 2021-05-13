import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
    arr = [
      { value: 'abc', checked: true },
      { value: 'xyz', checked: false },
      { value: 'lmn', checked: true }
    ];


  constructor() {



  }

  ngOnInit(): void {
    const filtered = this.arr.reduce((a, o) => (o.checked && a.push(o.value), a), []);

    // const result = this.arr.filter(res => res.checked).map(ele => ele.value);

    const result = this.arr.filter(({ checked }) => checked).map(({ value }) => value);
    console.log(result);


    const pilots = [
      {
        id: 40,
        name: 'Poe Dameron',
        years: 30,
        faction: 'Empire',
      },
      {
        id: 10,
        name: 'Poe Dameron',
        years: 14,
        faction: 'Rebels',
      },
      {
        id: 2,
        name: 'Temmin \'Snap\' Wexley',
        years: 30,
        faction: 'Empire',
      },
      {
        id: 41,
        name: 'Tallissan Lintra',
        years: 16,
        faction: 'Rebels',
      },
      {
        id: 99,
        name: 'Ello Asty',
        years: 22,
        faction: 'Empire',
      }
    ];

    const totalYears = pilots.reduce((accumulator, pilot) => accumulator + pilot.years, 0);
    console.log(totalYears);

    let empire = pilots.filter((pilot) => pilot.faction === 'Empire' && pilot.years === 30);

    empire = pilots.filter((pilot) => [22, 30].includes(pilot.years));
    console.log(empire);

    const objArray = [ { foo: 1, bar: 2, baz: 9}, { foo: 3, bar: 4, baz: 10}, { foo: 5, bar: 6, baz: 20} ];

    const result2 = objArray.map(({ foo, baz }) => ({ foo, baz }));


    console.log(result2);
  }

}
