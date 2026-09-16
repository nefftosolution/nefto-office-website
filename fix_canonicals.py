import os
import re

files_to_fix = {
    'AIMachineLearning.jsx': 'https://nefftosolution.com/services/python-ml-ai',
    'GraphicDesigning.jsx': 'https://nefftosolution.com/services/graphic-design'
}

for filename, correct_canonical in files_to_fix.items():
    filepath = os.path.join('src', 'pages', filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace just the canonical line inside the SEO block
    content = re.sub(
        r'canonical="https://nefftosolution\.com/services/[^"]+"',
        f'canonical="{correct_canonical}"',
        content
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed canonical in {filename}")

