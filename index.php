<?php get_header(); ?>

<div class="page-content">

    <div class="container">

        <div class="row">

            <div class="col-md-7">

                <div class="page-title">
                    <h1> Últimas notícias </h1>
                </div>

                <div class="news">

                    <ul>

                        <li ng-repeat="news in data_news">

                            <a href="{{news.link}}" target="_blank" class="row">

                                <div class="col-md-5 thumb">
                                    <img src="{{news.featured_media_url}}" />
                                </div>

                                <div class="col-md-5 content">

                                    <div class="categories">

                                        <span ng-repeat="category in news.categories_data">{{category.name}}</span>

                                    </div>

                                    <div class="title">
                                        <h2>{{news.title.rendered}}</h2>
                                    </div>

                                    <div class="date">
                                        <span>{{news.date}}</span>
                                    </div>

                                </div>

                            </a>

                        </li>

                    </ul>

                    <div class="load-more">

                        <button ng-click="getNews();">Carregar mais</button>

                    </div>

                </div>

            </div>

            <div class="col-md-3">

                <div class="ads"></div>

                <div class="ads"></div>

            </div>

        </div>

    </div>

</div>


<?php get_footer(); ?>