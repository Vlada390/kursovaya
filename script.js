var addr;

let weather = {
	apiKey: "d29ace057701c182b79cda65c35d878a",
	fetchWeather: function (city) {
		fetch(
				"https://api.openweathermap.org/data/2.5/weather?q=" +
				city + "&lang=ru" +
				"&units=metric&appid=" +
				this.apiKey
			)
			.then((response) => {
				if (!response.ok) {
					alert("Погода не найдена.");
					throw new Error("Погода не найдена.");
				}
				return response.json();
			})
			.then((data) => this.displayWeather(data));
	},

	displayWeather: function (data) {
		const {
			name
		} = data;
		addr = name;
		const {
			icon,
			description
		} = data.weather[0];
		const {
			temp,
			humidity
		} = data.main;
		const {
			speed
		} = data.wind;
		document.querySelector(".city").innerText = "Погода в городе " + name;
		document.querySelector(".icon").src =
			"https://openweathermap.org/img/wn/" + icon + ".png";


		// var znak = ['light shower snow','heavy shower snow','fog','overcast clouds','clear sky','few clouds','scattered clouds','broken clouds','shower rain','rain','thunderstorm','snow','mist','thunderstorm with light rain','thunderstorm with rain','thunderstorm with heavy rain','light thunderstorm','thunderstorm','heavy thunderstorm','ragged thunderstorm','thunderstorm with light drizzle','thunderstorm with drizzle','thunderstorm with heavy drizzle','light intensity drizzle','drizzle','heavy intensity drizzle','light intensity drizzle rain','drizzle rain','heavy intensity drizzle rain','shower rain and drizzle','heavy shower rain and drizzle','shower drizzle','light rain','moderate rain','heavy intensity rain','very heavy rain','extreme rain','freezing rain','light intensity shower rain','shower rain','heavy intensity shower rain','ragged shower rain','light snow','Snow','Heavy snow','Sleet','Light shower sleet','Shower sleet','Light rain and snow','Rain and snow','Light shower snow','Shower snow','Heavy shower snow'];

		// var znakRU = ['Легкий снегопад','Сильный снегопад','Туман','Пасмурно','Чистое небо','Небольшая облачность','Переменная облачность','Облачность','Ливневый дождь','Дождь','Гроза','Снег','Морось','Гроза с небольшим дождем','Гроза с дождем','Гроза с сильным дождем','Легкая гроза','Гроза','Сильная гроза','Местами гроза','Гроза с легким дождем','Гроза с моросящим дождем','Гроза, сильно моросящий дождь','Слабая морось','Морось','Сильная морось','Слабо моросящий дождь','Моросящий дождь','Сильная изморось','Кратковременные ливни, изморось','Проливной кратковременный дождь, изморось','Плотная морось','Небольшой дождь','Умеренный дождь','Сильный дождь','Очень сильный дождь','Ливень','Ледяной дождь','Умеренный дождь','Проливной дождь','Сильный ливень','Переменный ливень','Легкий снегопад','Снег','Сильный снегопад','Мокрый снег','Небольшой дождь со снегом','Слякоть, дождь со снегом','Легкий переменный дождь/снег','Дождь со снегом','Небольшой снегопад','Непрерывный снегопад','Обильный снегопад'];

		// var m4 = znak.indexOf(data.weather[0].description);
		document.querySelector(".description").innerText = description;
		// document.querySelector(".description").innerText = " " + znakRU[m4];
		document.querySelector(".temp").innerText = temp + " °C";
		document.querySelector(".humidity").innerText =
			"Влажность: " + humidity + "%";
		document.querySelector(".wind").innerText =
			"Скорость ветра: " + speed + " км/ч";
		document.querySelector(".weather").classList.remove("loading");
		document.body.style.backgroundImage =
			"url('https://source.unsplash.com/1600x900/?" + name + "')";
	},
	search: function () {

		this.fetchWeather(document.querySelector(".search-bar").value);
	}
};





document.querySelector(".search button").addEventListener("click", function () {
	weather.search();
}, function () {
	(init)
});


document
	.querySelector(".search-bar")
	.addEventListener("keyup", function (event) {
		if (event.key == "Enter") {
			weather.search();
		}
	});

weather.fetchWeather("Moscow");


// ymaps.ready(init);

// function init() {

// // Создание карты.
// var myMap = new ymaps.Map("map", {
// center:
// [55, 37],
// zoom: 9,
// });
// // Поиск координат центра Нижнего Новгорода.
// ymaps.geocode(addr, {
// /**
// * Опции запроса
// * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/referenc..
// */
// // Сортировка результатов от центра окна карты.
// // boundedBy: myMap.getBounds(),
// // strictBounds: true,
// // Вместе с опцией boundedBy будет искать строго внутри области, указанной в boundedBy.
// // Если нужен только один результат, экономим трафик пользователей.
// results: 1
// }).then(function (res) {
// // Выбираем первый результат геокодирования.
// var firstGeoObject = res.geoObjects.get(0),
// // Координаты геообъекта.
// coords = firstGeoObject.geometry.getCoordinates(),
// // Область видимости геообъекта.
// bounds = firstGeoObject.properties.get('boundedBy');

// firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
// // Получаем строку с адресом и выводим в иконке геообъекта.
// firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());


// // Добавляем первый найденный геообъект на карту.
// myMap.geoObjects.add(firstGeoObject);
// // Масштабируем карту на область видимости геообъекта.
// myMap.setBounds(bounds, {
// // Проверяем наличие тайлов на данном масштабе.
// checkZoomRange: true
// })

// });
// }



// $.ajax({
// 	url: "script.js",
// 	method:'POST'
// 			}).done(function(data) {
// 				this.myMap.geoObjects.removeAll();
// 			// здесь нужно удалить старые метки и создать новые

// 			//objectManager.removeAll(); не помогают
		   
// 			objectManager.add(data);
// 			});
// }



	// // Строка с адресом, который необходимо геокодировать
	// var address = name;

	// // Ищем координаты указанного адреса
	// // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/referen..
	// var geocoder = ymaps.geocode(address);

	// // После того, как поиск вернул результат, вызывается callback-функция
	// geocoder.then(
	// function (res) {
	// var firstGeoObject = res.geoObjects.get(0),
	// // Координаты геообъекта.
	// coordinates = firstGeoObject.geometry.getCoordinates(),
	// // Область видимости геообъекта.
	// bounds = firstGeoObject.properties.get('boundedBy');

	// // координаты объекта
	// // var coordinates = res.geoObjects.get(0).geometry.getCoordinates();

	// // Добавление метки (Placemark) на карту
	// var placemark = new ymaps.Placemark(
	// coordinates, {});

	// myMap.geoObjects.add(placemark);
	// }
	// );



	