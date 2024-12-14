import csv
import json

# Read the CSV file
data = []
with open('anime.csv', 'r', encoding='utf-8') as csv_file:
    reader = csv.DictReader(csv_file)
    for row in reader:
        # Convert numeric fields to appropriate types
        row['anime_id'] = int(row['anime_id'])
        row['episodes'] = int(row['episodes']) if row['episodes'].isdigit() else None
        row['rating'] = row['rating']
        row['members'] = int(row['members'])
        data.append(row)

# Write to JSON file
with open('anime.json', 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, indent=4)

print("JSON file generated: anime.json")
