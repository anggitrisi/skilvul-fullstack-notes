function text_truncate(words,length=100,ending='...'){
  return words.split(0,length) + ending
}

console.log(text_truncate('We are doing JS string exercises.',15,'!!'))