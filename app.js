class Clock extends React.Component {
  state = {
    time: this.getTime()
  }

  getTime() {
    const currentTime = new Date();
    return ({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    })
  }

  setTime = () => {
    const time = this.getTime();
    this.setState({time})
  }

  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {hours, minutes, seconds} = this.state.time
    return (
      <div className="clock-container">
         {hours} : {minutes > 9 ? minutes : `0${minutes}`} : {seconds > 9 ? seconds : `0${seconds}`}
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'))
