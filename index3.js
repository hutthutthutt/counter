
let gotOn = 0
let gotOff = 0
let currentCount = 0
let runningTotal = 0
let countLog = ""
let logEntry = ""

let countUpBtn = document.getElementById("countUp-btn")
let countDownBtn = document.getElementById("countDown-btn")
let balls = document.getElementById("current-btn")
let logEl = document.getElementById("log-el")
let totalEl = document.getElementById("total-el")

function countUp() {
	gotOn = gotOn + 1
	countUpBtn.textContent =  gotOn + " Got On"
	currentCount += 1
	updateCurrent()
}

function countDown() {
	gotOff = gotOff + 1
	countDownBtn.textContent = gotOff + " Got Off"
	currentCount -= 1
	updateCurrent()
}

function updateCurrent() {
	balls.textContent = gotOn + " - " + gotOff + " = " + currentCount
}

function save() {
	runningTotal = runningTotal + currentCount
	totalEl.textContent = runningTotal //"Total" + runningTotal
	addLog()
	resetButtons()
	updateCurrent()
}

function resetButtons() {
	gotOn = 0
	gotOff = 0
	countUpBtn.textContent = gotOn + " Got On"
	countDownBtn.textContent = gotOff + " Got Off"
	currentCount = 0
}

function addLog() {
	logEntry = "(" + gotOn + "-" + gotOff + ")"
	if (countLog.length>0) {
		countLog = countLog + ", " + logEntry
	} else {
		countLog = logEntry
	}
	logEl.textContent = countLog
	
}