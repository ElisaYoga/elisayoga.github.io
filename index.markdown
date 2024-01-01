---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<section id="landing">
	{%- if(site.newsList) -%}
	<div id="news-list">
		{%- for news in site.newsList -%}
	 		<div class="news">
	 			{%- if(news.title) -%}
	 			<h4>{{news.title}}</h4>
	 			{%- endif -%}
	 			{%- if(news.date) -%}
	 			<h5>{{news.date}}</h5>
	 			{%- endif -%}
	 			{%- if(news.description) -%}
	 			<p>{{news.description}}</p>
	 			{%- endif -%}
	 		</div>
		{%- endfor -%}
	</div>
	{%- endif -%}
	<div class="gallery js-flickity" data-flickity-options='{ "wrapAround": true, "autoPlay": true, "imagesLoaded": true, "fade": true, "draggable": false, "pauseAutoPlayOnHover": false }'>
		<img src="/assets/imgs/sirsana.png">
		<img src="/assets/imgs/sirsana_2.png">
		<img src="/assets/imgs/sirsana_3.png">
	</div>
</section>
<section id="kalender">
	<h2>Kalender</h2>
	<div class="kalender">
		<iframe width="100%" height="600" src="https://site.arboxapp.com/schedule?identifier=SwxyldKI&amp;whitelabel=Arbox&amp;referer=site&amp;lang=en"></iframe>
	</div>
</section>
<section id="about">
	<div class="wrapper">
		<div id="about-me" class="text-with-image columns-2 vertical-center-items">
			<figure class="img-with-subtitle">
				<img src="/assets/imgs/Elisa.png">
			</figure>
			<div class="text">
				<h2>Über mich</h2>
				<p>Ich heiße Elisa Gritsch und beschäftige mich seit 2017 mit Iyengar® Yoga. Eine gute Freundin hat mich dazu gebracht! Mich begeistert es Übungen gezielt auf bestimmte Körperteile auszurichten und dabei physische und psychische Bereiche zu stärken. Zuerst hat mich der lange Ausbildungsprozess abgeschreckt, aber einmal damit begonnen, lässt mich die Perfektion des Iyengar® Yoga nicht mehr los. Als Naturwissenschafterin finde ich Faszination in den vielen Feinheiten des Iyengar® Yoga und darin sich in seinem Tempo weiterzuentwickeln, ohne Langeweile zu verspüren.</p>
				<p>Die Grundlagenausbildung habe ich bei Iyengar® Yoga Vienna im März 2022 bei Claudia Böhm und Elke Pichler abgeschlossen. Ich übe einerseits gerne selbstständig, treffe mich mit meinen Kolleg*innen zum Üben und unterrichte mit Freude.</p>
			</div>
		</div>
	</div>
</section>
<section>
	<div class="wrapper">
		<div id="iyengar-focal-points">
			<h2>Schwerpunkte</h2>
			 <p class="inline-bullet-list">
			 	{%- for focal_point in site.focal_points -%}
			 	<span class="bullet">{{focal_point.title}}</span>
				{%- endfor -%}
			</p>
			 <p>
			 	Im Iyengar Yoga üben wir jeder Woche andere Gruppen von asanas, um den Körper gezielt zu trainieren und vorzubereiten. Es gibt die Unterteilung in Stehhaltungen, Vorwärtsstreckungen und Drehungen, Rückwärtsstreckungen und regenerative Haltungen mit Atemübungen (pranayama). Manchmal werden auch Armbalancen geübt, aber meistens nur mit Fortgeschrittenen. Umkehrhaltungen sind in jeder Einheit dabei.
			 </p>
			 <div class="cards">
			 	{%- for focal_point in site.focal_points -%}
				 <div class="card">
				 	<div class="card-header">
				 		<div>
					 		<h4 class="card-title">{{ focal_point.title }}</h4>
					 		<h5 class="card-subtitle">{{ focal_point.asana }}</h5>
					 	</div>
				 	</div>
				 	<div class="card-image">
				 		<img src="/assets/focal-points/{{ focal_point.image }}"/>
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
		<p class="quote-text">“Yoga ist die Methode, durch die der unruhige Geist beruhigt <br>und die Energie in schöpferische Bahnen gelenkt wird.”</p>
		<p class="quote-source">- B.K.S. Iyengar</p>
	</div>
	<div class="wrapper">
		<div id="about-iyengar" class="text-with-image columns-2">
			<div class="text">
				<h2>Über Iyengar Yoga</h2>
				<p>Grundlegend für den Stil des Iyengar® Yoga sind die Übung von Yogahaltungen (asanas) und Atemübungen (pranayama). Das regelmässige und präzise Praktizieren unter Anleitung schärft die Konzentration und führt zu innerer Ruhe.</p>
				<p>Da Iyengar® Yoga-Lehrende einen mehrjährigen, umfassenden Ausbildungs- und Prüfungsprozess durchlaufen, können sie auf die individuellen Bedürfnisse ihrer Schüler*innen eingehen und diese mit konkreten Hilfestellungen unterstützen.</p>
				<a href="" onclick="return showMore(this)">Mehr über Iyengar Yoga</a>
				<p class="show-more">Asanas und pranayama verringern Stresssymptome, die emotionale Belastbarkeit wird erhöht und Blockaden schrittweise gelöst. Durch die Stärkung schwacher und das Loslassen verspannter Bereiche wird der Körper immer feiner und differenzierter wahrgenommen. Bei korrekter Übung entsteht ein stabiles Gleichgewicht von Körper und Geist. Iyengar® Yoga gibt dem Körper die natürliche Aufrichtung und Spannkraft, Verspannungen werden gelindert und Haltungsdefizite reduziert.</p>
				<p class="show-more">Besondere Hilfsmittel unterstützen die Übenden bei der Ausführung der Yoga-Haltungen. Zu ihnen zählen Gurte, Klötze, Stühle und Seile. Sie ermöglichen Menschen unterschiedlicher Konstitutionen (Alter, Gesundheit, körperliche Voraussetzungen) am Unterricht teilzunehmen und die korrekte Ausrichtung in den asanas zu finden. Iyengar® Yoga stärkt Muskeln und Nerven und hat einen positiven Einfluss auf die Gesundheit.</p>
				<p class="show-more">Da es sich bei dieser Methode um eine sehr gut dokumentierte und reproduzierbare Methode handelt, bildet er eine gute Basis für wissenschaftliche Studien und Therapiemethoden. Hier findest du Informationen dazu: <a href="https://iyengar-yoga-berlin.de/yoga-forschung/" target="_blank">https://iyengar-yoga-berlin.de/yoga-forschung/</a></p>
			</div>
			<figure class="img-with-subtitle">
				<img src="/assets/imgs/queen.png">
				<figcaption class="caption caption-left">
					<p>B.K.S. Iyengar beim Unterricht mit der Königin von Belgien</p>
					<p>Source: https://artsandculture.google.com/asset/the-queen-mother-of-belgium-performingshirasana/</p>
				</figcaption>
			</figure>
		</div>
	</div><!-- ./wrapper-->
	<div id="masui-quote" class="quote">
		<p class="quote-text">„Yoga ist nichts anderes als die volle Erfahrung des menschlichen Lebens; <br>er ist eine Wissenschaft vom innerlich geeinten Menschen!“</p>
		<p class="quote-source">- Jaques S. Masui</p>
	</div>
	<div class="wrapper">
		<div id="iyengars" class="text-with-image columns-2 vertical-center-items">
			<figure class="img-with-subtitle">
				<img src="/assets/imgs/geeta.png">
				<figcaption class="caption caption-left">
					<p>Yoga für die Frau, Geeta S. Iyengar</p>
				</figcaption>
			</figure>
			<div class="text">
				<h2>Die Iyengars</h2>
				<p>Bellur Krishnamachar Sundararaja (B.K.S.) Iyengar war der Begründer dieses Yoga-Stils. Er unterstützte den Weg des modernen Yoga in den Westen. In vielen Jahren des Selbststudiums entwickelte er seinen eigenen Stil. Dieser gründet auf seiner unermüdlichen Genauigkeit und seines Perfektionismus der Yoga-Haltungen. Berühmt wurde er vor allem durch sein Buch „Licht auf Yoga“, dass 1966 erschien und über 200 asanas abbildet. Bis heute ist dieses Buch eine wichtige Grundlage für Yoga-Übende. Bis kurz vor seinem Tod übte und forschte B.K.S. Iyengar mehrere Stunden täglich in seinem Institut in Pune, Indien. Im August 2014 verstarb er im Alter von 96 Jahren.</p>
				<p>Geeta S. Iyengar war B.K.S. Iyengars älteste Tochter und wird als „ die weltweit führende weibliche Yoga-Lehrerin“ betitelt. Sie wurde von klein auf von ihrem Vater unterrichtet und entwickelte die Iyengar Methode für die Bedürfnisse von Frauen weiter. Sie erarbeitete spezifische Übungssequenzen für Frauen unterschiedlicher Lebensphasen, wie Menstruation, Schwangerschaft und Menopause. Geeta ist am im Dezember 2018 verstorben.</p>
				<p>Abhijata Iyengar, Iyengars Enkeltochter führt das Ramamani Iyengar Memorial Yoga (RIMY) Institut in Pune, Indien gemeinsam mit ihrem Onkel Prashant Iyengar weiter. B.</p>
			</div>
		</div>
	</div><!-- ./wrapper -->
	
</section>


