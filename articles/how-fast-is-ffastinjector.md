---
layout: pages
permalink: /2013/06/how-fast-is-ffastinjector.html
title: How fast is fFastInjector?
tags:
 - software
---
I downloaded Danial Palme's wonderful <a href="http://www.palmmedia.de/blog/2011/8/30/ioc-container-benchmark-performance-comparison">IoC Container Benchmark</a>&nbsp;and added an adapter for my own fFastInjector. &nbsp;As you can see from the results, fFastInjector is clearly faster than all other IoC containers, even managing to beat Hiro, Munq, and Funq by a significant margin.<br />
<br />
It is also tinier than TinyIOC. &nbsp;In fact, the only smaller IoC container of those I tested against was MicroSliver at 12 kb versus fFastInjector at 14kb.<br />
<br />
I have included 2 sets of graphs below. &nbsp;The first 3 show the relative speeds of all of the containers listed. &nbsp;The next 3 show the relative speeds of the 5 fastest containers. &nbsp;(I left out Speedioc due to some problems running it, but it also ranks near the top on speed).<br />
<br />
For more information, and installation and usage instructions, see my <a href="/2013/05/fFastInjector-Initial.html">previous post</a>.<br />
<div>
<br />
<br />
<table>
<tbody>
<tr><th>Container</th><th>Singleton</th><th>Transient</th><th>Combined</th><th></th></tr>
<tr><th><span style="background-color: yellow;">fFastInjector 0.8.2RC</span></th><td><span style="background-color: yellow;">62</span></td><td><span style="background-color: yellow;">76</span></td><td><span style="background-color: yellow;">115</span></td><td></td></tr>
<tr><th>No</th><td>108</td><td>116</td><td>134</td><td></td></tr>
<tr><th>AutoFac 3.0.2</th><td>1027</td><td>2361</td><td>7020</td><td></td></tr>
<tr><th>Caliburn.Micro 1.5.1</th><td>259</td><td>336</td><td>831</td><td></td></tr>
<tr><th>Catel 3.5</th><td>413</td><td>1436</td><td>4170</td><td></td></tr>
<tr><th>Dynamo 3.0.2.0</th><td>126</td><td>158</td><td>231</td><td></td></tr>
<tr><th>Funq 1.0.0.0</th><td>146</td><td>176</td><td>393</td><td></td></tr>
<tr><th>Griffin 1.1.0</th><td>391</td><td>392</td><td>892</td><td></td></tr>
<tr><th>Hiro 1.0.3</th><td>188</td><td>182</td><td>199</td><td></td></tr>
<tr><th>LightCore 1.5.1</th><td>312</td><td>3684</td><td>18534</td><td></td></tr>
<tr><th>LightInject 3.0.0.5</th><td>262</td><td>288</td><td>460</td><td></td></tr>
<tr><th>LinFu 2.3.0.41559</th><td>3934</td><td>23539</td><td>62942</td><td></td></tr>
<tr><th>Mef 4.0.0.0</th><td>3355</td><td>11976</td><td>34630</td><td></td></tr>
<tr><th>MicroSliver 2.1.6.0</th><td>248</td><td>631</td><td>2438</td><td></td></tr>
<tr><th>Mugen 3.5.1</th><td>511</td><td>762</td><td>2057</td><td></td></tr>
<tr><th>Munq 3.1.6</th><td>193</td><td>216</td><td>674</td><td></td></tr>
<tr><th>Ninject 3.0.1.10</th><td>9292</td><td>29092</td><td>84187</td><td></td></tr>
<tr><th>Petite 0.3.2</th><td>153</td><td>168</td><td>418</td><td></td></tr>
<tr><th>SimpleInjector 2.2.3</th><td>118</td><td>142</td><td>165</td><th></th></tr>
<tr><th>Spring.NET 1.3.2</th><td>1020</td><td>16963</td><td>46680</td><td></td></tr>
<tr><th>StructureMap 2.6.4.1</th><td>2261</td><td>2504</td><td>7064</td><td></td></tr>
<tr><th>TinyIOC 1.2</th><td>416</td><td>2328</td><td>9538</td><td></td></tr>
<tr><th>Unity 3.0.1304.0</th><td>3403</td><td>5174</td><td>15544</td><td></td></tr>
<tr><th>Windsor 3.2.0</th><td>858</td><td>3189</td><td>8831</td><td></td></tr>
</tbody></table>
<div class="separator" style="clear: both; text-align: center;">
<br /></div>
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://2.bp.blogspot.com/-E2FRcZ_YvQI/UaoXxcDNApI/AAAAAAAAlrY/p0lwWXUsg7U/s1600/01-Singleton.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" height="480" src="http://2.bp.blogspot.com/-E2FRcZ_YvQI/UaoXxcDNApI/AAAAAAAAlrY/p0lwWXUsg7U/s640/01-Singleton.png" width="640" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Entire List -- Singleton</td></tr>
</tbody></table>
<br />
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://1.bp.blogspot.com/-8fHXu3IHgKg/UaoXxXC6_LI/AAAAAAAAlrg/xkmqdTP8Qfo/s1600/02-Transient.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" height="480" src="http://1.bp.blogspot.com/-8fHXu3IHgKg/UaoXxXC6_LI/AAAAAAAAlrg/xkmqdTP8Qfo/s640/02-Transient.png" width="640" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Entire List -- Transient</td></tr>
</tbody></table>
<br />
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://2.bp.blogspot.com/-E8LqDu5qgII/UaoXxYaArCI/AAAAAAAAlrc/xTGqDenSGVU/s1600/03-Combined.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" height="480" src="http://2.bp.blogspot.com/-E8LqDu5qgII/UaoXxYaArCI/AAAAAAAAlrc/xTGqDenSGVU/s640/03-Combined.png" width="640" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Entire List -- Combined</td></tr>
</tbody></table>
<br />
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://2.bp.blogspot.com/-GTN_i0XbtiQ/UaoXzteDm8I/AAAAAAAAlrw/KxUVCEaR5nU/s1600/01-Singleton.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" height="480" src="http://2.bp.blogspot.com/-GTN_i0XbtiQ/UaoXzteDm8I/AAAAAAAAlrw/KxUVCEaR5nU/s640/01-Singleton.png" width="640" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Five fastest -- Singleton</td></tr>
</tbody></table>
<br />
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://4.bp.blogspot.com/-7mlzJKXNYds/UaoXzhItAmI/AAAAAAAAlr4/bmm9LvFuBk4/s1600/02-Transient.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" height="480" src="http://4.bp.blogspot.com/-7mlzJKXNYds/UaoXzhItAmI/AAAAAAAAlr4/bmm9LvFuBk4/s640/02-Transient.png" width="640" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Five Fastest -- Transient</td></tr>
</tbody></table>
<br />
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://3.bp.blogspot.com/-COku8NgmfCE/UaoXzgRvInI/AAAAAAAAlr0/1WO2KzpK2jE/s1600/03-Combined.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" height="480" src="http://3.bp.blogspot.com/-COku8NgmfCE/UaoXzgRvInI/AAAAAAAAlr0/1WO2KzpK2jE/s640/03-Combined.png" width="640" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Five fastest -- Combined</td></tr>
</tbody></table>

</div>
