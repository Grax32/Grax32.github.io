---
layout: pages
permalink: /2014/05/debugging-visual-studio-2013-code.html
title: Debugging Visual Studio 2013 Code Coverage with ILSpy
---
So I am working on getting 100% code coverage for my tests on <a href="http://g.grax.com/Yv0pwI">fFastMapper </a>(My tool to do high-speed, precompiled mapping between 2 objects). &nbsp;The following method is a single line and was being called in my tests. &nbsp;However, Visual Studio 2013's code coverage tool was reporting that there was a block of code left untested. &nbsp;I couldn't see any way this was possible.<br />
<br />
<pre>public static TReturn Map&lt;TLeft, TReturn&gt;(this fFastMapperFluent&lt;TLeft, TReturn&gt; fluent, TLeft source)
     where TReturn : new()
{
     return fFastMapperInternal&lt;TLeft, TReturn&gt;.mapperFunc(source, new TReturn());
}
</pre>
<br />
So I dragged out ILSpy thinking that I would have to slog through the IL (intermediate language that C# compiles to) to figure this one out. &nbsp;I do this sometimes and find it educational but I don't do it enough that it comes natural. &nbsp;As it turns out, I didn't need to go that far because the decompiled C# version of the method gave me my answer.<br />
<br />
<pre>public static TReturn Map&lt;TLeft, TReturn&gt;(this fFastMapperFluent&lt;TLeft, TReturn&gt; fluent, TLeft source) where TReturn : new()
{
     return fFastMapperInternal&lt;TLeft, TReturn&gt;.mapperFunc(source, <b><span style="color: #990000;">(default(TReturn) == null) ? Activator.CreateInstance&lt;TReturn&gt;() : default(TReturn))</span></b>;
}
</pre>
<br />
Because my generic method supported being called by both value types and reference types, the compiler turns "new TReturn()" into 2 calls. &nbsp;If the type is a value type, the code just returns the default of that type, but if it is a value type, it calls Activate.CreateInstance&lt;TReturn&gt; to create the new instance.<br />
<br />
One solution to get code coverage for this code would have been to write another test that called this code with a value type. &nbsp;However, this code wasn't actually intended to be used with value types so I fixed this by adding the generic constraint of "class".<br />
<br />
<pre>public static TReturn Map&lt;TLeft, TReturn&gt;(this fFastMapperFluent&lt;TLeft, TReturn&gt; fluent, TLeft source)
     where TReturn : <b><span style="color: #990000;">class,</span></b>new()
{
     return fFastMapperInternal&lt;TLeft, TReturn&gt;.mapperFunc(source, new TReturn());
}</pre>
<br />
Now the code compiles as intended and the code coverage tool shows that I have coverage of that method.<br />
