const abecedary = {
    day: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    state: ["will be good", "will be regular", "will be the best time of your life", "will have a good surprise", "will be a bad day" , "will have a bad surprise"],
    time: ["at day", "at nigth"]
}

const mixedMessage = () => {
    let pickDay = Math.floor(Math.random() * abecedary.day.length);
    let pickState = Math.floor(Math.random() * abecedary.state.length);
    let pickTime = Math.floor(Math.random() * abecedary.time.length);
    let message = [abecedary.day[pickDay], abecedary.state[pickState], abecedary.time[pickTime]];
    message = message.join(' ');
    console.log(message);
}

mixedMessage();