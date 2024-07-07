## portfolio/blog 

- domain: cloudflare
- hosting: cloudflare pages 
- frameworks: astro

blog posts are markdown files.

to (continuously build) /cv page from latex document:  
`watchexec -e .tex 'pandoc public/cv.tex -o src/pages/_cv.html'`
