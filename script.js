const toggleWidget = () => {
    const widgets = document.querySelectorAll('.widget');
    const buttons = document.querySelectorAll('.widgets .btn');
    widgets.forEach(widget => {
        widget.classList.toggle('active');
    });
    buttons.forEach(btn => {
        btn.classList.toggle('active');
    })
}

const apikey = 'live_4bf08c73103627068aeaf0ae294c42';

const requestOptions = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${apikey}`
    },
};

const getSoccerData = (url) => {
    fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error));
}

getSoccerData('https://api.api-futebol.com.br/v1/times/6');