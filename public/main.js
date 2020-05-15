const display = document.getElementById('display')

let getSubPoints = async () => {
    let result = await fetch(' https://decapi.me/twitch/subpoints/thethingssheplays')
    let text = await result.text()
    let trueCount = parseInt(text) - 1
    display.innerText = trueCount
}

getSubPoints()

setInterval(() => {
    getSubPoints()
}, 2*60*1000)