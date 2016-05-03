Grax Coding: Announcing fFastMapper release 0.5

(Sorry for any confusion. &nbsp;The name HyperMapper is trademarked by another organization, so I had to change it).<br />
<br />
fFastMapper&nbsp;is ready and available via NuGet. <br />
<br />
Use "Install-Package fFastMapper"<br />
<br />
fFastMapper&nbsp;is a component to map property values between objects. <br />
<br />
<ul>
<li>Maps are statically defined based upon the types being mapped</li>
<ul>
<li>Only a single map exists in the system for mapping object X to object Y</li>
</ul>
<li>By default, mappings are bi-directional</li>
<li>Mappings of complex objects fail silently (no null reference exceptions)</li>
<li>Mapping actions are performed very quickly</li>
<ul>
<li>In my tests of a simple object map run one million times, AutoMapper took about 38 times as long to complete the mapping</li>
<table><tbody>
<tr><td style="border-bottom: lightgrey 1px solid; border-left: lightgrey 1px solid; border-right: lightgrey 1px solid; border-top: lightgrey 1px solid; text-align: right;">AutoMapper took&nbsp;342,179,880 ticks</td></tr>
<tr><td style="border-bottom: lightgrey 1px solid; border-left: lightgrey 1px solid; border-right: lightgrey 1px solid; border-top: lightgrey 1px solid; text-align: right;">fFastMapper&nbsp;took&nbsp;8,836,513 ticks</td></tr>
<tr><td style="border-bottom: lightgrey 1px solid; border-left: lightgrey 1px solid; border-right: lightgrey 1px solid; border-top: lightgrey 1px solid; text-align: right;">Direct coded function took&nbsp;7,004,837 ticks</td></tr>
</tbody></table>
</ul>
<li>Auto-initializes map on first use based on name and type matching.</li>
</ul>
<b>Usage:</b><br />
<h4>
Quick Start:</h4>
using Grax.fFastMapper;<br />
...<br />
<br />
var dest =&nbsp; fFastMap.MapperFor&lt;SourceType,DestinationType&gt;(source);<br />
<br />
or<br />
<br />
var dest = new DestinationType();<br />
fFastMap.Map(source,dest);<br />
<br />
or<br />
<br />
var dest = new DestinationType()<br />
fFastMap.MapperFor&lt;SourceType,DestinationType&gt;(source, dest);<br />
<br />
<h4>
Global Configuration (affects maps not created yet):</h4>
using Grax.fFastMapper;<br />
<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fFastMap<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .GlobalSettings()<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .SetAutoInitialize(false)<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .SetDefaultMappingDirection(fFastMap.MappingDirection.LeftToRight);<br />
<br />
<h4>
Map Configuration (affects property mapping functions (ClearMappers, AddDefaultPropertyMappers, AddPropertyMapper, DeletePropertyMapper that run after this command)</h4>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fFastMap<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .MapperFor&lt;n1, n2&gt;()<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .SetMappingDirection(fFastMap.MappingDirection.LeftToRight)<br />
<h4>
Mapping Functions</h4>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fFastMap<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .MapperFor&lt;n1, n2&gt;()<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .ClearMappers()<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .AddDefaultPropertyMappers()<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .DeletePropertyMapper(left =&gt; left.Id)<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .AddPropertyMapper(left =&gt; left.Id, right =&gt; right.Id);<br />
<br />
<h4>
Debugging/Testing Functions</h4>
fFastMap.MapperFor&lt;n1,n2&gt;().Mappings() gives you a List of Tuples where the Item1 property is a string representation of the left (source) side of the mapping and the Item2 property is a string representation of the right (destination) side of the mapping.<br />
<br />
fFastMap.MapperFor&lt;n1,n2&gt;().MappingsView() gives you a string describing all of the mappings for these types.<br />
<h4>
Tips</h4>
<div>
ClearMappers will remove all mappings. &nbsp;It will not cause the Map command to fail, just no data will be mapped when that command runs.</div>
<div>
<br /></div>
<div>
Please note that any "MapperFor&lt;n1,n2&gt;" is equivalent to any other. &nbsp;i.e.</div>
<div>
var x = fFastMap.MapperFor&lt;n1,n2&gt;();</div>
<div>
var z = fFastMap.MapperFor&lt;n1,n2&gt;();</div>
<div>
<br /></div>
<div>
x.ClearMappers();</div>
y.Map(source,dest); // all Mappers were just cleared in previous line. &nbsp;No data transferred.<br />
<br />
