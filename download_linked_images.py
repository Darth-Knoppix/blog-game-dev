import os
import wget

current_dir = "/Users/seth.corker/projects/personal/benevolent-bytes-blog/content/posts/"

os.chdir(current_dir)
image_start = "![]("

for folder in os.listdir():
    if folder.startswith("."):
        continue
    os.chdir(current_dir + "/" + folder)
    file = open("index.mdx", "r")
    content = file.readlines()

    # download images
    for line in content:
        if line.startswith("![](/content"):
            continue
        if line.startswith(image_start):
            hyperlink = line.replace("![](", "")

            hyperlink = hyperlink.rsplit(")")[0].strip()

            os.system("wget --no-check-certificate " + hyperlink)

    file.close()
