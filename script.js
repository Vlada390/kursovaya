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


			  
		document.querySelector(".description").innerText = description;
		
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
});


document
	.querySelector(".search-bar")
	.addEventListener("keyup", function (event) {
		if (event.key == "Enter") {
			weather.search();
		}
	});

weather.fetchWeather("Moscow");





