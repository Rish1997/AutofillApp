import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { switchMap, filter, map } from 'rxjs/operators';


@Component({
  selector: 'type-ahead',
  templateUrl: 'type-ahead.html'
})
export class TypeAheadComponent implements OnInit {

  results : Observable<any[]>;
  offset = new Subject<string>();


  search1 = (text$: Observable<string>) =>
    text$.pipe(
      filter(val => !!val),
      switchMap(offset => {
        return this.afs.collection('movies', ref => 
        ref.orderBy(`searchableIndex.${offset}`).limit(5)
      )
      .valueChanges()
      })
    );

  constructor(private afs : AngularFirestore) {

    
    

  }

  onkeyup(e){
    this.offset.next(e.target.value.toLowerCase());
  }

  search(){
    return this.offset.pipe(
      filter(val => !!val),
      switchMap(offset => {
        return this.afs.collection('movies', ref => 
        ref.orderBy(`searchableIndex.${offset}`).limit(5)
      )
      .valueChanges()
      })
    )
  }

  ngOnInit(){
    this.results = this.search();
  }

}
