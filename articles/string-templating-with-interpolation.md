---
layout: pages
permalink: /2014/10/string-templating-with-interpolation.html
title: String templating with Interpolation Format Provider
tags:
 - coding
---
So I wrote this <a href="/2014/10/tiny-template-engine-pattern-that-you.html">other blog post</a> about a templating pattern that I like for simplicity and that it is something I can remember. &nbsp;The response to it was somewhere between meh and ick but the resulting discussion gave me some ideas. (I'm still proud of it by the way)<br />
<br />
C# and .NET have some interfaces and code surrounding ToString() and string.Format() that I decided to take advantage of. <br />
<br />
The goal here is to enable to string.Format to insert either property/field values or dictionary values based on the property names or keys.<br />
<br />
The resulting InterpolationFormatProvider is a provider that is passed to the string.Format. &nbsp;The format strings look like "{0:FirstName}" to display the FirstName property or "{0:BirthDate:D}" to display the BirthDate datetime value using the "D" datetime formatting.<br />
<br />
<pre>var dates = new Dictionary<string datetime="">
{
    { "Anniversary", new DateTime(2014,4,4) }
};

var person = new 
{
    FullName = "John Grax", 
    BirthDate = new DateTime(1978, 6, 6), 
    SignificantDates = dates 
};

string.Format(
  new InterpolationFormatProvider { ConvertNullsToEmptyStrings = true }, 
  "I am {0:FullName}. My anniversary is {0:SignificantDates:Anniversary:D}. Current Time {1:D}", person, DateTime.Now);
</string></pre>
<br />
Now, good or bad, I made is an assumption that if a type implements IFormattable, that we should use that format instead of using the interpolation formatting. <br />
<br />
The plus side of this is that we can create a format like "{0:SignificantDates:Anniversary:D}" and the provider will look at the first argument passed to string.format (the "0") and then fetch the "SignificantDates" property. <br />
<br />
This happens to be a Dictionary with string keys and DateTime values in this case. &nbsp;In this case, it will look to fetch the Anniversary value from the dictionary. &nbsp;Finally, it sees that the DateTime type implements IFormattable, so it passed the "D" to the DateTime's formatting and returns the expected result.<br />
<br />
The downside is that you can't use the InterpolationFormatProvider to get properties by name from a type that implements the IFormattable interface.<br />
<br />
Anyhow, I am interested in feedback, comments, recommendations, etc. &nbsp;Let me know what you think.<br />
<br />
Add this to your project using the <a href="https://www.nuget.org/packages/InterpolationFormatProvider/">NuGet</a> command 
<br />
<pre>install-package&nbsp;InterpolationFormatProvider</pre>
<br />
Check out the source code at&nbsp;<a href="https://github.com/Grax32/InterpolationFormatProvider/">https://github.com/Grax32/InterpolationFormatProvider/</a> &nbsp;The unit test is a good place to look for sample usage code.<br />
<br />
