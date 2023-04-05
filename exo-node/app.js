process.stdin.resume()
process.stdin.setEncoding('utf-8')

console.log('What\'s your age ?')
process.stdin.on('data', (age) => {
    let currentYear = new Date().getFullYear();
    if (parseInt(age)< 1 || parseInt(age) > 99) {
        console.log('Please enter an age between 1 and 99')
    } else {
        console.log('You were born in '+ (currentYear - parseInt(age)))
        process.exit()
    }
})