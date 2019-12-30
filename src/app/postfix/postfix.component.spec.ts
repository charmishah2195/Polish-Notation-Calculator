import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostfixComponent } from './postfix.component';

describe('PostfixComponent', () => {
  let component: PostfixComponent;
  let fixture: ComponentFixture<PostfixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostfixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostfixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates a Component', () => {
    expect(component).toBeTruthy();
  });

  it("Component defined",()=>{
    expect(component).toBeDefined();
  });

//Success test cases
  it("Success when Input values is 32+44*-",()=>{
    const inputval = component.onSubmit("32+44*-");
    expect(inputval).toEqual(-11)
  });

  it("Success when Input values is 59+",()=>{
    const inputval = component.onSubmit("59+");
    expect(inputval).toEqual(14)
  });

  it("Success when Input values is 76-",()=>{
    const inputval = component.onSubmit("76-");
    expect(inputval).toEqual(1)
  });

  it("Success when Input values is 93/",()=>{
    const inputval = component.onSubmit("93/");
    expect(inputval).toEqual(3)
  });


  it("Success when Input values is 44*",()=>{
    const inputval = component.onSubmit("44*");
    expect(inputval).toEqual(16)
  });

  it("Success when Input values is 95/44*+ ",()=>{
    const inputval = component.onSubmit("95/44*+");
    expect(inputval).toEqual(17)
  });

  it("Success when Input values is 52/",()=>{
    const inputval = component.onSubmit("52/");
    expect(inputval).toEqual(2.5)
  });

  //Fail test cases

  
  it("Fails when there are extra Operands eg: 95++ ",()=>{
    const inputval = component.onSubmit("95++");
    expect(inputval).toEqual("Please enter valid expression!")
  });

  it("Fails when there are less Operands eg: 95 ",()=>{
    const inputval = component.onSubmit("95");
    expect(inputval).toEqual("Please enter valid expression!")
  });

  it("Fails when equation starts with an Operand eg: +95 ",()=>{
    const inputval = component.onSubmit("95");
    expect(inputval).toEqual("Please enter valid expression!")
  });

});
