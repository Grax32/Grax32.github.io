---
layout: home-page-2019
title: David Walker
tagLine: Articles and Information
---

<section class="row">
  <section class="col-md-12">
    {{ site.home_page_sections | where:"name", "articles" | map: "output" | first }}
  </section>
</section>

<section class="row">
  <section class="col-md-12">
    {{ site.home_page_sections | where:"name", "projects" | map: "output" | first }}
  </section>
</section>

<section class="row">
  <section class="col-md-12"><h3>About the Author</h3></section>
  <section class="col-md-4">
    {{ site.home_page_sections | where:"name", "about-1" | map: "output" | first }}
  </section>
  <section class="col-md-4">
    {{ site.home_page_sections | where:"name", "about-2" | map: "output" | first }}
  </section>
  <section class="col-md-4">
    {{ site.home_page_sections | where:"name", "about-3" | map: "output" | first }}
  </section>
</section>

