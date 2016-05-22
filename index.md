---
layout: default
title: Geeks Research And Xplain
---

{% raw %}<section class="col-md-12">{% endraw %}
{{ site.home_page_sections | where:"name", "latest" | map: "output" | first }}
{% raw %}</section>{% endraw %}

{% raw %}<section class="row">{% endraw %}
{{ site.section_pre }}
{{ site.home_page_sections | where:"name", "life" | map: "output" | first }}
{{ site.section_post }}

{{ site.section_pre }}
{{ site.home_page_sections | where:"name", "team" | map: "output" | first }}
{{ site.section_post }}

{{ site.section_pre }}
{{ site.home_page_sections | where:"name", "code" | map: "output" | first }}
{{ site.section_post }}
{% raw %}</section>{% endraw %}

{% raw %}<section class="row">{% endraw %}
{{ site.section_pre }}
{{ site.home_page_sections | where:"name", "opinions" | map: "output" | first }}
{{ site.section_post }}

{{ site.section_pre }}
{{ site.home_page_sections | where:"name", "projects" | map: "output" | first }}
{{ site.section_post }}

{{ site.section_pre }}
{{ site.home_page_sections | where:"name", "foo" | map: "output" | first }}
{{ site.section_post }}
{% raw %}</section>{% endraw %}

{{ site.section_pre }}
{{ site.home_page_sections | where:"name", "about" | map: "output" | first }}
{{ site.section_post }}
