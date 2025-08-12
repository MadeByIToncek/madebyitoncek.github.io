+++
categories = ['Cool stuff']
tags = ['Streaming', 'Godot', 'Development']
title = 'Using Godot overlays in production'
date = 2025-08-12T14:00:00+01:00
draft = true
cover.image = "/posts/godot-overlays-in-prod/images/au_2025_32.png"
cover.alt = "Questionare (the name of that software) being used for generic polling."
cover.caption = "Questionare being used for polling during regular monday broadcasts."
cover.relative = false 
+++

A few months ago, I've posted a [blog post](/posts/is-godot-the-tool-for-overlays/) here about using Godot for broadcast production as the overlay/graphics generator. While having already used it for real broadcast, I've always been the one using these tools. They were a bit buggy, bit unstable and were basically held together by my hopes and dreams (and a lot of work).

But since then, I've managed to make a software, which is production-ready and *kinda* user friendly. So without furhter ado, meet [Questionare](https://github.com/MadeByIToncek/iQL-Questionare/).exe

{{< figure
  src="/posts/godot-overlays-in-prod/images/questionare_backgroundless.png"
  alt="Questionare as I see it"
  caption="How I see & control the overlay."
  class="ma0 w-75"
>}}

Before we continue, I'd like to clarify. You can study this piece of software, you can even use it. But please, clearly state that this is my work. You can also contact me and I'll hapilly make you your own version. This version was made for IQLandia

You had already seen Questionare in the previous [post](/posts/is-godot-the-tool-for-overlays/). First edition of this software was made for a regular broadcast session on 5. June, 2023. It was written in Java, rendered in FHD and captured by OBS. I'm not even sure whether I still have that source code but it was rought. 

{{< figure
  src="/posts/godot-overlays-in-prod/images/questionare_v-1.png"
  alt="Original Questionare version"
  caption="Original Questionare version"
  class="ma0 w-75"
>}}

I've had a lot of trouble with capturing YouTube chat and transmitting it over websocket to the rendering app. It was unstable, but it somehow ended up working during the entire stream.

It would be used again, after a small rewrite on the 10. July, 2023. This time, it looked more similar to the modern version, thanks to the redesign, I did after the last stream.

{{< figure
  src="/posts/godot-overlays-in-prod/images/questionare_v0.png"
  alt="Questionare v0"
  caption="Questionare v0, now with colors!"
  class="ma0 w-75"
>}}

Yes, the colors were a bit more muted then and this tool was still using the TypeScript module, which I found somewhere and which worked over WebSocket, but it was more stable (thanks to me increasing the idle timeout, stupid bug as always).

The next evolution of this tool would come during the autumn of 2024. 