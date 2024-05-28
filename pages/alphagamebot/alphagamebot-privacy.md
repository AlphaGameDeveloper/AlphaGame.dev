---
layout: default
permalink: /alphagamebot/privacy
title: AlphaGameBot Privacy Policy
modified: 4/27/2024
---
[<- Return to AlphaGameBot](/alphagamebot/)

# AlphaGameBot Privacy Policy
AlphaGameBot is *(in my somewhat biased opinion)* quite privacy-focused.  It does not track much data, and the data it *does* track
is only data that is essential for the bot to function correctly.  Examples of data that the bot
will track are:
* Bot Errors when you use the *"Report Error"* button.
    * WHen this happens, error information is sent to a Discord webhook, along with stuff like:
        * Username (And server nick if applicable)
        * Python error message
        * Python error stack trace
        * Command arguments used (in order to replicate your error)
    * You can see this data being sent in the file `agb/system/commandError.py` in the GitHub repository, lines 164 through 187 (at the time of writing this, line numbers may have changed). 

## Data collected passively
Data is not sold.  Period.  I DO NOT SELL YOUR DATA, NOR DO I SAVE YOUR INTERACTIONS.
Anonymous information is put in the bot's Python console.  Examples of output is

```
listener/INFO - /xkcd called
cogwheel/INFO - Web request called to https://xkcd.com/info.0.json
cogwheel/INFO - Web request finished. StatusCode=200 (OK), time=2ms from_cache:yes
listener/INFO - /meme called
cogwheel/INFO - Web request called to https://meme-api.com/gimme
cogwheel/INFO - Web request finished.  StatusCode=200 (OK), time=7ms from_cache:disabled
... etc ...
```

No personally identifiable information (PII) is put in the bot's console. This information is only used
for debugging purposes and to help ensure the quality of AlphaGameBot.

---
**These terms were last updated on {{ page.modified }}**

*Note: I reserve the right to update these terms anytime.  New changes are made effective 2 weeks after being initially posted.*