class SkilvulChat{
  constructor(shiftChipper){
    this.shiftChipper = shiftChipper;
  }

  encrypt(plainString){
    let encryptString='';
    const tempString = plainString.toUpperCase();
    for (let i = 0; i < tempString.length; i++){
      let charNum = tempString.charCodeAt(i);

      if(charNum <= 90 && charNum >= 65)
      charNum += this.shiftChipper;
      if (charNum > 90) {
        charNum -= 26;
      }
      encryptString += String.fromCharCode(charNum);
    }
    return encryptString;
  }
}

const mySkilChat = new SkilvulChat(2);
console.log(mySkilChat.encrypt('I love JavaScript!')); // returns 'K NQXG LCXCUETKRV!'

