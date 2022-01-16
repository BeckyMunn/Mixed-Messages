//A set of arrays to create random sentances from. 
const subjectArray = ['You', 'I', 'He', 'They', 'She', 'The Dog']
const verbArray = ['like', 'eat', 'wrote', 'said', 'crashed', 'moved']
const objectArray = ['the hotdog.', 'the car.', 'some toys.']
const arrayArray = [subjectArray, verbArray, objectArray]

//generates a random number to use as a index based on the array.length of the current array
const genarateRandomIndex = array => Math.floor(Math.random() * array.length)

//Outputs a sentance by genarateing an array of Subject, Verb, Object. 
const createSentance = () => {
    const sentance = []
    for (let i = 0; i < arrayArray.length; i++) {
        const index = genarateRandomIndex(arrayArray[i])
        const currentArray = arrayArray[i]
        sentance.push(currentArray[index])
    }
    return sentance.join(' ')
}

console.log(createSentance())