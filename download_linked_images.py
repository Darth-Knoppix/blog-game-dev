import os
import wget

current_dir = "/Users/seth.corker/projects/personal/game-start-2-finish/content/blog/"

os.chdir(current_dir)
image_start = "[![]("

for folder in os.listdir():
    os.chdir(current_dir + "/" + folder)
    file = open("index.md", "r")
    content = file.readlines()

    new_file_content = ""

    # download images
    for line in content:
        if line.startswith(image_start):
            hyperlink = line.replace(image_start, "")
            hyperlink = hyperlink.rsplit(")]")[0]

            wget.download(hyperlink)

    file.close()
