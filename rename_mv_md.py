import os

current_dir = "/Users/seth.corker/projects/personal/game-start-2-finish/content/blog/"

os.chdir(current_dir)

for file in os.listdir():
    folder_name = file.split(".")[0]
    os.mkdir(folder_name)
    os.rename(current_dir + file, current_dir + folder_name + "/index.md")
