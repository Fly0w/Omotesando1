# ShareHouse Companion

The House Companion is a simple website that provides useful information to the housemates of one sharehouse, such as rubbish sorting, rubbish days, persons in charge of taking out the  rubbish and buying common groceries.

## History

I used plain HTML, CSS and Javascript for this project. The goal was to make a useful website with the freshly acquired knowledge regarding HTML, CSS and Javascript.

## Features

- English and Japanese languages supported (since I'm living in Japan)

![](https://github.com/Fly0w/Omotesando1/blob/main/Media/Animation.gif)

- Automatically updated duos for rubbish (weekly) and grocery shopping (monthly) using current time


```javascript
const now = new Date();
const startDateMs = Date.parse("January 1, 2023");
const nowDateMs = now.getTime();
```



## What next ?

The next step is to link this website to a LINE Chat Bot that will send notifications in a group chat to inform the House Mates about the new duo in charge.

## License

[MIT](https://choosealicense.com/licenses/mit/)
 
