function firstNameOnly(name){
  let first_name = name.split(' ')[0]
  let last_name = name.split(' ')[1]
  return (first_name.concat(' ',last_name[0],'.'))
}

console.log(firstNameOnly("David Wildana"))