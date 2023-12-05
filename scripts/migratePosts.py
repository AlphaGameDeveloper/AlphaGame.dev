# https://downloads.mysql.com/docs/connector-python-en.pdf

import mysql.connector
import re
import os

if os.path.isdir("output") == False:
    os.mkdir("output")
    
# damien dont be an idiot and open source your passwords you moron
# ok past self ima not be an idiot :)
CONNECT_INFO = {
    "user": "admin",
    "password": "PASSWORD",
    "host": "HOST",
    "database": "wordpress"
}

connection = mysql.connector.connect(**CONNECT_INFO)
cursor = connection.cursor()

query = "SELECT post_date,post_content,post_title FROM wp_posts WHERE post_status='publish' AND post_type='post'"

cursor.execute(query)

def clean_string(input_string):
    # Remove characters other than lowercase a-z and dashes
    cleaned_string = re.sub(r'[^a-z0-9]+$', '', re.sub(r'[^a-z0-9]+', '-', input_string))
    
    return cleaned_string


for (date,content,title) in cursor:
    formattedDate = date.strftime("%Y-%m-%d")
    formattedName = title.replace(" ", "-").lower()
    formattedName = clean_string(formattedName)
    filename = "output/{0}-{1}.md".format(formattedDate, formattedName)

    template = """---
layout: post
title: \"{0}\"
---
{1}"""
    with open(filename, "w") as file:
        data = template.format(title, content)
        file.write(data)
