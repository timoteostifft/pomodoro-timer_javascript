class Timer {
  constructor(min, sec) {
    ;(this.min = min), (this.sec = sec)
    this.cron = 0
  }

  start() {
    this.cron = setInterval(() => {
      this.decrement()
      this.write(this.min, this.sec)
    }, 1000)
  }

  pause() {
    clearInterval(this.cron)
  }

  write(min, sec) {
    if (min >= 10 && sec >= 10) {
      document.getElementById('timer').innerHTML = min + ':' + sec
    }

    if (min < 10 && sec < 10) {
      document.getElementById('timer').innerHTML = '0' + min + ':' + '0' + sec
    }

    if (min < 10 && sec >= 10) {
      document.getElementById('timer').innerHTML = '0' + min + ':' + sec
    }

    if (min >= 10 && sec < 10) {
      document.getElementById('timer').innerHTML = min + ':' + '0' + sec
    }
  }

  decrement() {
    this.sec -= 1
    if (this.sec == -1) {
      this.sec = 59
      this.min -= 1
    }
  }
}

const timer = new Timer(15, 0)
