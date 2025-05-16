---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
social: true
post-header: true
bibtypes:
  #- bibquery: "@article"
   # text: "Journal Articles"
  #- bibquery: "@inproceedings"
   # text: "Conferences"
  #- bibquery: "@thesis"
   # text: "PhD Thesis"
  - bibquery: "@misc"
    text: "Workshops"
  - bibquery: "@mscthesis"
    text: "MSc Theses"
  #- bibquery: "@report"
  #  text: "Reports"
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

{% for bibtype in page.bibtypes %}
  {% capture category_counter %}
  {% bibliography_count -q {{bibtype.bibquery}} %}
  {% endcapture %}

  <div style="counter-reset:bibitem {{ category_counter | plus:1 }}">
  <div class="publications">
  <h2 class="type">{{bibtype.text}}</h2>
    {% bibliography -q {{bibtype.bibquery}} %}
  </div>

{% endfor %}
