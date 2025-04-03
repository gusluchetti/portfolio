#!/bin/bash

# Create light and dark mode versions with different filenames
cp cv.tex light-cv.tex
cp cv_pt-br.tex light-cv_pt-br.tex
sed 's/\\darkmodefalse/\\darkmodetrue/' cv.tex > dark-cv.tex
sed 's/\\darkmodefalse/\\darkmodetrue/' cv_pt-br.tex > dark-cv_pt-br.tex

# Compile both versions
tectonic light-cv.tex && tectonic light-cv_pt-br.tex
tectonic dark-cv.tex && tectonic dark-cv_pt-br.tex

# Clean up the temporary tex files (optional)
rm light-cv.tex dark-cv.tex
rm light-cv_pt-br.tex dark-cv_pt-br.tex
