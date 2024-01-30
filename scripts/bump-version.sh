#!/bin/bash

# Get the current version from package.json
current_version=$(jq -r '.version' package.json)

# Increment the patch version (z) by 1
new_version=$(echo $current_version | awk -F. '{print $1 "." $2 "." $3 + 1}')

# Update the version in package.json
jq --arg new_version "$new_version" '.version = $new_version' package.json > temp.json && mv temp.json package.json

echo "Version bumped to $new_version"
