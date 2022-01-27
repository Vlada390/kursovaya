<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no, maximum-scale=1" />
  <title>Weather App</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
  <script src="./script.js" type="text/javascript" defer></script>
  <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=b297d293-610c-4aac-8ac9-156f30b2c563" type="text/javascript"></script>

<body>
  <div class="card">
    <div class="search">
      <input type="text" class="search-bar" placeholder="Поиск">
      <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
          width="1.5em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
          </path>
        </svg></button>
    </div>
    <div class="weather loading">
     <h2 class="city">Погода в Москве</h2> 
      <h1 class="temp">51°C</h1>
      <div class="flex">
        <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" />
        <div class="description">Пасмурно</div>
      </div>
      <div class="humidity">Влажность: 60%</div>
      <div class="wind">Скорость ветра: 6.2 км/ч</div>
    </div>
 
  </div>
  <div class="map-block">
    <div id="map" class="map">
      
    <?php
        
        $connect = mysqli_connect("std-mysql.ist.mospolytech.ru", "std_1490_geo", "12345678", "std_1490_geo");
        
        
        
        $result = mysqli_query($connect, "SELECT * FROM `geo`");

        if(!$result || mysqli_num_rows($result) == 0){
            $content = "В базе данных нет страниц.";
        } else {
            $content .= "<div id=\"map\" class=\"map\">
                <script type=\"text/javascript\">
                ymaps.ready(init);
                function init() {
                var myMap = new ymaps.Map('map', {
                    center: [55.755435772455264, 37.61215424334314],
                    zoom: 5
                }, {
                    searchControlProvider: 'yandex#search'
                });
                myMap.geoObjects";
            while($page = mysqli_fetch_assoc($result)){
                $content .= ".add(new ymaps.Placemark([".$page["Широта"].", ".$page["Долгота"]."], {
                    balloonContent: '".$page["Имя_станции"]."'
                    },{
                        preset: 'islands#blueCircleDotIconWithCaption',
                        iconCaptionMaxWidth: '50'
                        }))";
                    
            }   
            $content .= ";
            }</script></div>";    
        }
        
    ?>

          <?=$content?>
      </div>
    </div>
</body>

</html>