<!doctype html>
<html lang="pt-br" ng-app="app">
<head>

	<meta charset="utf-8">
	<title> <?php echo get_bloginfo('name'); ?> </title>

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/assets/css/grid-system.css">
	<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/style.css">

</head>
<body ng-class="{loading: loading_application}">

<div class="header">

    <div class="container">

        <div class="row">

            <div class="col-md-2">

                <div class="logo">
                    <a href="/">
                        <img src="<?php bloginfo('template_directory'); ?>/assets/img/logo.png" alt="Veja" />
                    </a>
                </div>

            </div>

            <div class="col-md-8">

                <div class="menu">

                    <ul>

                        <li>
                            <a href="#">Diálogos vazados</a>
                        </li>

                        <li>
                            <a href="#">Previdência</a>
                        </li>

                        <li>
                            <a href="#">Radar</a>
                        </li>

                        <li>
                            <a href="#">Páginas Amarelas</a>
                        </li>

                        <li>
                            <a href="#">Revista</a>
                        </li>

                        <li>
                            <a href="#">Newsletters</a>
                        </li>

                        <li>
                            <a href="#">Podcasts</a>
                        </li>

                    </ul>

                </div>

            </div>

        </div>

    </div>

</div>