storylineImage
==============

tell any story in unique manner using Image background, Title,Description

Download 'Demo' folder and run 'index.html' in browser to view demo.

How to use:
1.Download storyLine.css,storyLine.html,storyline.js
2.place storyline.html in root directory of your site.
3.place storyLine.css and storyline.js in appropriate places
4.import them to your html.
5.give storyLine as  dependency to your angular app.
6.use <story-line url="your_json_url"></story-line>
7.open your Page and enjoy.

Format of your JSON is:
{
    "logo":"your logo",
    "chapters": [
        {
            "ChapterTitle": "title of group",
            "pages": [
                {
                    "title": "your title",
                    "description": "your description",
                    "image": "your background image of page"
                }
            ]
        }
    ]
}
Notice, chapters and pages are arrays.
