import os
import re

base_dir = 'src'

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts')) and not file.endswith('routing.ts') and not file.endswith('request.ts') and not file.endswith('middleware.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            orig_content = content
            
            content = re.sub(r"import\s+Link\s+from\s+['\"]next/link['\"];?", "import { Link } from '@/i18n/routing';", content)
            
            if 'usePathname' in content or 'useRouter' in content:
                content = content.replace("import { usePathname } from 'next/navigation';", "import { usePathname } from '@/i18n/routing';")
                content = content.replace("import { useRouter } from 'next/navigation';", "import { useRouter } from '@/i18n/routing';")
                content = content.replace("import { usePathname, useRouter } from 'next/navigation';", "import { usePathname, useRouter } from '@/i18n/routing';")
                
            if content != orig_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'Updated {path}')
