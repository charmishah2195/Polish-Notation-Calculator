import { Component, OnInit } from '@angular/core';
//import { HostListener } from '@angular/core';

@Component({
  selector: 'app-postfix',
  templateUrl: './postfix.component.html',
  styleUrls: ['./postfix.component.css']
})


export class PostfixComponent implements OnInit {
// @HostListener('document:keyDown',['$event'])
// HandleKeyboardEvent(event: KeyboardEvent){
// event.returnValue=false;
// event.preventDefault();
// }
  result:any;
 
  onSubmit(postfix: any){
   
    var stack:any[] = [];
    var count=0;
    for(let i=0;i<postfix.length;i++){
      
        if(!isNaN(postfix[i])){
          stack.push(postfix[i]);
          count+=1;
        }
        else{
           count-=2;
           count++;
           if(count<0) break;
           let value1 = parseInt(stack.pop());
           let value2 = parseInt(stack.pop());
           switch(postfix[i]) 
                { 
                    case '+': 
                    stack.push(value2+value1); 
                    break; 
                      
                    case '-': 
                    stack.push(value2- value1); 
                    break; 
                      
                    case '/': 
                    stack.push(value2/value1); 
                    break; 
                      
                    case '*': 
                    stack.push(value2*value1); 
                    break;
                    
                    case '^':
                    stack.push(Math.pow(value2,value1));
                    break;
              } 
        }
      }
      
      if(count==1) 
        this.result=stack.pop();
      else{
        this.result = "Please enter valid expression!";
      }
      return this.result;
  }


 

  constructor() { }

  ngOnInit() {

    
  }

}
