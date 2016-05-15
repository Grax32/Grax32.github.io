---
layout: pages
permalink: /2013/04/generic-tryparse.html
title: Generic TryParse, convert string to any type
---
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;"><pre style="background-position: initial initial; background-repeat: initial initial; font-family: Consolas;">I came up with this nifty little extension method today.  This method works in a similar fashion to TryParse but you can pass in any type.  You may want to throw an exception if converter == null, as that means there is no converter available for the specified type.</pre>
<pre style="background-position: initial initial; background-repeat: initial initial; font-family: Consolas;"></pre>
<pre style="background-position: initial initial; background-repeat: initial initial; font-family: Consolas;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: blue;">using</span>&nbsp;System.ComponentModel;
</pre>
<pre style="background-position: initial initial; background-repeat: initial initial; font-family: Consolas;"></pre>
<pre style="background-position: initial initial; background-repeat: initial initial; font-family: Consolas;">...</pre>
</pre>
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;"></pre>
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: blue;">public</span>&nbsp;<span style="color: blue;">static</span>&nbsp;<span style="color: blue;">bool</span>&nbsp;GenericTryParse&lt;T&gt;(<span style="color: blue;">this</span>&nbsp;<span style="color: blue;">string</span>&nbsp;input,&nbsp;<span style="color: blue;">out</span>&nbsp;T&nbsp;value)
&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: blue;">var</span>&nbsp;converter&nbsp;=&nbsp;<span style="color: #2b91af;">TypeDescriptor</span>.GetConverter(<span style="color: blue;">typeof</span>(T));
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: blue;">if</span>&nbsp;(converter&nbsp;!=&nbsp;<span style="color: blue;">null</span>&nbsp;&amp;&amp;&nbsp;converter.IsValid(input))
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;=&nbsp;(T)converter.ConvertFromString(input);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: blue;">return</span>&nbsp;<span style="color: blue;">true</span>;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;=&nbsp;<span style="color: blue;">default</span>(T);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: blue;">return</span>&nbsp;<span style="color: blue;">false</span>;
&nbsp;&nbsp;&nbsp;&nbsp;}</pre>
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;"></pre>
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;"></pre>
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;"><a class="g-profile" href="http://plus.google.com/108573066018819777334" target="_blank">+Scott Hanselman</a>&nbsp;has a <a href="http://www.hanselman.com/blog/TypeConvertersTheresNotEnoughTypeDescripterGetConverterInTheWorld.aspx">post</a> that talks more about TypeDescriptor.GetConverter and how to roll your own converters.  Also read the comments on that post for some potential gotchas with using TypeConverters.</pre>
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;"></pre>
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;"></pre>
