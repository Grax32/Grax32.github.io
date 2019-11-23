---
layout: blank
title: Debug
permalink: /debug/variables
tags: dbg
---
<html><body>
<pre>
    site: {{ site | jsonify | escape }}
    page: {{ page | jsonify | escape }}
    layout: {{ layout | jsonify | escape }}
    content: {{ content | jsonify | escape }}
    paginator: {{ paginator | jsonify | escape }}
</pre>
</body>
</html>
