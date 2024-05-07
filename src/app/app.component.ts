import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';

  passwordLength :number =15
  numbers : boolean =true;
  symbols : boolean =true;  
  lowercase : boolean =false;  
  uppercase : boolean =true;

  generatedPassword : string ='';
  
  lowerCaseAlphabetList : any[] =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  upperCaseAlphabetList : any[]=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


numbersList : any[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

symbolsList : any[] = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  generatePassword(){
    this.generatedPassword = '';
    var passwordPool: any[] = [];

    if (this.numbers) {
      passwordPool = passwordPool.concat(this.numbersList);
    }

    if (this.symbols) {
      passwordPool = passwordPool.concat(this.symbolsList);
    }
    if (this.lowercase) {
      passwordPool = passwordPool.concat(this.lowerCaseAlphabetList);
    }

    if (this.uppercase) {
      passwordPool = passwordPool.concat(this.upperCaseAlphabetList);
    }

    for (var i = 0; i < this.passwordLength; ++i) {
      var index = Math.floor(Math.random() * passwordPool.length);
      console.log(index);
      this.generatedPassword = this.generatedPassword + passwordPool[index];
    }
  }

}
