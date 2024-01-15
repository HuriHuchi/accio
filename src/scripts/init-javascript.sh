#!/bin/bash

project_name="js-playground"

cd .repos

# js-playground 폴더 생성
mkdir -p "$project_name"

# index.html 파일 생성
cat <<EOL > "$project_name/index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>js-playground</title>
  <!-- Add your HTML head content here -->
</head>
<body>
  <h1>Hello, js-playground!</h1>
  <!-- Add your HTML body content here -->
  <script src="index.js"></script>
</body>
</html>
EOL

# index.js 파일 생성
echo "// Add your JavaScript code here" > "$project_name/index.js"

exit 0

