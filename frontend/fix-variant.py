import os

files_to_fix = [
    'src/app/[locale]/(public)/career/[slug]/page.tsx',
    'src/app/[locale]/(public)/projects/[slug]/page.tsx',
    'src/app/[locale]/(public)/services/[slug]/page.tsx'
]

for file in files_to_fix:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('        variant="solid"\n', '')
    content = content.replace('        variant="corporate"\n', '')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
