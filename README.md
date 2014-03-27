Fantome Theme for Ghost
=====================

Fantome powers my personal blog, [jeremy.hu](http://jeremy.hu). It could power your blog, too!

It's a simple theme, including some features you may find useful:
- Beautiful Syntax Highlighting
- Responsive video embeds
- Responsive everything, in fact!
- Featured Images

Installation
--------------

1. Clone the repository and upload the `fantome` directory to your Ghost blog's `content/themes` folder. If you don't use Git, you can also download the theme [here](https://github.com/jeherve/fantome/archive/master.zip).
2. Add in your Social media profiles in `partials/social.hbs`, and in the `head` of `default.hbs`
3. Add in your Google Analytics UA tag in `default.hbs`
4. Change your contact details at the bottom of `post.hbs`
5. Go to the Settings page of the Ghost backend and select `fantome` from the Theme dropdown.
6. Restart Ghost
7. Enjoy!


Customization
-------------

Fantome supports Ghost's logo and cover image features, and will work perfectly fine with or without them. If you wish to upload a cover image, it will appear above the rest of the page. An uploaded logo replaces the textual blog name.

Ghost doesn't support Featured Images out of the box yet. In this theme, if you add an image and give is the `featured-image` alt attribute, it will replace your header image.

Credits
-------------

Fantome uses some awesome tools:

- **For its color scheme:** [Tomorrow Theme](https://github.com/chriskempson/tomorrow-theme)
- **For Syntax Highlighting:** [highlight.js](https://github.com/isagalaev/highlight.js)
- **For its responsive video embed support:** [FitVids.js](https://github.com/davatron5000/FitVids.js)
- **For its fancy icons:** [Genericons](http://genericons.com/)

It's also based off another Ghost theme, [solar-theme-ghost](https://github.com/redwallhp/solar-theme-ghost), which I liked because of its colors. 

To-Do
-----

- I'd like to make it easier to customize the theme by creating one single file to edit all your personal information.

License
---------

GPLv2 or higher
