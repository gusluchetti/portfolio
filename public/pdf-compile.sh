#!/bin/bash

# Create light and dark mode versions with different filenames
cp cv.tex light-cv.tex
sed 's/\\darkmodefalse/\\darkmodetrue/' cv.tex > dark-cv.tex

# Compile both versions
tectonic light-cv.tex
tectonic dark-cv.tex

# Clean up the temporary tex files (optional)
rm light-cv.tex dark-cv.tex
