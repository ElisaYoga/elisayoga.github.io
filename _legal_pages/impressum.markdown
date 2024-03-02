---
layout: legal
title: Impressum
---
<div id="impressum" class="wrapper">

	<h3>Name</h3>
	{{ site.impressum.name }}

	<h3>Standort der Gewerbeberechtigung</h3>
	{{ site.impressum.address.city }}<br>
	{{ site.impressum.address.street }}

	<h3>Unternehmensgegenstand</h3>
	{{ site.impressum.purpose }}

	<h3>Kontaktdaten</h3>
	E-Mail: <a class="u-email" href="mailto:{{ site.impressum.email }}">{{ site.impressum.email }}</a>

	<h3>UID-Nummer</h3>
	{{ site.impressum.uid }}

	<h3>Mitgliedschaften bei der Wirtschaftskammerorganisation</h3>
	{{ site.impressum.memberships }}

	<h3>Behörde gem. ECG</h3>
	{{ site.impressum.ecg_authority }}

	<h3>Anwendbare Rechtsvorschriften</h3>
	{{ site.impressum.legislation }}

	<h3>Angaben zur Online-Streitbeilegung</h3>
	{{ site.impressum.complaints }}
</div>

