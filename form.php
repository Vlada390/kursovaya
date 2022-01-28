<?php
require("template.php")
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма обратной связи</title>
</head>

<body>
 
    <section class="contacts container-fluid">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 mb-5">
                    <form method="post">
                        <div class="mb-3">
                            <label class="form-label color:white" for="name">Имя</label>
                            <input class="form-control" type="text" id="name" placeholder="Введите имя">
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="email">Электронная почта</label>
                            <input class="form-control" type="email" name="" id="email" placeholder="Введите email">
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="message">Сообщение</label>
                            <textarea class="form-control" name="" id="message" cols="30" rows="7" placeholder="Введите сообщение"></textarea>
                        </div>
                        <a class="btn btn-dark mb-3" href="thx.php" role="button">Отправить</a>
                    </form>
                
                </div>
            </div>
        </div>

    </section>

</body>

</html>