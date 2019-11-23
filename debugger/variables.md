---
layout: blank
title: Debug
permalink: /debug/variables
tags: dbg
---
{
    "site": {{ site | jsonify }}
    "page": {{ page | jsonify }}
    "layout": {{ layout | jsonify }}
    "content": {{ content | jsonify }}
    "paginator": {{ paginator | jsonify }}
}
