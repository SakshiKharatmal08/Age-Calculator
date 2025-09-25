var dobText = document.querySelector('#dob-text')
var btnCalculate = document.querySelector('#btn-calculate')
var resultText = document.querySelector('#result-text')

resultText.innerHTML = ""

btnCalculate.addEventListener('click', () => {
    var dob = new Date(dobText.value)
    var today = new Date()

    let years = today.getFullYear() - dob.getFullYear()
    let months = today.getMonth() - dob.getMonth()
    let days = today.getDate() - dob.getDate()

    if (days < 0) {
        months -= 1
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }

    if (months < 0) {
        years -= 1
        months += 12
    }

    resultText.innerHTML = `You are ${years} Years ${months} Months ${days} Days Old.`
})

