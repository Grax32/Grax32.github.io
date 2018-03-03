---
layout: default
title: Geeks Research And Xplain
---

<section class="row">
  <section class="col-md-12"><h3>Latest Improvements</h3></section>
  <section class="col-md-6">
    {{ site.home_page_sections | where:"name", "latest-1" | map: "output" | first }}
  </section>
  <section class="col-md-6">
    {{ site.home_page_sections | where:"name", "latest-2" | map: "output" | first }}
  </section>
</section>

<section class="row">
  <section class="col-md-4">
    {{ site.home_page_sections | where:"name", "life" | map: "output" | first }}
  </section>

  <section class="col-md-4">
    {{ site.home_page_sections | where:"name", "team" | map: "output" | first }}
  </section>

  <section class="col-md-4">
    {{ site.home_page_sections | where:"name", "code" | map: "output" | first }}
  </section>
</section>

<section class="row">
  <section class="col-md-4">
    {{ site.home_page_sections | where:"name", "opinions" | map: "output" | first }}
  </section>

  <section class="col-md-4">
    {{ site.home_page_sections | where:"name", "projects" | map: "output" | first }}
  </section>

  <section class="col-md-4">
    {{ site.home_page_sections | where:"name", "foo" | map: "output" | first }}
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

