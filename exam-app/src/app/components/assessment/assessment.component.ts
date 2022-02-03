import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Questions } from 'src/app/models/questions';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  questions: Array<Questions> = [];
  correct: number = 0;
  wrong: number = 0;
  finalMsg: string;
  percent: number;
  userPassOrFail: boolean;
  constructor(public questionService: QuestionsService) { } // Dependency injection for questions service

  ngOnInit(): void {
    this.populateUI();
  }

  populateUI(){
    this.questionService.getQuestions()
    .subscribe(result => {
      this.questions = result;
    }, 
      e=>console.log(e), 
      ()=>console.log("Questions Loaded"));
  }

  validateAns(ans: NgForm){
    console.log("started validation");
    let answers = ans.value;
    let ansRecieved = Object.values(answers);
    let storedArray: string[] = [];
    this.questions.forEach(element=> storedArray.push(element.correctAns));
    
    for (let i=0; i<10; i++){
      if( ansRecieved[i] == storedArray[i]){
        this.correct++; 
        console.log("Correct");
      }else {
        this.wrong++ ;
        console.log("wrong");
      }
    }
    console.log("right", this.correct, "wrong", this.wrong);
    ans.reset();
    this.percent = this.correct/10 *100 ;
    if(this.percent >= 80){
      this.userPassOrFail = true;
      this.finalMsg = "Congratulations! You have passed the exam!";
    }else {
      this.userPassOrFail = false;
      this.finalMsg = "OOPS! looks like you've had some bad luck, Try Again!";
    }
    // resetting all the values 
    this.correct = 0;
    this.wrong = 0;
  }
}
