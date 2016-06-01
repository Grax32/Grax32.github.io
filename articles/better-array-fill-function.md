---
layout: pages
permalink: /2014/04/better-array-fill-function.html
title: Better Array Fill Function
tags:
 - coding
---
So last week, <a class="g-profile" href="https://plus.google.com/113579231183226302374" target="_blank">+Michael Hsu</a>&nbsp;visited my blog and took my array fill function and <a href="https://github.com/mykohsu/Extensions/blob/master/ArrayExtensions.cs">made it better</a>.<br />
<br />
First, he turned it into an extension method and changed the signature so that the overload isn't needed. <br />
<pre >   public static class ArrayExtensions
    {
        public static void Fill&lt;T&gt;&gt;(this T[] destinationArray, params T[] value)
</pre>
<br />
Next, he took the if statement that I was executing inside the for loop and re-factored it so that it was not needed. <br />
<br />
First rule of high-performing code, anything you can do before or after your loop is going to perform better than something you execute for each time through the loop.<br />
<br />
Where I had<br />
<br />
<pre> int arrayToFillHalfLength = arrayToFill.Length / 2;

 for (int i = fillValue.Length; i &lt; arrayToFill.Length; i *= 2)
 {
  int copyLength = i;
  if (i &gt; arrayToFillHalfLength)
  {
   copyLength = arrayToFill.Length - i;
  }

  Array.Copy(arrayToFill, 0, arrayToFill, i, copyLength);
 }
</pre>
<pre></pre>
Michael re-factored to
<br />
<br />
<pre> int arrayToFillHalfLength = destinationArray.Length / 2;
 int copyLength;

 for(copyLength = value.Length; copyLength &lt; arrayToFillHalfLength; copyLength &lt;&lt;= 1)
 {
  Array.Copy(destinationArray, 0, destinationArray, copyLength, copyLength);
 }

 Array.Copy(destinationArray, 0, destinationArray, copyLength, destinationArray.Length - copyLength);

</pre>
This has a number of advantages.

<br />
<ol>
<li><span style="color: #333333; font-family: Consolas, Liberation Mono, Courier, monospace;"><span style="font-size: 12px; line-height: 18px;">Since arrayToFillHalfLength is a variable, we don't have to look up the array length property each time through the loop.</span></span></li>
<li><span style="color: #333333; font-family: Consolas, Liberation Mono, Courier, monospace;"><span style="font-size: 12px; line-height: 18px;">A bit shift operation is cheaper than a multiply operation.</span></span></li>
<li><span style="color: #333333; font-family: Consolas, Liberation Mono, Courier, monospace;"><span style="font-size: 12px; line-height: 18px;">This is the big one. Since the loop stops 1 short of the final copy operation, the previous "if" operation is effectively handled by the loop without having to execute the if each time through the loop.</span></span></li>
<li><span style="color: #333333; font-family: Consolas, Liberation Mono, Courier, monospace;"><span style="font-size: 12px; line-height: 18px;">The copyLength variable is defined once, outside of the loop.</span></span></li>
</ol>
When I compared the speed of Michael's version of the method, my version took 252 milliseconds to fill a&nbsp;357,913,941 sized byte array with a five byte pattern and Michael's improved version did the same thing in 156 milliseconds.<br />
<br />
See the<a href="https://github.com/mykohsu/Extensions/blob/master/ArrayExtensions.cs"> improved version here</a>.

<br />
