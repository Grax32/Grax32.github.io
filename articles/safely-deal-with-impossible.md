---
layout: pages
permalink: /2014/09/safely-deal-with-impossible.html
title: Safely deal with the impossible
tags:
 - coding
---
I wanted to point out this little hidden coding gem from Ted Neward's column in the <a href="http://msdn.microsoft.com/en-us/magazine/dn781363.aspx">September 2014 issue of MSDN Magazine</a>.<br />
<br />
<pre style="border: 0px; font-family: inherit; font-size: 13px; line-height: 16.0016021728516px; outline: 0px; padding: 0px; white-space: pre-wrap;"><code class="xml" style="border: 0px; font-family: inherit; font-style: inherit; font-weight: inherit; margin: 0px; outline: 0px; padding: 0px;"><span style="background-color: white; color: #333333;">&nbsp; if (locAmt == remAmt)
&nbsp; {
&nbsp; ...
&nbsp; }
&nbsp; else if (locAmt &lt; remAmt)
&nbsp; {
&nbsp; ...
</span><pre style="border: 0px; font-family: inherit; font-size: 13px; line-height: 16.0016021728516px; outline: 0px; padding: 0px; white-space: pre-wrap;"><code class="xml" style="border: 0px; font-family: inherit; font-style: inherit; font-weight: inherit; margin: 0px; outline: 0px; padding: 0px;"><span style="background-color: white; color: #333333;">&nbsp; }
&nbsp; else if (locAmt &gt; remAmt)
&nbsp; {
&nbsp; ...
&nbsp; }
&nbsp; else
</span><span style="background-color: yellow; color: #990000;">&nbsp;&nbsp;&nbsp; throw new Exception("How is this possible?");</span><span style="background-color: white; color: #333333;">
&nbsp; }</span></code></pre>
<span style="background-color: white; color: #333333;">
</span></code></pre>
Why does he throw an exception when it is clearly impossible to reach that line of code? &nbsp;If you check for equal to, less than, and greater than, it is impossible for a value to sneak through.<br />
<br />
The answer that is that this little bit of code can make find a future error incredibly easier compared to the alternative. &nbsp;It is true that the line of code will never be reached, so it doesn't currently effect our code except to provide a negligible increase in the size. &nbsp;The payback comes when you got to refactor this section of code and leave one of the pathways open.<br />
<br />
Say you commented out the greater than branch or accidentally replaced the greater-than symbol with a less-than symbol, the resulting exception would be right next to the mistake you made and would be very easy to spot and fix.<br />
<br />
I like to do the same thing in switch statements when applicable.<br />
<br />
&nbsp; &nbsp; &nbsp; &nbsp; public enum Timeline<br />
&nbsp; &nbsp; &nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; None,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Current,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; RecentHistory,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; AncientHistory<br />
&nbsp; &nbsp; &nbsp; &nbsp; }<br />
<br />
&nbsp; &nbsp; &nbsp; &nbsp; public DateTime GetTimelineEnd(Timeline timeline)<br />
&nbsp; &nbsp; &nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; switch (timeline)<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; case Timeline.None:<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; throw new Exception("None is not a usable value");<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; case Timeline.Current:<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return DateTime.Now;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; case Timeline.RecentHistory:<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return DateTime.Now.AddYears(-10);<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; case Timeline.AncientHistory:<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return DateTime.Now.AddYears(-100);<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; default:<br />
<span style="background-color: yellow;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color: #990000;"> throw new Exception("Unexpected timeline value");</span></span><br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br />
&nbsp; &nbsp; &nbsp; &nbsp; }<br />
<br />
&nbsp;If the goal of the switch statement is to handle all possibilities, I like to throw an exception in the "default" branch.<br />
<br />
Someone could add a new value to the Timeline enum or the function could be called with a value that is not part of the enum. "GetTimelineEnd((Timeline)65536)" is valid code, even though 65536 is not a valid Timeline enum entry.<br />
<br />
If that happens, the default branch throwing an exception will bring our attention quickly to the right issue and prevent other parts of our code from possibly having to deal with undefined or unexpected data.<br />
<br />
<br />
<br />
