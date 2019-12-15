---
layout: pages
permalink: /2013/06/fast-array-fill-function-revisited.html
title: Fast array fill function (revisited)
tags:
 - coding
---
Update: &nbsp;A reader ( <a class="g-profile" href="https://plus.google.com/113579231183226302374" target="_blank">+Michael Hsu</a>&nbsp;)&nbsp;posted a faster improved version at&nbsp;<a href="https://github.com/mykohsu/Extensions/blob/master/ArrayExtensions.cs">https://github.com/mykohsu/Extensions/blob/master/ArrayExtensions.cs</a>&nbsp;and I blogged about it at&nbsp;<a href="/2014/04/better-array-fill-function.html">https://grax32.com/2014/04/better-array-fill-function.html</a><br />
<br />
Looking back at my <a href="/2011/11/initialize-array-to-value-in-c-very.html">first blog post</a>, I decided to revisit it.<br />
<br />
The function is succinct, blazingly fast, and I am quite proud of it.<br />
<br />
Here's what it does. &nbsp;Given an array of any type (byte, int, string), fill the array with a single value or a repeating pattern of values.<br />
<br />
Usage is very simple.<br />
<br />
Define an array, for example:<br />
<pre>byte[] myByteArray = new byte[12345];</pre>
<br />
Call ArrayFill with the array variable and a value to fill the array with.<br />
<pre>ArrayFill(myByteArray, (byte)3);</pre>
<br />
At this point the array is completely filled with a byte of 3.<br />
<br />
Call it with a second array to fill your array with a repeating pattern.<br />
<pre>ArrayFill(myByteArray, new byte[] { 3, 4, 1, 9 });</pre>
<br />
At this point the array is filled with a repeating pattern of bytes. &nbsp;3,4,1,9,3,4,1,9,3,4,1,9, etc<br />
<br />
<br />
<div style="border: #000080 1px solid; color: black; font-family: 'Courier New', Courier, Monospace; font-size: 10pt;">
<div style="background: #000080; color: white; font-family: Verdana, Tahoma, Arial, sans-serif; font-weight: bold; padding: 2px 5px;">
Code Snippet<span style="background-color: white; color: black; font-family: 'Courier New', Courier, monospace; font-size: 10pt;">&nbsp;</span></div>
<div style="background: #ddd; max-height: 400px; overflow: auto;">
<ol start="1" style="background: #ffffff; margin: 0 0 0 2.5em; padding: 0 0 0 5px;">
<li style="background: #f3f3f3;"><span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: blue;">public</span><span style="background: #ffffff; color: black;"> </span><span style="background: #ffffff; color: blue;">static</span><span style="background: #ffffff; color: black;"> </span><span style="background: #ffffff; color: blue;">void</span><span style="background: #ffffff; color: black;"> ArrayFill&lt;T&gt;(T[] arrayToFill, T fillValue)</span></li>
<li><span style="background: #ffffff; color: black;">{</span></li>
<li style="background: #f3f3f3;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: green;">// if called with a single value, wrap the value in an array and call the main function</span></li>
<li>&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;">ArrayFill(arrayToFill, </span><span style="background: #ffffff; color: blue;">new</span><span style="background: #ffffff; color: black;"> T[] { fillValue });</span></li>
<li style="background: #f3f3f3;"><span style="background: #ffffff; color: black;">}</span></li>
<li>&nbsp;</li>
<li style="background: #f3f3f3;"><span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: blue;">public</span><span style="background: #ffffff; color: black;"> </span><span style="background: #ffffff; color: blue;">static</span><span style="background: #ffffff; color: black;"> </span><span style="background: #ffffff; color: blue;">void</span><span style="background: #ffffff; color: black;"> ArrayFill&lt;T&gt;(T[] arrayToFill, T[] fillValue)</span></li>
<li><span style="background: #ffffff; color: black;">{</span></li>
<li style="background: #f3f3f3;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: blue;">if</span><span style="background: #ffffff; color: black;"> (fillValue.Length &gt;= arrayToFill.Length)</span></li>
<li>&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;">{</span></li>
<li style="background: #f3f3f3;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: blue;">throw</span><span style="background: #ffffff; color: black;"> </span><span style="background: #ffffff; color: blue;">new</span><span style="background: #ffffff; color: black;"> </span><span style="background: #ffffff; color: #2b91af;">ArgumentException</span><span style="background: #ffffff; color: black;">(</span><span style="background: #ffffff; color: #a31515;">"fillValue array length must be smaller than length of arrayToFill"</span><span style="background: #ffffff; color: black;">);</span></li>
<li>&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;">}</span></li>
<li style="background: #f3f3f3;">&nbsp;</li>
<li>&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: green;">// set the initial array value</span></li>
<li style="background: #f3f3f3;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: #2b91af;">Array</span><span style="background: #ffffff; color: black;">.Copy(fillValue, arrayToFill, fillValue.Length);</span></li>
<li>&nbsp;</li>
<li style="background: #f3f3f3;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: blue;">int</span><span style="background: #ffffff; color: black;"> arrayToFillHalfLength = arrayToFill.Length / 2;</span></li>
<li>&nbsp;</li>
<li style="background: #f3f3f3;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: blue;">for</span><span style="background: #ffffff; color: black;"> (</span><span style="background: #ffffff; color: blue;">int</span><span style="background: #ffffff; color: black;"> i = fillValue.Length; i &lt; arrayToFill.Length; i *= 2)</span></li>
<li>&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;">{</span></li>
<li style="background: #f3f3f3;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: blue;">int</span><span style="background: #ffffff; color: black;"> copyLength = i;</span></li>
<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: blue;">if</span><span style="background: #ffffff; color: black;"> (i &gt; arrayToFillHalfLength)</span></li>
<li style="background: #f3f3f3;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;">{</span></li>
<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;">copyLength = arrayToFill.Length - i;</span></li>
<li style="background: #f3f3f3;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;">}</span></li>
<li>&nbsp;</li>
<li style="background: #f3f3f3;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;"></span><span style="background: #ffffff; color: #2b91af;">Array</span><span style="background: #ffffff; color: black;">.Copy(arrayToFill, 0, arrayToFill, i, copyLength);</span></li>
<li>&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: #ffffff; color: black;">}</span></li>
<li style="background: #f3f3f3;"><span style="background: #ffffff; color: black;">}</span></li>
</ol>
</div>
</div>
