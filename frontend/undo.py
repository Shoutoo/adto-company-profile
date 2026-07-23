import os

target_dir = r'C:\Users\lenovo\.gemini\antigravity\scratch\adto-company-profile\frontend\src\app\(public)'

for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content.replace('backgroundVariant="mesh"', 'backgroundVariant="dark"')
            
            # Revert CtaSection
            new_content = new_content.replace('<CtaSection\n        variant="brand"', '<CtaSection\n        variant="dark"')
            
            # Revert HeroSection button (if it was brand and needs to be something else, let's leave it as brand)
            
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print('Restored variants in ' + filepath)
