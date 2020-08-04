// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { AgGridComponent } from './ag-grid.component';
// import { AgGridModule } from 'ag-grid-angular';

// describe('AgGridComponent', () => {
//   let component: AgGridComponent;
//   let fixture: ComponentFixture<AgGridComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         AgGridModule.withComponents([])
//     ],
//       declarations: [ AgGridComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AgGridComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('the grid cells should be as expected', () => {
//     const appElement = fixture.nativeElement;

//     const cellElements = appElement.querySelectorAll('.ag-cell-value');
//     //expect(cellElements.length).toEqual(3);
//     expect(cellElements[0].textContent).toEqual("Make");
//    // expect(cellElements[1].textContent).toEqual("Model");
//    // expect(cellElements[2].textContent).toEqual("Price");
// });
// });

import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AgGridComponent } from './ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';

describe('ButtonComponent', () => {
  let spectator: Spectator<AgGridComponent>;
  const createComponent = createComponentFactory({
    component: AgGridComponent,
    imports: [AgGridModule.withComponents([])],
    declareComponent: false,
  });

  beforeEach(() => spectator = createComponent());

  it('should have a success class by default', () => {
    //expect(spectator.query('.title')).toHaveText('Zippy title');
    console.log(spectator.query('.ag-header-cell-text'))
    expect(spectator.queryAll('.ag-header-cell-text')).toBe("123")
  });

  // it('should set the class name according to the [className] input', () => {
  //   spectator.setInput('className', 'danger');
  //   expect(spectator.query('button')).toHaveClass('danger');
  //   expect(spectator.query('button')).not.toHaveClass('success');
  // });
});
