import json
from jinja2 import Environment, FileSystemLoader

# Load the dataset
with open('dataset/anime.json', 'r') as f:
    anima_data = json.load(f)

# Set up Jinja2 environment
env = Environment(loader=FileSystemLoader('templates'))
template = env.get_template('base.html')

# Render the HTML
rendered_html = template.render(dataset=json.dumps(anima_data))

# Save to the output folder
output_path = "index.html"

# import os
# os.makedirs(output_path, exist_ok=True)

with open(output_path, 'w') as f:
    f.write(rendered_html)

print(f"Static site generated at {output_path}")
