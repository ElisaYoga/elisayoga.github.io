---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<section id="landing">
	{%- if(site.slider_image_urls) -%}
	<div class="gallery js-flickity" data-flickity-options='{ "wrapAround": true, "autoPlay": 3000, "imagesLoaded": true, "fade": true, "draggable": false, "pauseAutoPlayOnHover": false, "setGallerySize": false }'>
		{%- for fileName in site.slider_image_urls -%}
		<img src="/assets/imgs/slider/{{ fileName }}">
		{%- endfor -%}
	</div>
	{%- endif -%}

</section>
{%- if(site.news_section && site.news_section.news && site.news_section.news.length > 0) -%}
<section id="news-section">
	<div class="wrapper">
		<h2>{{ news_section.title }}</h2>
		<div id="news-list" class="masonry">
			{%- for news in site.news_section.news -%}
		 		<div class="news">
		 			<div class="news-header">
			 			{%- if(news.title) -%}
			 			<h4>{{news.title}}</h4>
			 			{%- endif -%}
			 			{%- if(news.date) -%}
			 			<h5 class="news-date">{{news.date}}</h5>
			 			{%- endif -%}
		 			</div>
		 			{%- if(news.description) -%}
		 			<p>{{news.description}}</p>
		 			{%- endif -%}
		 		</div>
			{%- endfor -%}
		</div>
	</div>
</section>
{%- endif -%}
<section id="calendar">
	<h2>{{ site.calendar_section.title }}</h2>
	<div class="wrapper calendar">
		{{ site.calendar_section.calendar_html }}
	</div>
</section>
<section id="about">
	<div class="wrapper">
		<div id="about-me" class="text-with-image columns-2 vertical-center-items">
			<figure class="img-with-subtitle">
				<img class="rounded-corners" src="{{ site.about_section.image.url }}">
			</figure>
			<div class="text">
				<h2>{{ site.about_section.title }}</h2>
				{%- for paragraph in site.about_section.paragraphs_html -%}
		 		{{ paragraph }}
				{%- endfor -%}
			</div>
		</div>
	</div>
</section>
<section>
	<div class="wrapper">
		<div id="focal-points">
			<h2>{{ site.focal_points_section.title }}</h2>
			 <p>{{ site.focal_points.text }}</p>
			 <div class="cards">
			 	{%- for focal_point in site.focal_points_section.focal_points -%}
				 <div class="card">
				 	<div class="card-header">
				 		<div>
					 		<h4 class="card-title">{{ focal_point.title }}</h4>
					 		<h5 class="card-subtitle">{{ focal_point.asana }}</h5>
					 	</div>
				 	</div>
				 	<div class="card-image">
				 		<img class="single-rounded-corner" src="{{ focal_point.image_url }}"/>
				 		<p class="card-image-description">{{ focal_point.description }}</p>
				 	</div>
				 </div>
				 {%- endfor -%}
			 </div>
		</div>
	</div>
</section>
<section id="iyengar">
	<div id="iyengar-quote" class="quote">
		<p class="quote-text">{{ site.iyengar_quote.text }}</p>
		<p class="quote-source">{{ site.iyengar_quote.source }}</p>
	</div>
	<div class="wrapper">
		<div id="about-iyengar" class="text-with-image columns-2 vertical-center-items">
			<div class="text">
				<h2>{{ site.about_iyengar_yoga_section.title }}</h2>
				{%- for paragraph in site.about_iyengar_yoga_section.paragraphs_html -%}
				{{ paragraph }}
				{%- endfor -%}
			</div>
			<figure class="img-with-subtitle">
				<img class="rounded-corners" src="{{ site.about_iyengar_yoga_section.image.url }}">
				<figcaption class="caption caption-left">
					<p>{{ site.about_iyengar_yoga_section.image.caption }}</p>
				</figcaption>
			</figure>
		</div>
	</div><!-- ./wrapper-->
	<div id="iyengar-video">
		 <video width="1280" height="720" poster="{{ site.about_iyengar_yoga_section.video.thumbnail_url}}" controls>
		   <source src="{{ site.about_iyengar_yoga_section.video.video_url}}" type="video/mp4">
			Your browser does not support the video tag.
		</video> 
	</div>
	<div id="masui-quote" class="quote">
		<p class="quote-text">{{ site.masui_quote.text }}</p>
		<p class="quote-source">{{ site.masui_quote.source }}</p>
	</div>
	<div class="wrapper">
		<div class="text-with-image columns-2 vertical-center-items">
			<figure class="img-with-subtitle">
				<img class="rounded-corners" src="{{ site.about_iyengar_family.image.url }}">
				<figcaption class="caption caption-left">
					<p>{{ site.about_iyengar_family.image.caption }}</p>
				</figcaption>
			</figure>
			<div class="text">
				<h2>{{ site.about_iyengar_family.title }}</h2>
				{%- for paragraph in site.about_iyengar_family.paragraphs_html -%}
		 		{{ paragraph }}
				{%- endfor -%}
			</div>
		</div>
	</div><!-- ./wrapper -->
	
</section>


