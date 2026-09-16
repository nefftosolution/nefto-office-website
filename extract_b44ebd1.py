import os
import subprocess
import re

files = [
    'WebDevelopment.jsx',
    'AppDevelopment.jsx',
    'AIMachineLearning.jsx',
    'GraphicDesigning.jsx',
    'DigitalMarketing.jsx',
    'SearchEngineOptimization.jsx'
]

results = {}
for filename in files:
    try:
        content = subprocess.check_output(f'git show b44ebd1:src/pages/{filename}', shell=True, text=True)
        # extract <SEO ... />
        match = re.search(r'<SEO\s+([^>]+?)\s*\/>', content, re.DOTALL)
        if match:
            results[filename] = match.group(1)
        else:
            results[filename] = "NOT FOUND"
    except Exception as e:
        results[filename] = str(e)

for f, c in results.items():
    print(f"--- {f} ---")
    print(c)
    print("")

