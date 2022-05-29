# merging multiple csv files without merging the header
{ head -n1 dataset_label_0.csv; for f in dataset_label_*.csv; do tail -n+2 "$f"; done; } > merged_dataset.csv

# count records in csv files
cat merged_dataset.csv | wc -l