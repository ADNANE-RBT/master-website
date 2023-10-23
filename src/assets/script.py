import os

# Specify the path to the directory
directory_path = "./students"

# Get a list of all the files in the directory
file_list = os.listdir(directory_path)

# Iterate through the list and print the file names
for file_name in file_list:
    print(file_name)
