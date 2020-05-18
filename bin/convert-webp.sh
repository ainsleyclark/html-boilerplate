#!/bin/bash

echo 'Processing files and converting to webp'
find . -type f \( -name "*.png" -or -name "*.jpg" -or -name "*.jpeg"  \) | xargs -P 8 -I {} sh -c 'cwebp -q 80 $1 -o "${1%}.webp"' _ {} \;
