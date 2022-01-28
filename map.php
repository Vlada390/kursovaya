<?php
require("template.php")
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="map-block">
        <div id="map" class="map">
       

            <?php

            $connect = mysqli_connect("std-mysql.ist.mospolytech.ru", "std_1490_geo", "12345678", "std_1490_geo");



            $result = mysqli_query($connect, "SELECT * FROM `geo`");

            if (!$result || mysqli_num_rows($result) == 0) {
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
                while ($page = mysqli_fetch_assoc($result)) {
                    $content .= ".add(new ymaps.Placemark([" . $page["Широта"] . ", " . $page["Долгота"] . "], {
                    balloonContent: '" . $page["Имя_станции"] . "'
                    },{
                        preset: 'islands#blueCircleDotIconWithCaption',
                        iconCaptionMaxWidth: '50'
                        }))";
                }
                $content .= ";
            }</script></div>";
            }

            ?>

            <?= $content ?>
        </div>
    </div>
</body>

</html>